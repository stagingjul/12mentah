'use client'

import * as React from 'react'

import { Slot }              from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { PanelLeftIcon }     from 'lucide-react'

import { Button }                                                         from '@/components/canggu/button'
import { Main, Div, Span, Anchor, UnorderedList, List }                   from '@/components/canggu/element'
import { Separator }                                                      from '@/components/canggu/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/canggu/sheet'
import { Skeleton }                                                       from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }       from '@/components/ui/tooltip'
import { useIsMobile }                                                    from '@/hooks/use-mobile'
import { classNames }                                                     from '@/utilities/component'

type SidebarContext = {
    state         : 'expanded' | 'collapsed'
    open          : boolean
    setOpen       : (open: boolean) => void
    openMobile    : boolean
    setOpenMobile : (open: boolean) => void
    isMobile      : boolean
    toggle        : () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

export const useSidebar = () => {
    const context = React.useContext(SidebarContext)

    if (!context)
        throw new Error('useSidebar must be used within a SidebarProvider')

    return context
}

export const SidebarProvider = ({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React.ComponentProps<'div'> & { defaultOpen? : boolean, open? : boolean, onOpenChange? : (open: boolean) => void }) => {
    const isMobile = useIsMobile()

    const [ openMobile, setOpenMobile ] = React.useState(false)
    const [ _open, _setOpen ]           = React.useState(defaultOpen)

    const open = openProp ?? _open

    const setOpen = React.useCallback((value: boolean | ((value: boolean) => boolean)) => {
        const state = typeof value === 'function' ? value(open) : value

        if (setOpenProp)
            setOpenProp(state)
        else
            _setOpen(state)

        document.cookie = 'luniasola/sidebar' + '=' + state + '; path=/; max-age=' + 60 * 60 * 24 * 7
    }, [ setOpenProp, open ])

    const toggle = React.useCallback(() => {
        return isMobile ? setOpenMobile((prevOpen: boolean) => !prevOpen) : setOpen((prevOpen: boolean) => !prevOpen)
    }, [ isMobile, setOpen, setOpenMobile ])

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault()
                toggle()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [ toggle ])

    const state   = open ? 'expanded' : 'collapsed' as const
    const context = React.useMemo<SidebarContext>(() => ({ state, open, setOpen, isMobile, openMobile, setOpenMobile, toggle }), [ state, open, setOpen, isMobile, openMobile, setOpenMobile, toggle ])

    return (
        <SidebarContext.Provider value={context}>
            <TooltipProvider delayDuration={0}>
                <Div className={classNames('group/sidebar-wrapper has-data-[appearance=inset]:bg-sidebar flex min-h-svh w-full', className)} data-slot={'sidebar-wrapper'} style={{'--sidebar-width' : '16.000rem', '--sidebar-width-icon' : '3.000rem', ...style } as React.CSSProperties} {...props}>
                    {children}
                </Div>
            </TooltipProvider>
        </SidebarContext.Provider>
    )
}

export const Sidebar = ({ side = 'left', appearance = 'default', collapsible = 'offcanvas', className, children, ...props }: React.ComponentProps<'div'> & { side? : 'left' | 'right', appearance? : 'default' | 'float' | 'inset', collapsible? : 'offcanvas' | 'icon' | 'none' }) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === 'none')
        return (
            <Div className={classNames('bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col', className)} data-slot={'sidebar'} {...props}>
                {children}
            </Div>
        )

    if (isMobile)
        return (
            <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
                <SheetHeader className={'sr-only'}>
                    <SheetTitle>Sidebar</SheetTitle>
                    <SheetDescription>Displays the mobile sidebar.</SheetDescription>
                </SheetHeader>
                
                <SheetContent className={'bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden'} data-mobile={'true'} data-sidebar={'sidebar'} data-slot={'sidebar'} side={side} style={{'--sidebar-width' : '18.000rem'} as React.CSSProperties}>
                    <Div className={'flex h-full w-full flex-col'}>{children}</Div>
                </SheetContent>
            </Sheet>
        )

    return (
        <Div className={'group peer text-sidebar-foreground hidden md:block'} data-appearance={appearance} data-collapsible={state === 'collapsed' ? collapsible : ''} data-side={side} data-slot={'sidebar'} data-state={state}>
            <Div className={classNames('relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180', appearance === 'float' || appearance === 'inset' ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]' : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)', className)} />
            <Div className={classNames('fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex', side === 'left' ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]' : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]', appearance === 'float' || appearance === 'inset' ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]' : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r dark:group-data-[appearance=float]:border-gray-100/10 group-data-[side=right]:border-l', className)} {...props}>
                <Div className={'bg-sidebar group-data-[appearance=float]:border-gray-200 dark:group-data-[appearance=float]:border-gray-100/10 flex h-full w-full flex-col group-data-[appearance=float]:rounded-lg group-data-[appearance=float]:border group-data-[appearance=float]:shadow-sm'} data-sidebar={'sidebar'}>
                    {children}
                </Div>
            </Div>
        </Div>
    )
}

export const SidebarTrigger = ({ className, onClick, ...props }: React.ComponentProps<typeof Button>) => {
    const { toggle } = useSidebar()

    return (
        <Button appearance={'ghost'} className={className} data-sidebar={'trigger'} data-slot={'sidebar-trigger'} icon={true} size={'sm'} onClick={(event) => {onClick?.(event); toggle()}} {...props}>
            <PanelLeftIcon />
            <Span className={'sr-only'}>Toggle Sidebar</Span>
        </Button>
    )
}

export const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(({ className, ...props }, ref) => {
    const { toggle } = useSidebar()

    return <Span aria-label={'Toggle Sidebar'} className={classNames('absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 hover:after:bg-gray-200 dark:hover:after:bg-gray-100/10 group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex [[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize [[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar [[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right][data-collapsible=offcanvas]_&]:-left-2', className)} data-sidebar={'rail'} ref={ref} tabIndex={-1} title={'Toggle Sidebar'} onClick={toggle} {...props} />
})

SidebarRail.displayName = 'SidebarRail'

export const SidebarInset = ({ className, ...props }: React.ComponentProps<'main'>) => (
    <Main className={classNames('bg-background relative flex max-w-full min-h-svh flex-1 flex-col peer-data-[appearance=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[appearance=inset]:m-2 md:peer-data-[appearance=inset]:ml-0 md:peer-data-[appearance=inset]:rounded-xl md:peer-data-[appearance=inset]:shadow-sm md:peer-data-[appearance=inset]:peer-data-[state=collapsed]:ml-0', className)} data-slot={'sidebar-inset'} {...props} />
)

export const SidebarHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <Div className={classNames('flex flex-col gap-2 p-2', className)} data-sidebar={'header'} data-slot={'sidebar-header'} {...props} />
)

export const SidebarFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <Div className={classNames('flex flex-col gap-2 p-2', className)} data-sidebar={'footer'} data-slot={'sidebar-footer'} {...props} />
)

export const SidebarSeparator = ({ className, ...props }: React.ComponentProps<typeof Separator>) => (
    <Separator className={classNames(' w-auto', className)} data-sidebar={'separator'} data-slot={'sidebar-separator'} {...props} />
)

export const SidebarContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <Div className={classNames('flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden', className)} data-sidebar={'content'} data-slot={'sidebar-content'} {...props} />
)

export const SidebarGroup = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <Div className={classNames('relative flex w-full min-w-0 flex-col p-2', className)} data-sidebar={'group'} data-slot={'sidebar-group'} {...props} />
)

export const SidebarGroupLabel = ({ className, asChild = false, ...props }: React.ComponentProps<'div'> & { asChild? : boolean }) => {
    const Component = asChild ? Slot : Div

    return <Component className={classNames('text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0', className)} data-sidebar={'group-label'} data-slot={'sidebar-group-label'} {...props} />
}

export const SidebarGroupAction = ({ className, asChild = false, ...props }: React.ComponentProps<'button'> & { asChild? : boolean }) => {
    const Component = asChild ? Slot : 'button'

    return <Component className={classNames('text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0', className)} data-sidebar={'group-action'} data-slot={'sidebar-group-action'} {...props} />
}

export const SidebarGroupContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <Div className={classNames('flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden', className)} data-sidebar={'group-content'} data-slot={'sidebar-group-content'} {...props} />
)

export const SidebarMenu = ({ className, ...props }: React.ComponentProps<'ul'>) => (
    <UnorderedList className={classNames('flex w-full min-w-0 flex-col gap-1', className)} data-sidebar={'menu'} data-slot={'sidebar-menu'} {...props} />
)

export const SidebarMenuItem = ({ className, ...props }: React.ComponentProps<'li'>) => (
    <List className={classNames('group/menu-item relative', className)} data-sidebar={'menu-item'} data-slot={'sidebar-menu-item'} {...props} />
)

export const SidebarMenuVariants = cva('peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', {
    variants : {
        appearance : {
            default : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            outline : 'bg-background shadow-[0_0_0_1px_hsl(var(--gray-200))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
        },
        size : {
            sm : 'h-7 text-xs',
            md : 'h-9 text-sm',
            lg : 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
        },
    },
    defaultVariants : {
        appearance : 'default',
        size       : 'md',
    },
})

export interface SidebarMenuButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof SidebarMenuVariants> {
    asChild?    : boolean
    isActive?   : boolean
    appearance? : 'default' | 'outline'
    size?       : 'sm' | 'md' | 'lg'
    tooltip?    : string | React.ComponentProps<typeof TooltipContent>
}

export const SidebarMenuButton = ({ asChild = false, isActive = false, appearance, size, tooltip, className, ...props }: SidebarMenuButtonProps) => {
    const Component = asChild ? Slot : 'button'
    const { isMobile, state } = useSidebar()

    const button = (<Component className={classNames(SidebarMenuVariants({ appearance, size }), className)} data-active={isActive} data-sidebar={'menu-button'} data-size={size} data-slot={'sidebar-menu-button'} {...props} />)

    if (!tooltip)
        return button

    if (typeof tooltip === 'string')
        tooltip = { children : tooltip }

    return (
        <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent align={'center'} hidden={state !== 'collapsed' || isMobile} side={'right'} {...tooltip} />
        </Tooltip>
    )
}

export interface SidebarMenuActionProps extends React.ComponentProps<'button'> {
    asChild?     : boolean
    showOnHover? : boolean
}

export const SidebarMenuAction = ({ className, asChild = false, showOnHover = false, ...props }: SidebarMenuActionProps) => {
    const Component = asChild ? Slot : 'button'

    return <Component className={classNames('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-[.500rem] right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 after:absolute after:-inset-2 md:after:hidden peer-data-[size=sm]/menu-button:top-1 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 group-data-[collapsible=icon]:hidden', showOnHover && 'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0', className)} data-sidebar={'menu-action'} data-slot={'sidebar-menu-action'} {...props} />
}

export const SidebarMenuBadge = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <Div className={classNames('pointer-events-none absolute top-2 right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground peer-data-[size=sm]/menu-button:top-1 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 group-data-[collapsible=icon]:hidden', className)} data-sidebar={'menu-badge'} data-slot={'sidebar-menu-badge'} {...props} />
)

export const SidebarMenuSkeleton = ({ className, icon = false, ...props }: React.ComponentProps<'div'> & { icon? : boolean }) => {
    const width = React.useMemo(() => Math.floor(Math.random() * 40) + 50 + '%', [])

    return (
        <Div className={classNames('flex h-8 items-center gap-2 rounded-md px-2', className)} data-sidebar={'menu-skeleton'} data-slot={'sidebar-menu-skeleton'} {...props}>
            {icon && <Skeleton className={'size-4 rounded-md'} data-sidebar={'menu-skeleton-icon'} />}
            <Skeleton className={'h-4 max-w-(--skeleton-width) flex-1'} data-sidebar={'menu-skeleton-text'} style={{'--skeleton-width' : width} as React.CSSProperties} />
        </Div>
    )
}

export const SidebarMenuSub = ({ className, ...props }: React.ComponentProps<'ul'>) => (
    <UnorderedList className={classNames('border-gray-200 mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5', 'group-data-[collapsible=icon]:hidden', className)} data-sidebar={'menu-sub'} data-slot={'sidebar-menu-sub'} {...props} />
)

export const SidebarMenuSubItem = ({ className, ...props }: React.ComponentProps<'li'>) => (
    <List className={classNames('group/menu-sub-item relative', className)} data-sidebar={'menu-sub-item'} data-slot={'sidebar-menu-sub-item'} {...props} />
)

export const SidebarMenuSubButton = ({ asChild = false, size = 'md', isActive = false, className, ...props }: React.ComponentProps<'a'> & { asChild? : boolean, size? : 'sm' | 'md', isActive? : boolean }) => {
    const Component = asChild ? Slot : Anchor

    return <Component className={classNames('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', 'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground', size === 'sm' && 'text-xs', size === 'md' && 'text-sm', 'group-data-[collapsible=icon]:hidden', className)} data-active={isActive} data-sidebar={'menu-sub-button'} data-size={size} data-slot={'sidebar-menu-sub-button'} {...props} />
}

Sidebar.displayName              = 'Sidebar'
SidebarProvider.displayName      = 'Sidebar Provider'
SidebarTrigger.displayName       = 'Sidebar Trigger'
SidebarRail.displayName          = 'Sidebar Rail'
SidebarInset.displayName         = 'Sidebar Inset'
SidebarHeader.displayName        = 'Sidebar Header'
SidebarFooter.displayName        = 'Sidebar Footer'
SidebarSeparator.displayName     = 'Sidebar Separator'
SidebarContent.displayName       = 'Sidebar Content'
SidebarGroup.displayName         = 'Sidebar Group'
SidebarGroupLabel.displayName    = 'Sidebar Group Label'
SidebarGroupAction.displayName   = 'Sidebar Group Action'
SidebarGroupContent.displayName  = 'Sidebar Group Content'
SidebarMenu.displayName          = 'Sidebar Menu'
SidebarMenuItem.displayName      = 'Sidebar Menu Item'
SidebarMenuButton.displayName    = 'Sidebar Menu Button'
SidebarMenuAction.displayName    = 'Sidebar Menu Action'
SidebarMenuBadge.displayName     = 'Sidebar Menu Badge'
SidebarMenuSkeleton.displayName  = 'Sidebar Menu Skeleton'
SidebarMenuSub.displayName       = 'Sidebar Menu Sub'
SidebarMenuSubItem.displayName   = 'Sidebar Menu Sub Item'
SidebarMenuSubButton.displayName = 'Sidebar Menu Sub Button'
