// Components
import { FormEventHandler } from 'react'

import { Head, Link, useForm } from '@inertiajs/react'
import { LoaderCircle }        from 'lucide-react'

import { Button }        from '@/components/canggu/button'
import { Form, Message } from '@/components/canggu/form'
import Layout            from '@/layouts/auth'

export default ({ status }: { status? : string }) => {
    const { post, processing } = useForm({})

    const submit: FormEventHandler = (event) => {
        event.preventDefault()

        post(route('verification.send'))
    }

    return (
        <Layout>
            <Head title={'Email Verification'} />

            {
                status === 'verification-link-sent' && (
                    <Message>
                        A new verification link has been sent to the email address you provided during registration.
                    </Message>
                )
            }

            <Form onSubmit={submit}>
                <Button appearance={'outline'} disabled={processing} size={'lg'} type={'submit'}>
                    {processing && <LoaderCircle />}
                    Resend verification email
                </Button>

                <Link href={route('logout')} method={'post'}>
                    Log out
                </Link>
            </Form>
        </Layout>
    )
}
