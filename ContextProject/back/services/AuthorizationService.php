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
     * Проверят есть ли у юзера доступ к любой из групп на осно
     * @param string $login
     * @param array $groups
     * @return bool
     */
    public function hasAccessToAny(string $login, array $groups): bool
    {
        $hasAccess = false;
        $length    = count($groups);
        for ($i = 0; $i < $length; $i++) {
            if($this->isMemberOf($login, $groups[$i])) {
                $hasAccess = true;
                break;
            }
        }
        return $hasAccess;
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