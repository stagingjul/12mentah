import '@/assets/style/tailwind.css'

import { createRoot } from 'react-dom/client'

import { createInertiaApp }     from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

import { initializeTheme } from '@/hooks/use-appearance'

createInertiaApp({
    title   : (title) => title ? title + ' - ' + (import.meta.env.VITE_APP_NAME || 'Luniasola') : (import.meta.env.VITE_APP_NAME || 'Luniasola'),
    resolve : (name)  => resolvePageComponent('./pages/' + name + '.tsx', import.meta.glob('./pages/**/*.tsx')),
    setup({ App, el, props }) {
        createRoot(el)
            .render(<App {...props} />)
    },
    progress : {
        color : '#4B5563',
    },
})

initializeTheme()
