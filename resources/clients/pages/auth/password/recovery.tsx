import { FormEventHandler } from 'react'

import { Head, Link, useForm } from '@inertiajs/react'
import { LoaderCircle }        from 'lucide-react'

import { Button }                                from '@/components/canggu/button'
import { Div }                                   from '@/components/canggu/element'
import { Form, Fieldset, Label, Message, Input } from '@/components/canggu/form'
import Layout                                    from '@/layouts/auth'

export default ({ status }: { status? : string }) => {
    const { data, setData, post, processing, errors } = useForm<Required<{ email : string }>>({
        email : '',
    })

    const submit: FormEventHandler = (event) => {
        event.preventDefault()
        
        post(route('password.recovery.store'))
    }

    return (
        <Layout>
            <Head title={'Forgot Password'} />

            {status && <Message>{status}</Message>}

            <Form onSubmit={submit}>
                <Fieldset>
                    <Label htmlFor={'email'}>Email address</Label>
                    <Input autoComplete={'off'} id={'email'} name={'email'} placeholder={'email@example.com'} type={'email'} value={data.email} autoFocus onChange={({ target }) => setData('email', target.value)} />
                    <Message>{errors.email}</Message>
                </Fieldset>

                <Button disabled={processing} size={'lg'} type={'submit'}>
                    {processing && <LoaderCircle />}
                    Send Link
                </Button>
            </Form>

            <Div>
                <Link href={route('login')}>Login</Link>
            </Div>
        </Layout>
    )
}
