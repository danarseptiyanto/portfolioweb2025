import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // "resources/css/app.css",
                "resources/js/app.jsx",
                "vendor/tomatophp/filament-simple-theme/resources/css/theme.css",
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
