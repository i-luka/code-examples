<?php

use Elar\Gukmo\controllers\api\ReportController;
use Elar\Gukmo\exceptions\{
    HttpForbiddenException,
    NotAuthorizedHttpException
};
use Elar\Gukmo\middleware\{
    BaseAuthorisation,
    CanAuthorize,
    SoldersSearchAuthorization,
    UnitsSearchAuthorization
};
use Pecee\Http\Request;
use Pecee\SimpleRouter\SimpleRouter as Router;

/**
 * @see https://packagist.org/packages/pecee/simple-router
 */

Router::get('/', '\Elar\Gukmo\controllers\PortalController@run');

Router::group([
    'prefix' => 'context/api',
    'middleware' => [BaseAuthorisation::class]
], function () {

    Router::group([
        'prefix' => 'dictionary'
    ], function () {
        Router::post('/', '\Elar\Gukmo\controllers\context\ContextController@fetch');
    });

    Router::group([
        'prefix' => 'solders',
        'middleware' => [SoldersSearchAuthorization::class]
    ], function() {
        Router::get('file/{method}/{uuid}', '\Elar\Gukmo\controllers\context\ContextController@file')
            ->where([
                'uuid' => '[\w\-]+',
                'method' => '[\w\-]+'
            ]);
        Router::post('/', '\Elar\Gukmo\controllers\context\ContextController@fetch');
    });

    Router::group([
        'prefix' => 'units',
        'middleware' => [UnitsSearchAuthorization::class]
    ], function() {
        Router::get('file/{method}/{uuid}', '\Elar\Gukmo\controllers\context\ContextController@file');
        Router::get('files/{structureName}/{uuid}', '\Elar\Gukmo\controllers\context\ContextController@files')
            ->where([
                'uuid' => '[\w\-]+',
                'structureName' => '[\w\-]+',
            ]);
        Router::get('doc/{structureName}/{uuid}/{filename}', '\Elar\Gukmo\controllers\context\ContextController@doc')
            ->where([
                'uuid' => '[\w\-]+',
                'structureName' => '[\w\-]+',
                'filename' => '[\w\-\d.]+',
            ]);
        Router::post('/', '\Elar\Gukmo\controllers\context\ContextController@fetch');
    });
});

Router::get('/controller', '\Elar\Gukmo\controllers\VueController@run')
    ->setMatch('/\/([\w]+)/');

Router::error(function(Request $request, Exception $exception) {
    $response = Router::response();
    switch (get_class($exception)) {
        case HttpForbiddenException::class: {
            $response->httpCode(403);
            break;
        }
        case NotAuthorizedHttpException::class: {
            $response->httpCode(401);
            break;
        }
        case Throwable::class:
        case Exception::class: {
            $response->httpCode(500);
            break;
        }
    }
    $message = $exception->getMessage();
    $appEnv = getenv('APP_ENV');
    if ($appEnv === 'prod' || $appEnv === 'stage') {
        return $response->json([]);
    }

    return $response->json([$message]);
});