import React from "react";
import { RiArrowRightUpLine, RiArrowRightLine } from "react-icons/ri";
import BtnPrimary from "../Buttons/BtnPrimary";

const Blog = () => {
    return (
        <div className="mx-auto my-16 flex max-w-screen-xl flex-col justify-between px-5 md:flex-row">
            <div className="mb-5 flex items-center justify-between md:items-start">
                <p className="w-60 text-xl font-bold leading-tight md:text-[32px]">
                    Writing and News
                </p>
                <div className="block md:hidden">
                    <BtnPrimary>
                        <span className="hidden md:block">Show More </span>
                        <RiArrowRightLine className="text-white" size={22} />
                    </BtnPrimary>
                </div>
            </div>
            <div className="-m-4 px-4 pb-4">
                <div className="flex w-fit items-center justify-between border-b border-b-l-line py-4 md:w-[868px] md:py-5">
                    <div className="space-y-1 md:space-y-2">
                        <p className="text-base font-medium text-l-primary md:text-xl">
                            Tailwind CSS is so intuitive that if you know CSS,
                            you know Tailwind
                        </p>
                        <p className="text-sm text-l-secondary md:text-base">
                            2 Februrary 2025
                        </p>
                    </div>
                    <div className="hidden aspect-square rounded-full bg-l-line/40 p-2 md:block">
                        <RiArrowRightUpLine className="text-[24px]" />
                    </div>
                </div>
                <div className="flex w-fit items-center justify-between border-b border-b-l-line py-4 md:w-[868px] md:py-5">
                    <div className="space-y-1 md:space-y-2">
                        <p className="text-base font-medium text-l-primary md:text-xl">
                            Tailwind CSS is so intuitive that if you know CSS,
                            you know Tailwind
                        </p>
                        <p className="text-sm text-l-secondary md:text-base">
                            2 Februrary 2025
                        </p>
                    </div>
                    <div className="hidden aspect-square rounded-full bg-l-line/40 p-2 md:block">
                        <RiArrowRightUpLine className="text-[24px]" />
                    </div>
                </div>
                <div className="flex w-fit items-center justify-between border-b border-b-l-line py-4 md:w-[868px] md:py-5">
                    <div className="space-y-1 md:space-y-2">
                        <p className="text-base font-medium text-l-primary md:text-xl">
                            Tailwind CSS is so intuitive that if you know CSS,
                            you know Tailwind
                        </p>
                        <p className="text-sm text-l-secondary md:text-base">
                            2 Februrary 2025
                        </p>
                    </div>
                    <div className="hidden aspect-square rounded-full bg-l-line/40 p-2 md:block">
                        <RiArrowRightUpLine className="text-[24px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
