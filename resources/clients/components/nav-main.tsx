import { Link, usePage } from '@inertiajs/react'

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/canggu/sidebar'
import { type NavItem }                                                                     from '@/types'

export function NavMain({ items = [] }: { items : NavItem[] }) {
    const page = usePage()

    return (
        <SidebarGroup className={'px-2 py-0'}>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton isActive={item.href === page.url} tooltip={{ children : item.title }} asChild>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
