import { Link }                         from '@inertiajs/react'
import { BookOpen, Folder, LayoutGrid } from 'lucide-react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarSeparator, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/canggu/sidebar'
import { NavFooter }                                                                                                                             from '@/components/nav-footer'
import { NavMain }                                                                                                                               from '@/components/nav-main'
import { NavUser }                                                                                                                               from '@/components/nav-user'
import { type NavItem }                                                                                                                          from '@/types'

const mainNavItems: NavItem[] = [
    {
        title : 'Dashboard',
        href  : '/dashboard',
        icon  : LayoutGrid,
    },
    {
        title : 'Dashboard',
        href  : '/dashboards',
        icon  : LayoutGrid,
    },
]

const footerNavItems: NavItem[] = [
    {
        title : 'Repository',
        href  : 'https://github.com/laravel/react-starter-kit',
        icon  : Folder,
    },
    {
        title : 'Documentation',
        href  : 'https://laravel.com/docs/starter-kits',
        icon  : BookOpen,
    },
]

export default () => {
    return (
        <Sidebar appearance={'inset'}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size={'lg'} asChild>
                            <Link href={'/dashboard'} prefetch>
                                Luniasola
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarSeparator />

            <SidebarFooter>
                <NavFooter className={'mt-auto'} items={footerNavItems} />
                <NavUser />
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
