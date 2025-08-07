import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";

const Content = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-5 py-10 md:py-16">
            <p className="mb-1 text-lg text-l-accent md:text-2xl">
                Project Web Development
            </p>
            <h1 className="font-lora text-4xl font-bold text-l-primary md:text-6xl">
                Belajar Era Digital
            </h1>
            <div className="mt-8 flex h-auto items-center justify-center overflow-hidden rounded-xl bg-gray-200 md:h-[448px] md:max-h-[448px] md:rounded-2xl">
                <img
                    src="/img/ui/thumbnail-project.png"
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
                            Belajar Era Digital
                        </h4>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base font-bold text-l-primary md:text-lg">
                            Client
                        </h3>
                        <h4 className="text-base text-l-secondary md:text-lg">
                            Belajar Era Digital
                        </h4>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base font-bold text-l-primary md:text-lg">
                            Project date
                        </h3>
                        <h4 className="text-base text-l-secondary md:text-lg">
                            September 2022
                        </h4>
                    </div>
                    <div className="pt-2 md:pt-0">
                        <a href="#" className="w-full">
                            <button
                                type="button"
                                className="inline-flex h-fit w-full items-center justify-center gap-0.5 rounded-full border bg-l-accent px-4 py-2.5 text-sm text-white hover:bg-l-accent/90 md:px-5 md:py-2.5 md:text-lg"
                            >
                                Visit Website{" "}
                                <RiArrowRightUpLine className="text-[24px] text-white md:text-[26px]" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="-mt-2 w-auto lg:w-[723px]">
                    <article class="prose prose-p:text-l-secondary prose-h1:m-3 prose-p:m-2 prose-img:m-4 prose-img:rounded-xl prose-img:mx-0 prose-h1:mx-0 prose-p:mx-0 prose-p:leading-normal lg:prose-lg prose-h1:text-2xl lg:prose-h1:text-3xl prose-h1:font-semibold">
                        <h1>Project</h1>
                        <p>
                            At Sportly, we believe in making fitness fun and
                            convenient. That's why we've developed a
                            cutting-edge mobile app and dashboard that allows
                            you to effortlessly track and manage your sport
                            activities. Whether you're an avid runner, a devoted
                            cyclist, or a fitness enthusiast, Sportly has got
                            you covered! With Sportly, you'll enjoy a
                            user-friendly interface that empowers you to log
                            your workouts, set personal goals, and monitor your
                            achievements. Whether you prefer running, cycling,
                            or engaging in various sports, our app provides
                            detailed insights into your performance,{" "}
                            <a href="http://d.com">distance</a> covered,
                            calories burned, and much more.
                        </p>
                        <p>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                        <h1>Project</h1>
                        <p>
                            For years parents have espoused the health benefits
                            of eating garlic bread with cheese to their
                            children, with the food earning such an iconic
                            status in our culture that kids will often dress up
                            as warm, cheesy loaf for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb"
                            alt=""
                        />
                        <h1>Project</h1>
                        <p>
                            For years parents have espoused the health benefits
                            of eating garlic bread with cheese to their
                            children, with the food earning such an iconic
                            status in our culture that kids will often dress up
                            as warm, cheesy loaf for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                    </article>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 gap-5 md:grid md:grid-cols-2">
                <img
                    className="grid-cols-1 rounded-lg md:col-span-2"
                    src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb"
                    alt=""
                />
                <img
                    className="rounded-lg"
                    src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb"
                    alt=""
                />
                <img
                    className="rounded-lg"
                    src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Content;
