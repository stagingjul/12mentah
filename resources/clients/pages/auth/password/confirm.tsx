// Components
import { FormEventHandler } from 'react'

import { Head, useForm } from '@inertiajs/react'
import { LoaderCircle }  from 'lucide-react'

import { Button }                                from '@/components/canggu/button'
import { Form, Fieldset, Label, Message, Input } from '@/components/canggu/form'
import Layout                                    from '@/layouts/auth'

export default () => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<{ password : string }>>({
        password : '',
    })

    const submit: FormEventHandler = (event) => {
        event.preventDefault()

        post(route('password.confirm'), {
            onFinish : () => reset('password'),
        })
    }

    return (
        <Layout>
            <Head title={'Confirm Password'} />

            <Form onSubmit={submit}>
                <Fieldset>
                    <Label htmlFor={'password'}>Password</Label>
                    <Input autoComplete={'current-password'} id={'password'} name={'password'} placeholder={'Password'} type={'password'} value={data.password} autoFocus onChange={({ target }) => setData('password', target.value)} />
                    <Message>{errors.password}</Message>
                </Fieldset>

                <Button disabled={processing}>
                    {processing && <LoaderCircle />}
                    Confirm Password
                </Button>
            </Form>
        </Layout>
    )
}
