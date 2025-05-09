import { FormEventHandler } from 'react'

import { Head, useForm, Link } from '@inertiajs/react'
import { LoaderCircle }        from 'lucide-react'

import { Button }                                          from '@/components/canggu/button'
import { Div }                                             from '@/components/canggu/element'
import { Form, Fieldset, Label, Message, Input, Checkbox } from '@/components/canggu/form'
import { Paragraph }                                       from '@/components/canggu/text'
import Layout                                              from '@/layouts/auth'

interface PropsLogin {
    status? : string
}

type FormLogin = {
    email    : string
    password : string
    remember : boolean
}

export default ({ status }: PropsLogin) => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<FormLogin>>({
        email    : '',
        password : '',
        remember : false,
    })

    const submit: FormEventHandler = (event) => {
        event.preventDefault()
        
        post(route('login.store'), {
            onFinish : () => reset('password'),
        })
    }

    return (
        <Layout>
            <Head title={'Login'} />

            <Form onSubmit={submit}>
                <Fieldset>
                    <Label htmlFor={'email'}>Email address</Label>
                    <Input autoComplete={'email'} id={'email'} placeholder={'email@example.com'} type={'email'} value={data.email} autoFocus required onChange={({ target }) => setData('email', target.value)} />
                    <Message>{errors.email}</Message>
                </Fieldset>

                <Fieldset>
                    <Label htmlFor={'password'}>Password</Label>
                    <Input autoComplete={'current-password'} id={'password'} placeholder={'Password'} type={'password'} value={data.password} required onChange={({ target }) => setData('password', target.value)} />
                    <Message>{errors.password}</Message>
                </Fieldset>

                <Fieldset>
                    <Checkbox checked={data.remember} id={'remember'} name={'remember'} onClick={() => setData('remember', !data.remember)} />
                    <Label htmlFor={'remember'}>Remember me</Label>
                </Fieldset>

                <Button disabled={processing} size={'lg'} type={'submit'}>
                    {processing && <LoaderCircle />}
                    Login
                </Button>
            </Form>

            <Div>
                <Link href={route('password.recovery')}>
                    Forgot password?
                </Link>
            </Div>

            <Div>
                <Paragraph>Don't have an account? <Link href={route('register')}>Register</Link></Paragraph>
            </Div>

            {status && <Message>{status}</Message>}
        </Layout>
    )
}
