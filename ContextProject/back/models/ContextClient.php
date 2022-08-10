<?php

namespace Elar\Gukmo\models;
use Elar\Gukmo\interfaces\ContextClientInterface;
use Elar\Gukmo\services\ContextService;

/**
 * Класс для запросов к soap апи Контекста
 * @see ContextService
 */
class ContextClient implements ContextClientInterface
{
    private $baseUrl;

    /** @var string[] */
    private $services = [
        'auth'         => '/ELARAuth?wsdl',
        'document'     => '/ELARDocument?wsdl',
        'menu'         => '/ELARCustomMenu?wsdl',
        'call'         => '/ELARRemoteMethodCall?wsdl',
        'dictionaries' => '/ELARDictionary?wsdl',
        'dictionary'   => '/ELARDictionaryValueEx?wsdl'
    ];

    public function __construct($url = null)
    {
        $this->baseUrl = $url;
    }

    public function setBaseUrl(string $url)
    {
        $this->baseUrl = $url;
    }

    /**
     * Запрос к soap апи контекста
     * @param string $service
     * @param string $method
     * @param array $args
     * @return mixed|string
     */
    public function sendRequest(string $service, string $method, array $args)
    {
        try {
            $client = $this->createClient($service);
            try {
                $res = $client->__soapCall($method, $args);
            } catch (\Throwable $e) {
                $res = $e->getMessage();
                if (
                    $res === 'Не удалось получить аутентикацию по указанному токену'
                    || $res === 'Cannot invoke "org.springframework.security.core.Authentication.getName()" because "auth" is null'
                    || $res === 'Требуется аутентификация'
                ) {
                    http_response_code(401);
                }
            }
        } catch (\Throwable $e) {
            $res = $e->getMessage();
        }

        return $res;
    }

    /**
     * Создание soap клиента для работы с апи
     * @param string $service
     * @return \SoapClient
     * @throws \SoapFault
     */
    public function createClient(string $service)
    {
        $service = $this->baseUrl . $this->services[$service];
        return new \SoapClient($service);
    }
}