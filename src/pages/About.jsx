import React from 'react'
import Header from "../components/Header.jsx";
import Breadcrumbabout from "../components/about/Breadcrumbabout.jsx";
import Aboutus from "../components/about/Aboutus.jsx";
import Footer from "../components/Footer.jsx";

function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 md:pt-35">
                <Breadcrumbabout />
                <Aboutus />
            </main>
            <Footer />
        </div>
    )
}

export default About;
