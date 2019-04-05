<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\UnauthenticatedException;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * @param LoginRequest $request
     * @throws UnauthenticatedException
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials))
            throw new UnauthenticatedException();

        if(empty(auth()->user()->api_token)) {
            $token = base64_encode(Str::random(191));

            auth()->user()->update([
                'api_token' => $token
            ]);
        }

        return response()->json([
            'token'     => \auth()->user()->api_token ?? $token,
            'message'   => 'success'
        ], 200);
    }

    public function register(RegisterRequest $request)
    {

    }
}
