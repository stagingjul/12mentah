import { type ClassValue, clsx } from 'clsx'
import { twMerge }               from 'tailwind-merge'

export const classNames = (...args: ClassValue[]) => twMerge(clsx(args))
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
