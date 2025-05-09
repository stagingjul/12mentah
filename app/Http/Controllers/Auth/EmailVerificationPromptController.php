<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the Email Verification Prompt Page.
     *
     * @param  \Illuminate\Http\Request                            $request HTTP Request Instance
     * @return \Inertia\Response|\Illuminate\Http\RedirectResponse Response or Redirect Based on Verification Status
     */
    public function __invoke(Request $request): Response|RedirectResponse
    {
        return $request->user()->hasVerifiedEmail() ? redirect()->intended(route('dashboard', absolute: false)) : Inertia::render('auth/verification/notice', ['status' => $request->session()->get('status')]);
    }
}
