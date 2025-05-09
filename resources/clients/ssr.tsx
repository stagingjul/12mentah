import { renderToString } from 'react-dom/server'

import { createInertiaApp }     from '@inertiajs/react'
import createServer             from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

import { type RouteName, route } from '$/tightenco/ziggy'

createServer((page) =>
    createInertiaApp({
        render  : renderToString,
        title   : (title) => title ? title + ' - ' + (import.meta.env.VITE_APP_NAME || 'Luniasola') : (import.meta.env.VITE_APP_NAME || 'Luniasola'),
        resolve : (name) => resolvePageComponent('./pages/' + name + '.tsx', import.meta.glob('./pages/**/*.tsx')),
        setup   : ({ App, props }) => {
            /** @ts-expect-error: suppressing type error due to `global.route` function declaration */
            global.route<RouteName> = (name, params, absolute) =>
                route(name, params as Record<string, unknown>, absolute, {
                    /** @ts-expect-error: suppressing type error due to `page.props.ziggy` access */
                    ...page.props.ziggy,
                    /** @ts-expect-error: suppressing type error due to `page.props.ziggy.location` access */
                    location : new URL(page.props.ziggy.location),
                })

            return <App {...props} />
        },
        page,
    }),
)
