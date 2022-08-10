<?php

namespace Elar\Gukmo\middleware;

use Elar\Gukmo\exceptions\HttpForbiddenException;
use Elar\Gukmo\exceptions\NotAuthorizedHttpException;
use Elar\Gukmo\models\constants\AccessGroups;
use Pecee\Http\Request;

class SoldersSearchAuthorization extends BaseAuthorisation
{
    /**
     * @inheritDoc
     * @throws HttpForbiddenException | NotAuthorizedHttpException
     */
    public function handle(Request $request)
    {
        parent::handle($request);
        if (
            false === $this->auth->hasAccessTo($this->login, AccessGroups::GLOBAL_SEARCH_GROUP)
        ) {
            throw new HttpForbiddenException('Нет доступа');
        }
    }
}