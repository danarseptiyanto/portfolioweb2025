import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Blog = () => {
    return (
        <div className="mx-auto my-16 flex max-w-screen-xl justify-between px-5">
            <p className="w-60 text-[32px] font-bold leading-tight">
                Writing and News
            </p>
            <div className="-m-4">
                <div className="flex w-[868px] items-center justify-between border-b border-b-l-line py-5">
                    <div className="space-y-2">
                        <p className="text-xl font-medium text-l-primary">
                            Tailwind CSS is so intuitive that if you know CSS,
                            you know Tailwind
                        </p>
                        <p className="text-l-secondary">2 Februrary 2025</p>
                    </div>
                    <div className="aspect-square rounded-full bg-l-line/40 p-2">
                        <RiArrowRightUpLine className="text-[24px]" />
                    </div>
                </div>
                <div className="flex w-[868px] items-center justify-between border-b border-b-l-line py-5">
                    <div className="space-y-2">
                        <p className="text-xl font-medium text-l-primary">
                            Tailwind CSS is so intuitive that if you know CSS,
                            you know Tailwind
                        </p>
                        <p className="text-l-secondary">2 Februrary 2025</p>
                    </div>
                    <div className="aspect-square rounded-full bg-l-line/40 p-2">
                        <RiArrowRightUpLine className="text-[24px]" />
                    </div>
                </div>
                <div className="flex w-[868px] items-center justify-between border-b border-b-l-line py-5">
                    <div className="space-y-2">
                        <p className="text-xl font-medium text-l-primary">
                            Tailwind CSS is so intuitive that if you know CSS,
                            you know Tailwind
                        </p>
                        <p className="text-l-secondary">2 Februrary 2025</p>
                    </div>
                    <div className="aspect-square rounded-full bg-l-line/40 p-2">
                        <RiArrowRightUpLine className="text-[24px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
