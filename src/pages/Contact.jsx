import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/contact/Breadcrumb.jsx";
import Connectus from "../components/contact/Connectus.jsx";
import Contactus from "../components/contact/Contactus.jsx";
import Map from "../components/contact/map.jsx";

function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 md:pt-35">
                <Breadcrumb />
                <Connectus />
                <Contactus />
                <Map />
            </main>
            <Footer />
        </div>
    )
}

export default Contact;
