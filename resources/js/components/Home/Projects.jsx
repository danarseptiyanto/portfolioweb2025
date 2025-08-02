import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import ProjectsGrid from "../../components/Home/ProjectsGrid";

const Projects = () => {
    return (
        <>
            <div className="mx-auto mb-10 mt-12 flex max-w-screen-xl items-center justify-between px-5">
                <span className="text-[57px] font-semibold">Featured Work</span>
                <BtnPrimary>
                    Show More{" "}
                    <RiArrowRightLine className="text-white" size={22} />
                </BtnPrimary>
            </div>
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-7 px-5">
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
