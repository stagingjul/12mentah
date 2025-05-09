<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the View.
     *
     * @return \Inertia\Response Inertia Response Rendering the View
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an Incoming Authentication Request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest $request Request Containing Login Credentials
     * @return \Illuminate\Http\RedirectResponse    Redirect to the Intended Route After Authentication
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy An Authenticated Session.
     *
     * @param  \Illuminate\Http\Request          $request HTTP Request Instance
     * @return \Illuminate\Http\RedirectResponse Redirect to the Homepage After Session Destroyed
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
