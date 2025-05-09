<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the View.
     *
     * @param  \Illuminate\Http\Request $request HTTP Request Instance
     * @return \Inertia\Response        Inertia Response Rendering the View
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('settings/profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status'          => $request->session()->get('status'),
        ]);
    }

    /**
     * Update the User's Profile Settings.
     *
     * @param  \App\Http\Requests\Settings\ProfileUpdateRequest $request Validated Profile Update Request
     * @return \Illuminate\Http\RedirectResponse                Redirect to the Profile Edit Page
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return to_route('profile.edit');
    }

    /**
     * Delete the User's Account.
     *
     * @param  \Illuminate\Http\Request          $request HTTP Request Instance
     * @return \Illuminate\Http\RedirectResponse Redirect to the Homepage After Account Deletion
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
