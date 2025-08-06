import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const BtnLinkFooter = ({ href = "#", text = "Button" }) => {
    return (
        <a href={href} className="w-full md:w-fit">
            <button className="flex w-full items-center justify-between gap-2 border-b text-sm uppercase leading-8 md:w-fit md:justify-normal md:border-b-0 md:text-base md:leading-normal">
                {text}{" "}
                <RiArrowRightUpLine className="text-[24px] text-l-line md:text-[26px]" />
            </button>
        </a>
    );
};

export default BtnLinkFooter;
