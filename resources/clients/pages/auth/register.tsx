import { FormEventHandler } from 'react'

import { Head, Link, useForm } from '@inertiajs/react'
import { LoaderCircle }        from 'lucide-react'

import { Button }                                from '@/components/canggu/button'
import { Div }                                   from '@/components/canggu/element'
import { Form, Fieldset, Label, Message, Input } from '@/components/canggu/form'
import { Paragraph }                             from '@/components/canggu/text'
import Layout                                    from '@/layouts/auth'

type FormRegister = {
    name                  : string;
    email                 : string;
    password              : string;
    password_confirmation : string;
}

export default () => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<FormRegister>>({
        name                  : '',
        email                 : '',
        password              : '',
        password_confirmation : '',
    })

    const submit: FormEventHandler = (event) => {
        event.preventDefault()

        post(route('register.store'), {
            onFinish : () => reset('password', 'password_confirmation'),
        })
    }

    return (
        <Layout>
            <Head title={'Register'} />

            <Form onSubmit={submit}>
                <Fieldset>
                    <Label htmlFor={'name'}>Name</Label>
                    <Input autoComplete={'name'} disabled={processing} id={'name'} placeholder={'Full name'} type={'text'} value={data.name} autoFocus required onChange={({ target }) => setData('name', target.value)} />
                    <Message>{errors.name}</Message>
                </Fieldset>

                <Fieldset>
                    <Label htmlFor={'email'}>Email Address</Label>
                    <Input autoComplete={'email'} disabled={processing} id={'email'} placeholder={'email@example.com'} type={'email'} value={data.email} required onChange={({ target }) => setData('email', target.value)} />
                    <Message>{errors.email}</Message>
                </Fieldset>

                <Fieldset>
                    <Label htmlFor={'password'}>Password</Label>
                    <Input autoComplete={'new-password'} disabled={processing} id={'password'} placeholder={'Password'} type={'password'} value={data.password} required onChange={({ target }) => setData('password', target.value)} />
                    <Message>{errors.password}</Message>
                </Fieldset>

                <Fieldset>
                    <Label htmlFor={'password_confirmation'}>Confirm password</Label>
                    <Input autoComplete={'new-password'} disabled={processing} id={'password_confirmation'} placeholder={'Confirm password'} type={'password'} value={data.password_confirmation} required onChange={({ target }) => setData('password_confirmation', target.value)} />
                    <Message>{errors.password_confirmation}</Message>
                </Fieldset>

                <Button disabled={processing} size={'lg'} type={'submit'}>
                    {processing && <LoaderCircle />}
                    Register
                </Button>

                <Div>
                    <Paragraph>Already have an account? <Link href={route('login')}>Login</Link></Paragraph>
                </Div>
            </Form>
        </Layout>
    )
}
