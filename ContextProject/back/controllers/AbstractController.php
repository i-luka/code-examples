<?php

namespace Elar\Gukmo\controllers;

use Elar\Gukmo\models\Request;
use Elar\Gukmo\models\Response;
use Pecee\SimpleRouter\SimpleRouter as Router;

abstract class AbstractController
{
    /**
     * @var Response
     */
    protected $response;
    /**
     * @var Request
     */
    protected $request;

    public function __construct()
    {
        $this->request = Router::router()->getRequest();
        $this->response =  new \Pecee\Http\Response($this->request);
    }

    public function renderTemplate($template) {
        ob_start();
        include $template;
        return ob_get_clean();
    }

    public function renderContent(string $content) {
        ob_start();
        echo $content;
        return ob_get_clean();
    }

    public function setCors()
    {
        $this->response->header('Access-Control-Allow-Origin: *');
        $this->response->header('Access-Control-Request-Method: OPTIONS');
        $this->response->header('Access-Control-Allow-Credentials: true');
        $this->response->header('Access-Control-Max-Age: 3600');
    }
}