import React from "react";
import ReactMarkdown from "react-markdown";

const Content = ({ article }) => {
    return (
        <>
            <div className="px-5 py-10 md:py-16">
                <div>
                    <img
                        src={`/storage/${article.thumbnail}`}
                        className="mx-auto h-full w-auto rounded-xl object-contain md:rounded-2xl lg:w-[1024px]"
                        alt="Thumbnail"
                    />
                </div>
                <div className="mx-auto w-auto lg:w-[723px]">
                    <div className="mb-5 mt-6 space-y-1 md:mb-8 md:mt-14 md:space-y-1.5">
                        <h2 className="text-xl text-l-accent dark:text-d-accent md:text-2xl">
                            Article
                        </h2>
                        <h1 className="font-lora text-2xl font-bold leading-tight text-l-primary dark:text-d-primary md:text-[40px]">
                            {article.title}
                        </h1>
                    </div>
                    <article className="prose dark:prose-invert lg:prose-lg prose-h1:m-3 prose-h1:mx-0 prose-h1:text-2xl prose-h1:font-semibold prose-p:m-2 prose-p:mx-0 prose-p:leading-normal prose-p:text-l-secondary prose-ul:mx-0 prose-ul:my-2 prose-ul:leading-normal prose-img:m-4 prose-img:mx-0 prose-img:rounded-xl dark:prose-p:text-d-primary lg:prose-h1:text-3xl">
                        <ReactMarkdown>
                            {article.description ?? ""}
                        </ReactMarkdown>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Content;
