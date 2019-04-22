<?php

namespace App\Http\Controllers\Api\Admin;

use App\Mail\Admin\ApproveEmail;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class PendingRegistrationController extends Controller
{
    /**
     * @param Request $request
     * @param $status
     * @throws \Illuminate\Validation\ValidationException
     */
    public function index(Request $request, $status)
    {
        $request->request->add(['status' => $status]);

        $this->validate($request, [
            'status' => 'required|string|in:pending,rejected,approved'
        ]);

        $users = User::query()
            ->select('id', 'name', 'email', 'phone', 'surname', 'gender')
            ->where('status', '=', User::getStatuses()[strtolower($status)])
            ->paginate(2);

        return response()->json(['users' => $users]);
    }


    /**
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function approve(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required|integer|exists:users,id'
        ]);

        $password = rand(100000, 999999);

        $user = User::query()
            ->where('status', '=', User::PENDING)
            ->findOrFail($request->user_id);

        $user->update([
            'password' => Hash::make($password),
            'status'   => User::APPROVED
        ]);


        Mail::to($user)
            ->queue(new ApproveEmail($user, $password));

        return response()->json(['message' => 'success']);
    }
}
