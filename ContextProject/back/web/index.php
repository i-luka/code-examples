<?php

use Dotenv\Dotenv;
use Pecee\SimpleRouter\SimpleRouter as Router;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/config/routes.php';

session_start();

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->safeLoad();
$dotenv->required([
    'HOST',
    'CONTEXT',
    'CONTEXT_LOGIN',
    'CONTEXT_PASS',
    'DC_HOST',
    'BASE_DN',
    'DC_USER',
    'DC_PWD'
]);

putenv("KRB5CCNAME=".$_SERVER['KRB5CCNAME']);

//смотри роуты в файле /../src/config/routes.php
Router::start();




















