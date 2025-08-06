import React from "react";
import { useState } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import BtnSecondary from "../Buttons/BtnSecondary";
import { Link } from "@inertiajs/react";

const ProjectsGrid = ({ title, img, slug, tag }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    className="rounded-xl bg-gray-200 md:rounded-3xl"
                    src={`/img/ui/${img}`}
                    alt="Thumbnail"
                />
                <div
                    className={`absolute inset-0 flex items-end justify-between rounded-xl bg-opacity-50 bg-gradient-to-t from-black/50 via-transparent to-transparent p-7 text-lg font-semibold text-white transition-opacity duration-300 md:rounded-3xl ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Link href={slug} className="pointer-events-auto">
                        {title}
                    </Link>
                    <Link href={slug} className="pointer-events-auto">
                        <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-full bg-l-accent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
                        >
                            Details{" "}
                            <RiArrowRightLine
                                className="text-white"
                                size={17}
                            />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between md:mt-5">
                <div>
                    <Link
                        href={slug}
                        className="pointer-events-auto text-lg font-bold leading-none text-l-primary md:text-2xl"
                    >
                        {title}
                    </Link>
                    <p className="text-base text-l-secondary md:text-lg">
                        {tag}
                    </p>
                </div>
                <BtnSecondary>
                    <RiArrowRightLine className="text-l-primary" size={22} />
                </BtnSecondary>
            </div>
        </div>
    );
};

export default ProjectsGrid;
