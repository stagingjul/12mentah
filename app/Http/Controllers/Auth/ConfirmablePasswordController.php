<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ConfirmablePasswordController extends Controller
{
    /**
     * Display the View.
     *
     * @return \Inertia\Response Inertia Response Rendering the View
     */
    public function show(): Response
    {
        return Inertia::render('auth/password/confirm');
    }

    /**
     * Confirm the User's Password.
     *
     * @param  \Illuminate\Http\Request          $request HTTP Request Instance
     * @return \Illuminate\Http\RedirectResponse Redirect to the Intended Route After Password Confirmation
     */
    public function store(Request $request): RedirectResponse
    {
        if (! Auth::guard('web')->validate([
            'email'    => $request->user()->email,
            'password' => $request->password,
        ])) {
            throw ValidationException::withMessages([
                'password' => __('auth.password'),
            ]);
        }

        $request->session()->put('auth.password_confirmed_at', time());

        return redirect()->intended(route('dashboard', absolute: false));
    }
}
