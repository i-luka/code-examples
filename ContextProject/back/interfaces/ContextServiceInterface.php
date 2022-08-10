<?php

namespace Elar\Gukmo\interfaces;
/**
 * Интерфейс для сервиса Контекста
 */
interface ContextServiceInterface
{
    public function login();
    public function call(string $method, string $uuid);
    public function getStructureFile(string $uuid, string $structureName);
}