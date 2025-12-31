import React from 'react'
import Header from "../components/Header.jsx";
import Breadcrumb from "../components/about/Breadcrumb.jsx";

function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 md:pt-35">
                <Breadcrumb />
            </main>
        </div>
    )
}

export default About;
