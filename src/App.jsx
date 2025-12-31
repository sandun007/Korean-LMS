import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import Home from './pages/Home'
import Course from "./pages/Course.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
