import { Head } from '@inertiajs/react'

import { PlaceholderPattern }  from '@/components/ui/placeholder-pattern'
import Layout                  from '@/layouts/portal'
import { type BreadcrumbItem } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title : 'Platform',
        href  : '/dashboard/',
    },
    {
        title : 'Dashboard',
        href  : '/dashboard/',
    },
]

export default () => {
    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title={'Dashboard'} />
            
            <div className={'flex h-full flex-1 flex-col gap-4 rounded-xl p-4'}>
                <div className={'grid auto-rows-min gap-4 md:grid-cols-3'}>
                    <div className={'border-gray-200/70 dark:border-gray-200 relative aspect-video overflow-hidden rounded-xl border'}>
                        <PlaceholderPattern className={'absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20'} />
                    </div>
                    <div className={'border-gray-200/70 dark:border-gray-200 relative aspect-video overflow-hidden rounded-xl border'}>
                        <PlaceholderPattern className={'absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20'} />
                    </div>
                    <div className={'border-gray-200/70 dark:border-gray-200 relative aspect-video overflow-hidden rounded-xl border'}>
                        <PlaceholderPattern className={'absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20'} />
                    </div>
                </div>
                <div className={'border-gray-200/70 dark:border-gray-200 relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min'}>
                    <PlaceholderPattern className={'absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20'} />
                </div>
            </div>
        </Layout>
    )
}
