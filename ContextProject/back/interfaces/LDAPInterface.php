<?php

namespace Elar\Gukmo\interfaces;
/**
 * Интерфейс для работы с LDAP
 */
interface LDAPInterface
{
    public function search();
    public function getUserGroupsByUid(string $uuid): array;
    public function getUserByUid(string $uid);
    public function getUserGroupsByLogin(string $login): array;
}