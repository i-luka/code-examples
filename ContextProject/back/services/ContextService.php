<?php

namespace Elar\Gukmo\services;

use Elar\Gukmo\interfaces\ContextClientInterface;
use Elar\Gukmo\interfaces\ContextServiceInterface;
use Elar\Gukmo\models\ContextClient;

/**
 * Сервис для работы с soap апи Контекста
 */
class ContextService implements ContextServiceInterface
{
    /** @var ContextClient */
    protected $client;
    /**
     * @var array
     */
    protected $params;

    /** @var string */
    protected $token;

    public function __construct(ContextClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * Запрос к soap апи Контекста
     * @param string $services
     * @param string $method
     * @param array $args
     * @return mixed|string
     */
    public function sendRequest(string $services, string $method, array $args)
    {
        return $this->client->sendRequest(
            $services,
            $method,
            $args
        );
    }

    /**
     * Запрос к удалённому вызову методов soap апи Контекста
     * @param string $method
     * @param array $params
     * @return mixed|string
     */
    private function sendCallRequest(string $method, array $params)
    {
        $res = $this->client->sendRequest(
            'call',
            'call',
            [
                'call' => [
                    'methodName' => $method,
                    'token' => $this->token,
                    'params' => $params
                ]
            ]
        );
        return $res;
    }

    /**
     * Запрос токена
     * @return string
     */
    private function getToken(): string
    {
        $login = getenv('CONTEXT_LOGIN');
        $pass = getenv('CONTEXT_PASS');
        $services = 'auth';
        $method   = 'login';
        $args = ['login' => ['user' => $login, 'pass' => $pass]];

        $res = $this->client->sendRequest(
            $services,
            $method,
            $args
        );
        $this->token = $res->return;
        return $this->token;
    }

    /**
     * Получение файлов через вызов метода RCP с определённым именем
     * @param string $method
     * @param string $uuid
     * @return mixed
     */
    public function call(string $method, string $uuid)
    {
        $params = $this->getParams($uuid);

        $this->login();
        return $this->getCall($method, $params);
    }

    /**
     * Получение результата удалённого вызова метода
     * @param string $method
     * @param array $params
     * @return mixed
     */
    private function getCall(string $method, array $params)
    {
        $res = $this->sendCallRequest($method, $params);
        return $res->_return->entry;
    }

    /**
     * Авторизация
     * @return void
     */
    public function login()
    {
        if (is_null($this->token)) {
            $this->getToken();
        }
    }

    /**
     * Получение файлов через вызов метода RCP и передачи ему типа файла, который нужно получить
     * @param string $uuid
     * @param string $structureName
     * @return mixed
     */
    public function getStructureFile(string $uuid, string $structureName)
    {
        $this->login();
        $params = $this->getParams($uuid);
        $structureParams = $this->getStructureEntry($structureName);
        $entry = $params['entry'];
        $params['entry'] = [];
        $params['entry'] = [
            $entry,
            $structureParams
        ];
        $res = $this->getCall('getFilesFromStructure', $params);
        return $res;
    }

    /**
     * @param string $structureName
     * @return array
     */
    public function getStructureEntry(string $structureName)
    {
        return [
            'key' => 'structureName',
            'value' => $structureName
        ];
    }

    /**
     * @param $uuid
     * @return array[]
     */
    public function getParams($uuid)
    {
        return [
            'entry' => [
                'key' => 'DocUuid',
                'value' => $uuid
            ]
        ];
    }
}