<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}'

                if (appearance === 'system')
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
                        document.documentElement.classList.add('dark')
            })()
        </script>

        <title inertia>{{ config('app.name', 'Luniasola') }}</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @routes

        @viteReactRefresh
        @vite(['resources/clients/app.tsx', "resources/clients/pages/{$page['component']}.tsx"])

        @inertiaHead
    </head>
    
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
