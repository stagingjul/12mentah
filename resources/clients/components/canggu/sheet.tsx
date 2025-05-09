'use client'

import * as React from 'react'

import * as SheetPrimitive        from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X }                      from 'lucide-react'

import { Div, Span }  from '@/components/canggu/element'
import { classNames } from '@/utilities/component'

export const Sheet        = SheetPrimitive.Root
export const SheetTrigger = SheetPrimitive.Trigger
export const SheetClose   = SheetPrimitive.Close
export const SheetPortal  = SheetPrimitive.Portal

export const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay className={classNames('fixed inset-0 z-50 bg-gray-200/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className )} {...props} ref={ref} />
))

export const SheetVariant = cva('fixed z-50 gap-10 bg-background p-8 shadow-xl transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:border-gray-200/10 md:py-8 lg:px-16', {
    variants : {
        side : {
            top    : 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            bottom : 'inset-x-0 bottom-0 border-t-8 border-primary shadow-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom md:border-gray-200/50',
            left   : 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
            right  : 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        },
    },
    defaultVariants : {
        side : 'right',
    }},
)

export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof SheetVariant> {}
export const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
        <SheetOverlay />

        <SheetPrimitive.Content className={classNames(SheetVariant({ side }), className)} ref={ref} {...props}>
            <SheetPrimitive.Close className={'absolute right-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-primary'}>
                <X className={'size-8 text-primary'} />
                <Span className={'sr-only'}>Close</Span>
            </SheetPrimitive.Close>

            {children}
        </SheetPrimitive.Content>
    </SheetPortal>
))

export const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <Div className={classNames('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)

export const SheetFooter = ({ className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <Div className={classNames('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className )} {...props} />
)

export const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>(({ className, ...props }, ref) => (
    <SheetPrimitive.Title className={classNames('text-lg font-semibold text-foreground', className)} ref={ref} {...props} />
))

export const SheetDescription = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Description>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>(({ className, ...props }, ref) => (
    <SheetPrimitive.Description className={classNames('text-sm text-muted-foreground', className)} ref={ref} {...props} />
))

SheetOverlay.displayName     = SheetPrimitive.Overlay.displayName
SheetHeader.displayName      = 'Sheet Header'
SheetContent.displayName     = SheetPrimitive.Content.displayName
SheetDescription.displayName = SheetPrimitive.Description.displayName
SheetTitle.displayName       = SheetPrimitive.Title.displayName
SheetFooter.displayName      = 'Sheet Footer'
