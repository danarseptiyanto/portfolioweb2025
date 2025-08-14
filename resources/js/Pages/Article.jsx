import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Content from "../components/Article/Content";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

const Article = ({ article }) => {
    return (
        <>
            <Head title={article.title} />
            <Navbar />
            <Content article={article} />
            <Footer />
        </>
    );
};

export default Article;
