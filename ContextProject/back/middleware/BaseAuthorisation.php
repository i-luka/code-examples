<?php

namespace Elar\Gukmo\middleware;

use Elar\Gukmo\exceptions\NotAuthorizedHttpException;
use Elar\Gukmo\services\AuthorizationService;
use Elar\Gukmo\services\LDAPService;
use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;

class BaseAuthorisation implements IMiddleware
{
    /**
     * @var AuthorizationService
     */
    protected $auth;
    /**
     * @var string
     */
    protected $login;

    public function __construct()
    {
        $config = [
            'hosts'    => [getenv('DC_HOST')],
            'base_dn'  => getenv('BASE_DN'),
            'username' => getenv('DC_USER'),
            'password' => getenv('DC_PWD')
        ];
        $ldap         = new LDAPService($config);
        $this->auth   = new AuthorizationService($ldap);
        $this->login  = $_SERVER['REMOTE_USER'] ?? '';
        if (getenv('APP_ENV') === 'dev-local') {
            $this->login  = 'demo10@guk.zs';
        }
    }

    /**
     * @inheritDoc
     */
    public function handle(Request $request)
    {
        if (empty($this->login)) {
            throw new NotAuthorizedHttpException('Вы не авторизованы');
        }
    }
}