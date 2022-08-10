<?php

namespace Elar\Gukmo\middleware;

use Elar\Gukmo\exceptions\HttpForbiddenException;
use Elar\Gukmo\exceptions\NotAuthorizedHttpException;
use Elar\Gukmo\models\constants\AccessGroups;
use Pecee\Http\Request;

class CanAuthorize extends BaseAuthorisation
{
    /**
     * @throws NotAuthorizedHttpException|HttpForbiddenException
     */
    public function handle(Request $request)
    {
        parent::handle($request);
        if (
            false === $this->auth->hasAccessToAny($this->login, AccessGroups::CAN_AUTHORIZE_GROUPS)
        ) {
            throw new HttpForbiddenException('Нет доступа');
        }
    }
}