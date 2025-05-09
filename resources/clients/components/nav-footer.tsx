import { type ComponentPropsWithoutRef } from 'react'

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/canggu/sidebar'
import { Icon }                                                                               from '@/components/icon'
import { type NavItem }                                                                       from '@/types'

export function NavFooter({
    items,
    className,
    ...props
}: ComponentPropsWithoutRef<typeof SidebarGroup> & {
    items : NavItem[];
}) {
    return (
        <SidebarGroup {...props} className={`group-data-[collapsible=icon]:p-0 ${className || ''}`}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                className={'text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100'}
                                asChild
                            >
                                <a href={item.href} rel={'noopener noreferrer'} target={'_blank'}>
                                    {item.icon && <Icon className={'h-5 w-5'} iconNode={item.icon} />}
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
