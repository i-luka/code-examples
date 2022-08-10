<?php

namespace Elar\Gukmo\services;

use Adldap\Adldap;
use Adldap\Connections\Provider;
use Adldap\Models\User;
use Elar\Gukmo\interfaces\LDAPInterface;

/**
 * Класс для работы с LDAP
 * @see AuthorizationService
 */
class LDAP implements LDAPInterface
{
    /** @var Adldap */
    private $ldap;
    /** @var  Provider */
    private $provider;

    public function __construct(array $config)
    {
        $this->ldap = new Adldap();
        $this->ldap->addProvider($config);
    }

    /**
     * Создаёт провайдера для запросов к LDAP
     * @return void
     */
    private function connect()
    {
        $this->provider = $this->ldap->connect();
    }

    /**
     * Получение провайдера для поиска по LDAP
     * @return mixed
     */
    public function search()
    {
        if ($this->provider === null) {
            $this->connect();
        }
        return $this->provider->search();
    }

    public function getLdap()
    {
        return $this->ldap;
    }

    /**
     * Возвращает группы в которых состоит пользователь AD по его uuid
     * @param string $uuid
     * @return array
     */
    public function getUserGroupsByUid(string $uuid): array
    {
        $user = $this->getUserByUid($uuid);
        return $user ? $user->getMemberOf() : [];
    }

    /**
     * Возвращает пользователя AD по его uuid
     * @param string $uid
     * @return User|null
     */
    public function getUserByUid(string $uid)
    {
        return $this->search()
                    ->where('uid','=', $uid)
                    ->first();
    }

    /**
     * Возвращает группы в которых состоит пользователь AD по его логину
     * @param string $login
     * @return array
     */
    public function getUserGroupsByLogin(string $login): array
    {
        list($uid, $domain) = explode('@', $login);

        return $this->getUserGroupsByUid($uid);
    }
}