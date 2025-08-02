import { RiMenu4Line } from "@remixicon/react";
import ThemeToggleButton from "./Buttons/ThemeToggleButton";

const Navbar = () => {
    return (
        <div className="mx-auto mt-12 flex max-w-screen-xl items-center justify-between px-5">
            <div className="flex items-center gap-2">
                <div className="aspect-square bg-l-accent p-2">
                    <img src="/img/ui/logo-navbar.svg" alt="Logo" />
                </div>
                <h1 className="text-2xl text-l-primary">
                    <b>danar</b>sept
                </h1>
            </div>
            <div className="flex gap-2">
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
