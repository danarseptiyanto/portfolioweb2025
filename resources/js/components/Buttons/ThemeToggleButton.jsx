import React from "react";

import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "@remixicon/react";

export default function ThemeToggleButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDark = localStorage.getItem("theme") === "dark";
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-1.5 rounded-full border border-l-primary bg-none px-5 py-2.5 font-semibold text-l-primary hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-700 dark:hover:text-white"
        >
            {isDark ? (
                <>
                    <RiSunLine className="-ms-1" size={18} />
                    Light
                </>
            ) : (
                <>
                    <RiMoonLine className="-ms-1" size={18} />
                    Dark
                </>
            )}
        </button>
    );
}
