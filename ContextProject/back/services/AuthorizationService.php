<?php

namespace Elar\Gukmo\services;

use Elar\Gukmo\interfaces\AuthorizationServiceInterface;
use Elar\Gukmo\interfaces\LDAPInterface;

/**
 * Служба для работы с правами доступа через AD группы
 */
class AuthorizationService implements AuthorizationServiceInterface
{
    /** @var LDAP */
    private $LDAP;

    public function __construct(
        LDAPInterface $LDAP
    )
    {
        $this->LDAP  = $LDAP;
    }

    /**
     * Проверяет есть ли у юзера доступ к какому-то функционалу на основе
     * принадлежности его к определённой группе
     * @param string $login
     * @param string $group
     * @return bool
     */
    public function hasAccessTo(string $login, string $group): bool
    {
        return $this->isMemberOf($login, $group);
    }

    /**
     * Проверяет есть ли у юзера доступ к какому-то функционалу на основе
     * принадлежности его к определённой группе
     * @param string $login
     * @param string $group
     * @return bool
     */
    public function isMemberOf(string $login, string $group): bool
    {
        $userGroups = $this->LDAP->getUserGroupByLogin($login);
        $isMember = false;
        $length = count($userGroups);
        for ($i = 0; $i < $length; $i++) {
            $groupName = $this->getGroupNameFromFQDN($userGroups[$i]);
            if ($group === $groupName) {
                $isMember = true;
                break;
            }
        }
        return $isMember;
    }

    private function getGroupNameFromFQDN(string $userGroup): string
    {
        list($nameCN, $rest) = explode(',', $userGroup);
        list($cn, $name) = explode('=', $nameCN);

        return $name ?? '';
    }
}