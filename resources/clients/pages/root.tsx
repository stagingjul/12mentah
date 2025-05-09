import { Link, usePage } from '@inertiajs/react'

import { type SharedData } from '@/types'

export default () => {
    const { auth } = usePage<SharedData>().props

    return (
        <>
            {
                auth.user ? (
                    <Link href={route('dashboard')}>Dashboard</Link>
                ) : (
                    <>
                        <Link href={route('login')}>
                            Log in
                        </Link>

                        <Link href={route('register')}>
                            Register
                        </Link>
                    </>
                )
            }
        </>
    )
}
