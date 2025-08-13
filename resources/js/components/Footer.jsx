import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import BtnLinkFooter from "./Buttons/BtnLinkFooter";

const Footer = () => {
    return (
        <>
            <div className="border-b border-b-[#0042B3] bg-l-accent py-10 dark:border-b-black/20 dark:bg-d-accent md:py-16">
                <div className="mx-auto max-w-screen-xl px-5 text-white">
                    <p className="text-sm md:text-2xl">CONVINCED? LET’S TALK</p>
                    <div className="inline-flex flex-col items-start gap-2 text-[8vw] font-bold leading-none sm:text-5xl md:flex-row md:items-center md:gap-5 md:text-[80px]">
                        <p className="break-all">
                            septiyandanar
                            <span className="text-white/60">@gmail.com</span>
                        </p>
                        <a
                            href="#"
                            className="aspect-square w-min rounded-full bg-l-secondary p-2.5 hover:bg-l-secondary/90"
                        >
                            <RiArrowRightUpLine
                                className="text-white"
                                size={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-l-accent py-6 text-white dark:bg-d-accent md:py-10">
                <div className="mx-auto flex max-w-screen-xl justify-between px-5">
                    <p>{new Date().getFullYear()} © DANARSEPT</p>
                    <div className="hidden gap-5 md:flex">
                        <BtnLinkFooter
                            href="https://github.com/danarsept"
                            text="github"
                        />
                        <BtnLinkFooter
                            href="https://www.instagram.com/dnrsept/"
                            text="Instagram"
                        />
                        <BtnLinkFooter
                            href="https://dribbble.com/danarsepti"
                            text="dribbble"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
