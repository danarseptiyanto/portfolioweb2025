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
        maxWidth: {
            "screen-xl": "1285px", // Change from 1280px to 1285px
        },
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                lora: ["Lora"],
            },
            colors: {
                "l-primary": "#030712",
                "l-secondary": "#374151",
                "l-bg": "#F9F9F6",
                "l-accent": "#0751CF",
                "d-primary": "#FFFFFF",
                "d-secondary": "#B8BDC7",
                "d-bg": "#14161A",
                "d-accent": "#8EC5FF",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
