<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class PasswordController extends Controller
{
    /**
     * Display the View.
     *
     * @return \Inertia\Response Inertia Response Rendering the View
     */
    public function edit(): Response
    {
        return Inertia::render('settings/password');
    }

    /**
     * Update the User's Password.
     *
     * @param  \Illuminate\Http\Request          $request HTTP Request Instance
     * @return \Illuminate\Http\RedirectResponse Redirect to Password Update Page with Status
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password'         => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
