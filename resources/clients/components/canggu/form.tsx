import * as React from 'react'

import * as CheckboxPrimitive            from '@radix-ui/react-checkbox'
import * as LabelPrimitive               from '@radix-ui/react-label'
import * as SelectPrimitive              from '@radix-ui/react-select'
import * as SwitchPrimitive              from '@radix-ui/react-switch'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import { Span }       from '@/components/canggu/element'
import { classNames } from '@/utilities/component'

export const Form     = React.forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(({ ...props }, ref)           => <form ref={ref} {...props} />)
export const Fieldset = React.forwardRef<HTMLFieldSetElement, React.HTMLProps<HTMLFieldSetElement>>(({ className, ...props }, ref) => <fieldset className={classNames('mb-0.5 flex flex-col gap-0.5 last:mb-0', className)} ref={ref} {...props} />)
export const Message  = React.forwardRef<HTMLSpanElement, React.HTMLProps<HTMLSpanElement>>(({ className, ...props }, ref)         => <span className={classNames('my-1.5 text-sm', className)} ref={ref} {...props} />)

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type, ...props }, ref) => (
    <input className={classNames('focus-visible:ring-primary/50 flex h-12 w-full rounded-md border border-component-input bg-foundation px-3 py-1 text-sm shadow-sm shadow-black/10 transition-colors file:mr-2.5 file:mt-2.5 file:cursor-pointer file:border-0 file:bg-transparent file:p-0 file:pl-8 file:text-sm file:font-semibold file:text-foundation-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-foundation-secondary dark:text-white dark:placeholder:text-muted/75 read-only:cursor-not-allowed read-only:bg-component-input read-only:opacity-75', className)} ref={ref} type={type} {...props} />
))

export const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root className={classNames('mb-1 flex scroll-m-20 font-sans text-sm font-light leading-normal tracking-normal peer-disabled:cursor-not-allowed peer-disabled:text-gray-500 peer-disabled:opacity-50 dark:text-white', className)} ref={ref} {...props} />
))
export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root className={classNames('focus-visible:ring-primary/50 peer size-5 shrink-0 rounded-md border border-component-input bg-foundation shadow-md shadow-black/10 focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-offset-foundation disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-foundation-secondary', className)} ref={ref} {...props}>
        <CheckboxPrimitive.Indicator className={classNames('flex items-center justify-center text-current')}>
            <Check className={'size-5'} strokeWidth={2.500} />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({ className, ...props }, ref) => (
    <SwitchPrimitive.Root className={classNames('focus-visible:ring-primary/50 peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-foundation disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200', className)} {...props} ref={ref}>
        <SwitchPrimitive.Thumb className={'size-5 rounded-full bg-primary-foreground shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'} />
    </SwitchPrimitive.Root>
))

export const Select        = SelectPrimitive.Root
export const SelectGroup   = SelectPrimitive.Group
export const SelectValue   = SelectPrimitive.Value
export const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger className={classNames('focus-visible:ring-primary/50 flex h-10 w-full items-center justify-between rounded-md border border-component-input bg-foundation px-3 text-sm ring-offset-foundation placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-foundation-secondary dark:text-white [&>span]:line-clamp-1', className)} ref={ref} {...props}>
        {children}

        <SelectPrimitive.Icon asChild>
            <ChevronDown className={'size-4 opacity-50 dark:text-white'} />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
))

export const SelectScrollUpButton = React.forwardRef<React.ElementRef<typeof SelectPrimitive.ScrollUpButton>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton className={classNames('flex cursor-default items-center justify-center py-1',className )} ref={ref} {...props}>
        <ChevronUp className={'size-4'} />
    </SelectPrimitive.ScrollUpButton>
))

export const SelectScrollDownButton = React.forwardRef<React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton className={classNames('flex cursor-default items-center justify-center py-1', className )} ref={ref} {...props}>
        <ChevronDown className={'size-4'} />
    </SelectPrimitive.ScrollDownButton>
))

export const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={classNames('relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-component-input text-component-popover-foreground shadow-md dark:border-gray-100/5', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className)} position={position} ref={ref} {...props}>
            <SelectScrollUpButton />

            <SelectPrimitive.Viewport className={classNames('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]')}>
                {children}
            </SelectPrimitive.Viewport>

            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
))

export const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label className={classNames('px-2 py-1.5 text-sm font-semibold', className)} ref={ref} {...props} />
))

export const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item className={classNames('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)} ref={ref} {...props}>
        <Span className={'absolute left-2 flex size-3.5 items-center justify-center'}>
            <SelectPrimitive.ItemIndicator>
                <Check className={'size-4'} />
            </SelectPrimitive.ItemIndicator>
        </Span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
))

const SelectSeparator = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator className={classNames('-mx-1 my-1 h-px bg-muted', className)} ref={ref} {...props} />
))

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
    <textarea className={classNames('focus-visible:ring-primary/50  flex min-h-[80px] w-full rounded-md border border-component-input bg-foundation px-3 py-2 text-sm ring-offset-foundation placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-foundation-secondary dark:text-white', className )} ref={ref} {...props} />
))

Form.displayName                   = 'Form'
Fieldset.displayName               = 'Fieldset'
Message.displayName                = 'Message'
Input.displayName                  = 'Input'
Label.displayName                  = LabelPrimitive.Root.displayName
Checkbox.displayName               = CheckboxPrimitive.Root.displayName
Switch.displayName                 = SwitchPrimitive.Root.displayName
SelectTrigger.displayName          = SelectPrimitive.Trigger.displayName
SelectSeparator.displayName        = SelectPrimitive.Separator.displayName
SelectScrollUpButton.displayName   = SelectPrimitive.ScrollUpButton.displayName
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName
SelectContent.displayName          = SelectPrimitive.Content.displayName
SelectLabel.displayName            = SelectPrimitive.Label.displayName
SelectItem.displayName             = SelectPrimitive.Item.displayName
Textarea.displayName               = 'Textarea'
