import type { route as routeFn } from '$/tightenco/ziggy'

declare global {
    const route: typeof routeFn
}
