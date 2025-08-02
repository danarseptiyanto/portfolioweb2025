import React from "react";
import { RiArrowDownLine, RiArrowRightUpLine } from "@remixicon/react";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import BtnLink from "../../components/Buttons/BtnLink";
const Hero = () => {
    return (
        <>
            <div className="mx-auto my-20 flex max-w-screen-xl px-5">
                <div className="me-6 mt-10 w-[100px] border-t-4 border-l-accent"></div>
                <h1 className="max-w-[995px] font-lora text-[87px] leading-none text-l-primary">
                    Freelance Fullstack Web Dev Available For Hire{" "}
                    <span className="inline-flex items-center gap-5 font-bold text-l-accent">
                        Get To Know Me{" "}
                        <a
                            href="#"
                            className="h -min aspect-square w-min rounded-full bg-l-accent p-2.5 hover:bg-l-accent/90"
                        >
                            <RiArrowDownLine className="text-white" size={24} />
                        </a>
                    </span>
                </h1>
            </div>
            <div className="mx-auto mb-10 flex max-w-screen-xl items-center justify-between px-5 pt-3">
                <BtnPrimary>
                    Lets Talk{" "}
                    <RiArrowRightUpLine className="text-white" size={24} />
                </BtnPrimary>
                <p className="max-w-[1030px] text-xl text-l-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    are do eiusmod tempor incididunt ut labore et magna aliqua.
                    Ut enim ad minim veniam!
                </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-screen-xl items-center justify-between gap-20 px-5 pt-3">
                <div className="w-full border-t border-l-line"></div>
                <div className="flex items-center gap-10">
                    <BtnLink
                        href="https://github.com/danarsept"
                        text="github"
                    />
                    <BtnLink href="#" text="Instagram" />
                    <BtnLink href="#" text="dribbble" />
                </div>
            </div>
        </>
    );
};

export default Hero;
