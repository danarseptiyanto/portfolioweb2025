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
            },
            colors: {
                "l-primary": "#FF2D20",
                "l-secondary": "#212529",
                "l-bg": "#F8F9FA",
                "l-accent": "#E9ECEF",
                "d-primary": "#FF2D20",
                "d-secondary": "#212529",
                "d-bg": "#F8F9FA",
                "d-accent": "#E9ECEF",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
