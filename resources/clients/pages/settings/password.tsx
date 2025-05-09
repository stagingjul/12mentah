import { FormEventHandler, useRef } from 'react'

import { Transition }    from '@headlessui/react'
import { Head, useForm } from '@inertiajs/react'

import HeadingSmall            from '@/components/heading-small'
import InputError              from '@/components/input-error'
import { Button }              from '@/components/ui/button'
import { Input }               from '@/components/ui/input'
import { Label }               from '@/components/ui/label'
import AppLayout               from '@/layouts/portal'
import SettingsLayout          from '@/layouts/settings/layout'
import { type BreadcrumbItem } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title : 'Password settings',
        href  : '/settings/password',
    },
]

export default () => {
    const passwordInput = useRef<HTMLInputElement>(null)
    const currentPasswordInput = useRef<HTMLInputElement>(null)

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password      : '',
        password              : '',
        password_confirmation : '',
    })

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault()

        put(route('password.update'), {
            preserveScroll : true,
            onSuccess      : () => reset(),
            onError        : (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation')
                    passwordInput.current?.focus()
                }

                if (errors.current_password) {
                    reset('current_password')
                    currentPasswordInput.current?.focus()
                }
            },
        })
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={'Profile settings'} />

            <SettingsLayout>
                <div className={'space-y-6'}>
                    <HeadingSmall description={'Ensure your account is using a long, random password to stay secure'} title={'Update password'} />

                    <form className={'space-y-6'} onSubmit={updatePassword}>
                        <div className={'grid gap-2'}>
                            <Label htmlFor={'current_password'}>Current password</Label>

                            <Input
                                autoComplete={'current-password'}
                                className={'mt-1 block w-full'}
                                id={'current_password'}
                                placeholder={'Current password'}
                                ref={currentPasswordInput}
                                type={'password'}
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                            />

                            <InputError message={errors.current_password} />
                        </div>

                        <div className={'grid gap-2'}>
                            <Label htmlFor={'password'}>New password</Label>

                            <Input
                                autoComplete={'new-password'}
                                className={'mt-1 block w-full'}
                                id={'password'}
                                placeholder={'New password'}
                                ref={passwordInput}
                                type={'password'}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className={'grid gap-2'}>
                            <Label htmlFor={'password_confirmation'}>Confirm password</Label>

                            <Input
                                autoComplete={'new-password'}
                                className={'mt-1 block w-full'}
                                id={'password_confirmation'}
                                placeholder={'Confirm password'}
                                type={'password'}
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />

                            <InputError message={errors.password_confirmation} />
                        </div>

                        <div className={'flex items-center gap-4'}>
                            <Button disabled={processing}>Save password</Button>

                            <Transition
                                enter={'transition ease-in-out'}
                                enterFrom={'opacity-0'}
                                leave={'transition ease-in-out'}
                                leaveTo={'opacity-0'}
                                show={recentlySuccessful}
                            >
                                <p className={'text-sm text-neutral-600'}>Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </SettingsLayout>
        </AppLayout>
    )
}
