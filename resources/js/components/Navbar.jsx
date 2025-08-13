import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import ThemeToggleButton from "./Buttons/ThemeToggleButton";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import NavbarMenu from "./Navbar/NavbarMenus";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 pt-8 md:pt-12">
                <Link
                    href="/"
                    className="relative z-50 flex items-center gap-2"
                >
                    <div
                        className={`aspect-square rounded-full bg-l-accent p-2.5 dark:bg-d-accent md:rounded-none md:p-2 ${isMenuOpen ? "border border-white" : "border border-l-accent dark:border-d-accent"}`}
                    >
                        <img src="/img/ui/logo-navbar.svg" alt="Logo" />
                    </div>
                    <h1
                        className={`text-xl text-l-primary dark:text-d-primary md:text-2xl ${isMenuOpen ? "text-white" : ""}`}
                    >
                        <b>danar</b>sept
                    </h1>
                </Link>
                <div className="flex gap-1 md:gap-2">
                    <ThemeToggleButton />
                    <button
                        id="menu"
                        type="button"
                        onClick={toggleMenu}
                        className={`relative z-50 aspect-square gap-1.5 rounded-full bg-l-accent p-2.5 font-semibold text-white hover:bg-l-accent dark:bg-d-accent dark:bg-d-accent/90 ${isMenuOpen ? "border border-white" : "border-0"}`}
                    >
                        {isMenuOpen ? (
                            <RiCloseLine size={25} />
                        ) : (
                            <RiMenu4Line size={25} />
                        )}
                    </button>
                </div>
            </div>

            {/* Separated Mobile Menu Component */}
            <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </>
    );
};

export default Navbar;
