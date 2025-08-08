import { Head } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

export default function Home({ projects }) {
    return (
        <>
            <Head title="Danar Septiyanto" />
            <div className="bg-gradient-to-bl from-blue-500/50 via-transparent to-transparent dark:bg-gradient-to-br dark:from-d-accent/50 dark:via-transparent dark:to-transparent">
                <Navbar />
                <Hero />
            </div>
            <Projects projects={projects} />
            <Blog />
            <Footer />
        </>
    );
}
