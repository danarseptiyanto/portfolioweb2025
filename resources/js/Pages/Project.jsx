import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Content from "../components/Project/Content";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

const Project = ({ project }) => {
    return (
        <>
            <Head title="Danar Septiyanto" />
            <Navbar />
            <Content project={project} />
            <Footer />
        </>
    );
};

export default Project;
