import React from "react";
import { Link } from "@inertiajs/react";
import { RiArrowRightLine } from "react-icons/ri";

const Menu = ({ isMenuOpen, setIsMenuOpen, url, title }) => {
    return (
        <li className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 px-5 md:gap-8">
            <Link
                href={url}
                className="whitespace-nowrap text-3xl font-bold text-white transition-colors hover:text-opacity-80 md:text-5xl"
                onClick={() => setIsMenuOpen(false)}
            >
                {title}
            </Link>
            <div className="w-full border-b border-b-white"></div>
            <button
                type="button"
                className="inline-flex h-fit items-center gap-0.5 rounded-full border border-white px-4 py-2.5 text-sm font-medium text-l-primary hover:bg-l-primary/10 md:px-6 md:py-3 md:text-lg"
            >
                <RiArrowRightLine className="text-white" size={22} />
            </button>
        </li>
    );
};

export default Menu;
