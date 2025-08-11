import React from "react";
import { RiArrowRightUpLine, RiArrowDownLine } from "react-icons/ri";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import BtnLink from "../../components/Buttons/BtnLink";
const Hero = () => {
    return (
        <>
            <div className="mx-auto my-16 flex max-w-screen-xl px-5 md:my-20">
                <div className="me-6 mt-10 hidden w-[100px] border-t-4 border-l-accent dark:border-d-accent md:block"></div>
                <h1 className="max-w-[995px] font-lora text-4xl leading-tight text-l-primary dark:text-d-primary md:text-[87px] md:leading-none">
                    Freelance Fullstack Web Dev Available For Hire{" "}
                    <span className="inline-flex flex-col items-start gap-2 font-bold text-l-accent dark:text-d-accent md:flex-row md:items-center md:gap-5">
                        Get To Know Me{" "}
                        <a
                            href="#"
                            className="aspect-square w-min rounded-full bg-l-accent p-2.5 hover:bg-l-accent dark:bg-d-accent dark:bg-d-accent/90"
                        >
                            <RiArrowDownLine className="text-white" size={24} />
                        </a>
                    </span>
                </h1>
            </div>
            <div className="mx-5 -mt-10 mb-3 flex max-w-screen-xl flex-col-reverse items-start justify-between gap-2.5 rounded-2xl bg-slate-200 px-5 py-5 dark:bg-white/5 md:mx-auto md:mb-10 md:mt-1 md:flex-row md:items-center md:gap-4 md:bg-opacity-0 md:px-0 md:py-0">
                <BtnPrimary>
                    Lets Talk{" "}
                    <RiArrowRightUpLine className="text-[20px] text-white md:text-[24px]" />
                </BtnPrimary>
                <p className="max-w-[1060px] text-l-secondary dark:text-d-secondary md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedare do eiusmod tempor incididunt ut labore et magna
                    aliqua. Ut enim ad minim veniam!
                </p>
            </div>
            <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-0 px-5 pt-3 md:mt-16 md:gap-20">
                <div className="hidden w-full border-t border-l-line dark:border-d-line md:block"></div>
                <div className="flex w-full flex-col items-start justify-end gap-3 md:w-min md:flex-row md:items-center md:gap-10">
                    <BtnLink
                        href="https://github.com/danarsept"
                        text="github"
                    />
                    <BtnLink
                        href="https://www.instagram.com/dnrsept/"
                        text="Instagram"
                    />
                    <BtnLink
                        href="https://dribbble.com/danarsepti"
                        text="dribbble"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
