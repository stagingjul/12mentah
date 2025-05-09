<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the View.
     *
     * @param  \Illuminate\Http\Request $request HTTP Request Instance
     * @return \Inertia\Response        Inertia Response Rendering the View
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/password/recovery', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an Incoming Password Reset Link Request.
     *
     * @param  \Illuminate\Http\Request          $request HTTP Request Instance
     * @return \Illuminate\Http\RedirectResponse Redirect Back with Status Message
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        Password::sendResetLink($request->only('email'));

        return back()->with('status', __('A reset link will be sent if the account exists.'));
    }
}
