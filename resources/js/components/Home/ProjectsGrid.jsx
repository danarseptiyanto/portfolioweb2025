import React from "react";
import { useState, useEffect } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import BtnSecondary from "../Buttons/BtnSecondary";

const ProjectsGrid = ({ title, img, slug, tag }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect if it's a mobile device
        const checkMobile = () =>
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return (
        <div>
            <div
                className="relative"
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
                <img
                    className="rounded-2xl bg-gray-200 md:rounded-3xl"
                    src={`/img/ui/${img}`}
                    alt="Thumbnail"
                />
                <div
                    className={`absolute inset-0 flex items-end justify-between rounded-2xl bg-opacity-50 bg-gradient-to-t from-black/50 via-transparent to-transparent p-7 text-lg font-semibold text-white transition-opacity duration-300 md:rounded-3xl ${
                        isHovered || isMobile ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <a href={slug} className="pointer-events-auto">
                        {title}
                    </a>
                    <a href={slug} className="pointer-events-auto">
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
                    </a>
                </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
                <div>
                    <a
                        href={slug}
                        className="pointer-events-auto text-xl font-bold leading-none text-l-primary"
                    >
                        {title}
                    </a>
                    <p className="text-lg text-l-secondary">{tag}</p>
                </div>
                <BtnSecondary>
                    <RiArrowRightLine className="text-l-primary" size={22} />
                </BtnSecondary>
            </div>
        </div>
    );
};

export default ProjectsGrid;
