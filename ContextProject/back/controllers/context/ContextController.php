<?php

namespace Elar\Gukmo\controllers\context;

use Elar\Gukmo\controllers\AbstractController;
use Elar\Gukmo\interfaces\CacheOperatorInterface;
use Elar\Gukmo\interfaces\DocToPdfServiceInterface;
use Elar\Gukmo\interfaces\TranslitInterface;
use Elar\Gukmo\models\constants\Transliterate;
use Elar\Gukmo\models\ContextClient;
use Elar\Gukmo\models\DocEntry;
use Elar\Gukmo\models\Request;
use Elar\Gukmo\services\CacheOperator;
use Elar\Gukmo\services\ContextService;
use Elar\Gukmo\services\DocConverterService;
use Elar\Gukmo\services\DocToPdfService;
use Psr\SimpleCache\InvalidArgumentException;
use stdClass;

class ContextController extends AbstractController
{
    /**
     * @var ContextService
     */
    private $contextService;

    public function __construct()
    {
        parent::__construct();
        $client = new ContextClient(getenv('CONTEXT') . '/services');
        $this->contextService = new ContextService($client);
    }

    public function fetch () {
        $params = $this->getParameters();
        $res = $this->contextService->sendRequest(
            $params['service'],
            $params['method'],
            $params['args']
        );
        return $this->response->json((array) $res);
    }

    public function getParameters()
    {
        $request = new Request();
        $request->parse();
        $services = $request->service;
        $method   = $request->method;
        $args     = $request->args;

        return [
            'service' => $services,
            'method' => $method,
            'args' => $args
        ];
    }
}