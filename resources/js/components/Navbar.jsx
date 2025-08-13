import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import ThemeToggleButton from "./Buttons/ThemeToggleButton";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 pt-8 md:pt-12">
                <Link href="/" className="flex items-center gap-2">
                    <div className="aspect-square rounded-full bg-l-accent p-2.5 md:rounded-none md:p-2">
                        <img src="/img/ui/logo-navbar.svg" alt="Logo" />
                    </div>
                    <h1 className="text-xl text-l-primary md:text-2xl">
                        <b>danar</b>sept
                    </h1>
                </Link>
                <div className="flex gap-1 md:gap-2">
                    <ThemeToggleButton />
                    <button
                        id="menu"
                        type="button"
                        onClick={toggleMenu}
                        className="aspect-square gap-1.5 rounded-full border border-l-accent bg-l-accent p-2.5 font-semibold text-white hover:bg-l-accent/90 z-50 relative"
                    >
                        {isMenuOpen ? (
                            <RiCloseLine className="" size={25} />
                        ) : (
                            <RiMenu4Line className="" size={25} />
                        )}
                    </button>
                </div>
            </div>

            {/* Fullscreen Menu with Animation */}
            <div 
                className={`fixed inset-0 bg-l-accent z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <nav className="text-center">
                    <ul className="space-y-8">
                        <li>
                            <Link 
                                href="/" 
                                className="text-4xl font-bold text-white hover:text-opacity-80 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about" 
                                className="text-4xl font-bold text-white hover:text-opacity-80 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/projects" 
                                className="text-4xl font-bold text-white hover:text-opacity-80 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/contact" 
                                className="text-4xl font-bold text-white hover:text-opacity-80 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
