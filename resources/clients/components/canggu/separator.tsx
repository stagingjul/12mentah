'use client'

import * as React from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { classNames } from '@/utilities/component'

export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root className={classNames('shrink-0 bg-gray-200 dark:bg-gray-100/10', orientation === 'horizontal' ? 'h-0.25 w-full' : 'h-full w-[1px]', className)} decorative={decorative} orientation={orientation} ref={ref} {...props} />
))

Separator.displayName = SeparatorPrimitive.Root.displayName
