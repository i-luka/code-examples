<?php

namespace Elar\Gukmo\interfaces;
/**
 * Интерфейс для службы по работе с правами доступа через LDAP
 */
interface AuthorizationServiceInterface
{
    public function hasAccessTo(string $login, string $group): bool;
    public function isMemberOf(string $login, string $group): bool;
}