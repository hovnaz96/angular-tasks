<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;

class AuthApiMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        User::query()->whereApiToken($request->header('authorization'));
        return $next($request);
    }
}
