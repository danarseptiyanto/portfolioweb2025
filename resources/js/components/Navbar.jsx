import { RiMenu4Line } from "@remixicon/react";
import ThemeToggleButton from "./Buttons/ThemeToggleButton";

const Navbar = () => {
    return (
        <div className="mx-auto mt-8 flex max-w-screen-xl items-center justify-between px-5 md:mt-12">
            <div className="flex items-center gap-2">
                <div className="aspect-square rounded-full bg-l-accent p-2.5 md:rounded-none md:p-2">
                    <img src="/img/ui/logo-navbar.svg" alt="Logo" />
                </div>
                <h1 className="text-xl text-l-primary md:text-2xl">
                    <b>danar</b>sept
                </h1>
            </div>
            <div className="flex gap-1 md:gap-2">
                <ThemeToggleButton />
                <button
                    type="button"
                    className="aspect-square gap-1.5 rounded-full border border-l-accent bg-l-accent p-2.5 font-semibold text-white hover:bg-l-accent/90"
                >
                    <RiMenu4Line className="" size={25} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
