import { FormEventHandler } from 'react'

import { Transition }                   from '@headlessui/react'
import { Head, Link, useForm, usePage } from '@inertiajs/react'

import { Button }                               from '@/components/canggu/button'
import DeleteUser                               from '@/components/delete-user'
import HeadingSmall                             from '@/components/heading-small'
import InputError                               from '@/components/input-error'
import { Input }                                from '@/components/ui/input'
import { Label }                                from '@/components/ui/label'
import AppLayout                                from '@/layouts/portal'
import SettingsLayout                           from '@/layouts/settings/layout'
import { type BreadcrumbItem, type SharedData } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title : 'Profile settings',
        href  : '/settings/profile',
    },
]

type ProfileForm = {
    name  : string;
    email : string;
}

export default ({ mustVerifyEmail, status }: { mustVerifyEmail : boolean; status? : string }) => {
    const { auth } = usePage<SharedData>().props

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name  : auth.user.name,
        email : auth.user.email,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        patch(route('profile.update'), {
            preserveScroll : true,
        })
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={'Profile settings'} />

            <SettingsLayout>
                <div className={'space-y-6'}>
                    <HeadingSmall description={'Update your name and email address'} title={'Profile information'} />

                    <form className={'space-y-6'} onSubmit={submit}>
                        <div className={'grid gap-2'}>
                            <Label htmlFor={'name'}>Name</Label>

                            <Input
                                autoComplete={'name'}
                                className={'mt-1 block w-full'}
                                id={'name'}
                                placeholder={'Full name'}
                                value={data.name}
                                required
                                onChange={(e) => setData('name', e.target.value)}
                            />

                            <InputError className={'mt-2'} message={errors.name} />
                        </div>

                        <div className={'grid gap-2'}>
                            <Label htmlFor={'email'}>Email address</Label>

                            <Input
                                autoComplete={'username'}
                                className={'mt-1 block w-full'}
                                id={'email'}
                                placeholder={'Email address'}
                                type={'email'}
                                value={data.email}
                                required
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError className={'mt-2'} message={errors.email} />
                        </div>

                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className={'text-muted-foreground -mt-4 text-sm'}>
                                    Your email address is unverified.{' '}
                                    <Link
                                        as={'button'}
                                        className={'text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500'}
                                        href={route('verification.send')}
                                        method={'post'}
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className={'mt-2 text-sm font-medium text-green-600'}>
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className={'flex items-center gap-4'}>
                            <Button disabled={processing} type={'submit'}>Save</Button>

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

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    )
}
