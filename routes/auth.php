<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {
    Route::middleware(['guest'])->group(function () {
        Route::name('register')->get('register', [RegisteredUserController::class, 'create']);
        Route::name('register.store')->post('register', [RegisteredUserController::class, 'store']);
        Route::name('login')->get('login', [AuthenticatedSessionController::class, 'create']);
        Route::name('login.store')->post('login', [AuthenticatedSessionController::class, 'store']);
    });

    Route::middleware(['auth'])->group(function () {
        Route::name('logout')->post('logout', [AuthenticatedSessionController::class, 'destroy']);
    });
});

Route::prefix('password')->name('password.')->group(function () {
    Route::middleware(['guest'])->group(function () {
        Route::name('recovery')->get('recovery', [PasswordResetLinkController::class, 'create']);
        Route::name('recovery.store')->post('recovery', [PasswordResetLinkController::class, 'store']);
        Route::name('reset')->get('reset/{token}', [NewPasswordController::class, 'create']);
        Route::name('reset.store')->post('reset', [NewPasswordController::class, 'store']);
    });

    Route::middleware(['auth'])->group(function () {
        Route::name('confirm')->get('confirm', [ConfirmablePasswordController::class, 'show']);
        Route::name('confirm.store')->post('confirm', [ConfirmablePasswordController::class, 'store'])->middleware(['throttle:5,1']);
    });
});

Route::prefix('verification')->name('verification.')->group(function () {
    Route::middleware(['auth'])->group(function () {
        Route::name('notice')->get('notice', EmailVerificationPromptController::class);
        Route::name('verify')->get('verify/{id}/{hash}', VerifyEmailController::class)->middleware(['signed', 'throttle:5,1']);
        Route::name('send')->post('send', [EmailVerificationNotificationController::class, 'store'])->middleware('throttle:5,1');
    });
});
