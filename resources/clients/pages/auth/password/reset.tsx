import { FormEventHandler } from 'react'

import { Head, useForm } from '@inertiajs/react'
import { LoaderCircle }  from 'lucide-react'

import { Button }                                from '@/components/canggu/button'
import { Form, Fieldset, Label, Message, Input } from '@/components/canggu/form'
import Layout                                    from '@/layouts/auth'

interface PropsResetPassword {
    token : string;
    email : string;
}

type FormResetPassword = {
    token                 : string;
    email                 : string;
    password              : string;
    password_confirmation : string;
}

export default ({ token, email }: PropsResetPassword) => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<FormResetPassword>>({
        token                 : token,
        email                 : email,
        password              : '',
        password_confirmation : '',
    })

    const submit: FormEventHandler = (event) => {
        event.preventDefault()

        post(route('password.reset.store'), {
            onFinish : () => reset('password', 'password_confirmation'),
        })
    }

    return (
        <Layout>
            <Head title={'Reset Password'} />

            <Form onSubmit={submit}>
                <Fieldset>
                    <Label htmlFor={'email'}>Email</Label>
                    <Input autoComplete={'email'} id={'email'} name={'email'} placeholder={'email@example.com'} type={'email'} value={data.email} readOnly onChange={({ target }) => setData('email', target.value)} />
                    <Message>{errors.email}</Message>
                </Fieldset>

                <Fieldset>
                    <Label htmlFor={'password'}>Password</Label>
                    <Input autoComplete={'new-password'} id={'password'} name={'password'} placeholder={'Password'} type={'password'} value={data.password} autoFocus onChange={({ target }) => setData('password', target.value)} />
                    <Message>{errors.password}</Message>
                </Fieldset>

                <Fieldset>
                    <Label htmlFor={'password_confirmation'}>Confirm password</Label>
                    <Input autoComplete={'new-password'} id={'password_confirmation'} name={'password_confirmation'} placeholder={'Confirm password'} type={'password'} value={data.password_confirmation} onChange={({ target }) => setData('password_confirmation', target.value)} />
                    <Message>{errors.password_confirmation}</Message>
                </Fieldset>

                <Button disabled={processing} size={'lg'} type={'submit'}>
                    {processing && <LoaderCircle />}
                    Reset Password
                </Button>
            </Form>
        </Layout>
    )
}
