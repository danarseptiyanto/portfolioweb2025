import { Head } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head title="Danar Septiyanto" />
            <Navbar />
            <Hero />
            <Projects />
            <Blog />
            <Footer />
        </>
    );
}
