import { Head } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";

export default function Home() {
    return (
        <>
            <Head title="Danar Septiyanto" />
            <Navbar />
            <Hero />
            <Projects />
        </>
    );
}
