import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import ProjectsGrid from "../../components/Home/ProjectsGrid";

const Projects = () => {
    return (
        <>
            <div className="mx-auto mb-4 mt-9 flex max-w-screen-xl items-center justify-between px-5 md:mb-10 md:mt-12">
                <span className="text-xl font-semibold md:text-[57px]">
                    Featured Work
                </span>
                <BtnPrimary>
                    <span className="hidden md:block">Show More </span>
                    <RiArrowRightLine className="text-white" size={22} />
                </BtnPrimary>
            </div>
            <div className="gird-cols-1 mx-auto grid max-w-screen-xl gap-5 px-5 md:grid-cols-2 md:gap-7">
                <ProjectsGrid
                    title="Project 1"
                    img="thumbnail-project.png"
                    slug="#"
                />
                <ProjectsGrid
                    title="Project 1"
                    img="thumbnail-project2.png"
                    slug="#"
                />
                <ProjectsGrid
                    title="Project 1"
                    img="thumbnail-project2.png"
                    slug="#"
                />
                <ProjectsGrid
                    title="Project 1"
                    img="thumbnail-project.png"
                    slug="#"
                />
            </div>
        </>
    );
};

export default Projects;
