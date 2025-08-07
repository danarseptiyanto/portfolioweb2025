import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Content from "../components/Project/Content";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

const Project = () => {
    return (
        <>
            <Head title="Danar Septiyanto" />
            <Navbar />
            <Content />
            <Footer />
        </>
    );
};

export default Project;
