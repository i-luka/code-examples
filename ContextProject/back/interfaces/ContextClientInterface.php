<?php

namespace Elar\Gukmo\interfaces;
/**
 * Интерфейс для soap клиента
 */
interface ContextClientInterface
{
    public function sendRequest(string $service, string $method, array $args);
    public function sendCallRequest(string $method, array $params);
}