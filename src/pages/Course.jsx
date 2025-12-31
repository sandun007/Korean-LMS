import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Actionbar from "../components/course/Actionbar.jsx";
import Courses from "../components/course/courses.jsx";

function Course() {
    return (
        <div >
            <Header />
            <main>
                <Actionbar />
                <Courses />
            </main>
            <Footer />
        </div>
    )
}

export default Course
