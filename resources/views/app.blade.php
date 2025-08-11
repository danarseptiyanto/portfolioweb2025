<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
    <body class="font-sans antialiased bg-l-bg dark:bg-d-bg transition-colors duration-500 ease-in-out">
    <div class="absolute bg-gradient-to-b -z-10 w-full top-0 h-screen md:bg-gradient-to-br from-transparent via-transparent to-transparent  dark:from-d-accent/50 dark:via-transparent dark:to-transparent">
    </div>
      @inertia
  </body>
</html>