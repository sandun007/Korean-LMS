import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import Home from './pages/Home'
import Course from "./pages/Course.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Books from "@/pages/Books.jsx";

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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
