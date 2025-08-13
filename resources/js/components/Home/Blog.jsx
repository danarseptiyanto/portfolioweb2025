import React from "react";
import { RiArrowRightUpLine, RiArrowRightLine } from "react-icons/ri";
import BtnPrimary from "../Buttons/BtnPrimary";
import { Link } from "@inertiajs/react";

const Blog = ({ articles }) => {
    return (
        <div className="mx-auto my-20 flex max-w-screen-xl flex-col justify-between px-5 md:flex-row">
            <div className="mb-5 flex items-center justify-between md:items-start">
                <p className="w-60 text-xl font-bold leading-tight text-l-primary dark:text-d-primary md:text-[32px]">
                    Writing and News
                </p>
                <div className="block md:hidden">
                    <BtnPrimary>
                        <span className="hidden md:block">Show More </span>
                        <RiArrowRightLine className="text-white" size={22} />
                    </BtnPrimary>
                </div>
            </div>
            <div className="-m-4 block flex-col px-4 pb-4 md:flex">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="inline-flex w-full items-center justify-between border-b border-b-l-line py-4 dark:border-b-d-line md:w-[868px] md:py-5"
                    >
                        <div className="space-y-1 md:space-y-2">
                            <Link
                                href={`/blog/${article.slug}`}
                                className="text-base font-medium text-l-primary transition-colors duration-150 hover:text-l-accent dark:text-d-primary dark:hover:text-d-accent md:text-xl"
                            >
                                {article.title}{" "}
                            </Link>
                        </div>
                        <Link
                            href={`/blog/${article.slug}`}
                            className="hidden aspect-square rounded-full bg-l-line/40 p-2 text-l-primary hover:bg-l-line/50 dark:bg-d-accent dark:text-white dark:hover:bg-d-accent/90 md:block"
                        >
                            <RiArrowRightUpLine className="text-[24px]" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
