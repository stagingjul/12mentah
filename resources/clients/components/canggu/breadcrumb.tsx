import * as React from 'react'

import { Slot }                         from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { Nav, Span, OrderedList, List, Anchor } from '@/components/canggu/element'
import { classNames }                           from '@/utilities/component'

export const Breadcrumb = ({ ...props }: React.ComponentProps<'nav'>) => (
    <Nav aria-label={'breadcrumb'} data-slot={'breadcrumb'} {...props} />
)

export const BreadcrumbList = ({ className, ...props }: React.ComponentProps<'ol'>) => (
    <OrderedList className={classNames('text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5', className)} data-slot={'breadcrumb-list'} {...props} />
)

export const BreadcrumbItem = ({ className, ...props }: React.ComponentProps<'li'>) => (
    <List className={classNames('inline-flex items-center gap-1.5', className)} data-slot={'breadcrumb-item'} {...props} />
)

export const BreadcrumbLink = ({ asChild, className, ...props }: React.ComponentProps<'a'> & { asChild? : boolean }) => {
    const Component = asChild ? Slot : Anchor

    return <Component className={classNames('hover:text-foreground transition-colors', className)} data-slot={'breadcrumb-link'} {...props} />
}

export const BreadcrumbPage = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <Span aria-current={'page'} aria-disabled={'true'} className={classNames('text-foreground font-normal', className)} data-slot={'breadcrumb-page'} role={'link'} {...props} />
)

export const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => {
    return <List aria-hidden={'true'} className={classNames('[&>svg]:size-3.5', className)} data-slot={'breadcrumb-separator'} role={'presentation'} {...props}>{children ?? <ChevronRight />}</List>
}

export const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <Span aria-hidden={'true'} className={classNames('flex size-9 items-center justify-center', className)} data-slot={'breadcrumb-ellipsis'} role={'presentation'} {...props}>
        <MoreHorizontal className={'size-4'} />
        <Span className={'sr-only'}>More</Span>
    </Span>
)
