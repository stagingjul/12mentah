import { cn } from '@/utilities/component'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            className={cn('bg-gray-100/5 animate-pulse rounded-md', className)}
            data-slot={'skeleton'}
            {...props}
        />
    )
}

export { Skeleton }
