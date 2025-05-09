import { type ReactNode } from 'react'

import { usePage } from '@inertiajs/react'

import { Main }                            from '@/components/canggu/element'
import { SidebarProvider, SidebarInset }   from '@/components/canggu/sidebar'
import Header                              from '@/layouts/portal/header'
import Sidebar                             from '@/layouts/portal/sidebar'
import { SharedData, type BreadcrumbItem } from '@/types'

interface PropsPortal {
    children     : ReactNode;
    breadcrumbs? : BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: PropsPortal) => {
    const open = usePage<SharedData>().props.sidebarOpen

    return (
        <Main {...props}>
            <SidebarProvider defaultOpen={open}>
                <Sidebar />

                <SidebarInset {...props}>
                    <Header breadcrumbs={breadcrumbs} />
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </Main>
    )
}
