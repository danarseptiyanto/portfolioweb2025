import { Link } from "@inertiajs/react";
import { RiSunLine, RiMenu4Line } from "@remixicon/react";
export default function Home() {
    return (
        <div className="mx-auto mt-12 flex max-w-screen-xl items-center justify-between px-5">
            <div className="flex items-center gap-2">
                <div className="aspect-square bg-slate-400 p-2">
                    <img src="/img/ui/logo-navbar.svg" alt="Logo" />
                </div>
                <h1 className="text-2xl">
                    <b>danar</b>sept
                </h1>
            </div>
            <div className="flex gap-2">
                <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full border border-black bg-white px-5 py-2.5 font-semibold hover:bg-slate-100 hover:text-slate-700"
                >
                    <RiSunLine className="-ms-1" size={18} /> Light
                </button>
                <button
                    type="button"
                    className="aspect-square gap-1.5 rounded-full border border-black bg-black p-2.5 font-semibold text-white hover:bg-slate-800"
                >
                    <RiMenu4Line className="" size={25} />
                </button>
            </div>
        </div>
    );
}
