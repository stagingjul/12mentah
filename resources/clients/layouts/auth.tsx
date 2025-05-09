import { Main } from '@/components/canggu/element'

export default function Layout({ children, ...props }: { children : React.ReactNode }) {
    return (
        <Main {...props}>
            {children}
        </Main>
    )
}
