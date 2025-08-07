import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                lora: ["Lora"],
            },
            maxWidth: {
                "screen-xl": "1285px", // Change from 1280px to 1285px
                "screen-lg": "1029px",
            },
            colors: {
                "l-primary": "#030712",
                "l-secondary": "#374151",
                "l-bg": "#F9F9F6",
                "l-accent": "#0751CF",
                "l-line": "#B6BCC6",
                "d-primary": "#FFFFFF",
                "d-secondary": "#B8BDC7",
                "d-bg": "#14161A",
                "d-accent": "#8EC5FF",
                "d-line": "#B6BCC6",
            },
        },
    },
    plugins: [flowbite.plugin(), require("@tailwindcss/typography")],
};
