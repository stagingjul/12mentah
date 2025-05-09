import { resolve } from 'node:path'

import tailwindcss                  from '@tailwindcss/vite'
import react                        from '@vitejs/plugin-react'
import laravel                      from 'laravel-vite-plugin'
import { defineConfig, UserConfig } from 'vite'

export default defineConfig({
    plugins : [ laravel({ input : [ 'resources/clients/assets/style/tailwind.css', 'resources/clients/app.tsx' ], ssr : 'resources/clients/ssr.tsx', refresh : true }), react(), tailwindcss() ],
    esbuild : { jsx : 'automatic' },
    resolve : { alias : { '@' : resolve(__dirname, '/resources/clients/'), '$' : resolve(__dirname, '/vendor/') } },
}) as UserConfig
