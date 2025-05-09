import { Fragment } from 'react'

import { Link } from '@inertiajs/react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/canggu/breadcrumb'
import { Header, Div }                                                                                     from '@/components/canggu/element'
import { SidebarTrigger }                                                                                  from '@/components/canggu/sidebar'
import { type BreadcrumbItem as BreadcrumbItemType }                                                       from '@/types'

export default ({ breadcrumbs = [] }: { breadcrumbs? : BreadcrumbItemType[] }) => {
    return (
        <Header className={'border-gray-200 dark:border-gray-100/10 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4'}>
            <Div className={'flex items-center gap-2'}>
                <SidebarTrigger className={'-ml-1'} />

                {
                    breadcrumbs.length > 0 && (
                        <Breadcrumb>
                            <BreadcrumbList>
                                {
                                    breadcrumbs.map((item, index) => {
                                        const last = index === breadcrumbs.length - 1

                                        return (
                                            <Fragment key={index}>
                                                <BreadcrumbItem>
                                                    {
                                                        last ? (
                                                            <BreadcrumbPage>{item.title}</BreadcrumbPage>
                                                        ) : (
                                                            <BreadcrumbLink asChild>
                                                                <Link href={item.href}>{item.title}</Link>
                                                            </BreadcrumbLink>
                                                        )
                                                    }
                                                </BreadcrumbItem>
                                            
                                                {!last && <BreadcrumbSeparator />}
                                            </Fragment>
                                        )
                                    })
                                }
                            </BreadcrumbList>
                        </Breadcrumb>
                    )
                }
            </Div>
        </Header>
    )
}
