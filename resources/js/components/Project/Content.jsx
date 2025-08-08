import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import { Link } from "@inertiajs/react";
import ReactMarkdown from "react-markdown";

const Content = ({ project }) => {
    return (
        <div className="mx-auto max-w-screen-lg px-5 py-10 md:py-16">
            <p className="mb-1 text-lg text-l-accent md:text-2xl">
                Project Web Development
            </p>
            <h1 className="font-lora text-4xl font-bold text-l-primary md:text-6xl">
                {project.title}
            </h1>
            <div className="mt-8 flex h-auto items-center justify-center overflow-hidden rounded-xl bg-gray-200 md:h-[448px] md:max-h-[448px] md:rounded-2xl">
                <img
                    src={`/storage/${project.thumbnail}`}
                    className="h-full w-auto object-contain"
                    alt="Thumbnail"
                />
            </div>
            <div className="mt-7 flex flex-col justify-between gap-5 md:mt-12 md:flex-row">
                <div className="space-y-4 md:space-y-7">
                    <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base font-bold text-l-primary md:text-lg">
                            Title
                        </h3>
                        <h4 className="text-base text-l-secondary md:text-lg">
                            {project.title}
                        </h4>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base font-bold text-l-primary md:text-lg">
                            Client
                        </h3>
                        <h4 className="text-base text-l-secondary md:text-lg">
                            {project.client}
                        </h4>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base font-bold text-l-primary md:text-lg">
                            Project date
                        </h3>
                        <h4 className="text-base text-l-secondary md:text-lg">
                            {project["project-date"]}
                        </h4>
                    </div>
                    <div className="pt-2 md:pt-0">
                        <Link
                            href={project.website}
                            target="_blank"
                            className="w-full"
                        >
                            <button
                                type="button"
                                className="inline-flex h-fit w-full items-center justify-center gap-0.5 rounded-full border bg-l-accent px-4 py-2.5 text-sm text-white hover:bg-l-accent dark:bg-d-accent dark:bg-d-accent/90 md:px-5 md:py-2.5 md:text-lg"
                            >
                                Visit Website{" "}
                                <RiArrowRightUpLine className="text-[24px] text-white md:text-[26px]" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="-mt-2 w-auto lg:w-[723px]">
                    <article className="prose lg:prose-lg prose-h1:m-3 prose-h1:mx-0 prose-h1:text-2xl prose-h1:font-semibold prose-p:m-2 prose-p:mx-0 prose-p:leading-normal prose-p:text-l-secondary prose-ul:mx-0 prose-ul:my-2 prose-ul:leading-normal prose-img:m-4 prose-img:mx-0 prose-img:rounded-xl lg:prose-h1:text-3xl">
                        <ReactMarkdown>
                            {project.description ?? ""}
                        </ReactMarkdown>
                    </article>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                {project.images.map((imagePath, index) => (
                    <img
                        key={index}
                        src={`/storage/${imagePath.replace(/\\/g, "")}`}
                        alt={`Image ${index + 1}`}
                        className={`rounded-lg ${index === 0 ? "grid-cols-1 md:col-span-2" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
