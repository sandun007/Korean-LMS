import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import Home from './pages/Home'
import Course from "./pages/Course.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Books from "@/pages/Books.jsx";
import Dashboard from "@/components/dashboard/Main.jsx"
import CourseShow from "@/components/dashboard/course/Courseshow.jsx";
import CourseCreate from "@/components/dashboard/course/Createcourse.jsx";
import Bookshow from "@/components/dashboard/book/Bookshow.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact/" element={<Contact />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/dashboard/main" element={<Dashboard />} />
                    <Route path="/dashboard/course" element={<CourseShow/>} />
                    <Route path="/dashboard/course/create" element={<CourseCreate/>} />
                    <Route path="/dashboard/book" element={<Bookshow/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
