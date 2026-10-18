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
import CourseCreate2 from "@/components/dashboard/course/Createcourse2.jsx";
import CourseView from "@/components/dashboard/course/Courseview.jsx";
import Bookshow from "@/components/dashboard/book/Bookshow.jsx";
import Profile from "@/components/dashboard/profile/Profilesettings.jsx";
import QuizPage from "@/components/dashboard/quiz/QuizPage.jsx";
import QuizLogin from "@/components/dashboard/quiz/QuizLogin.jsx";
import Quiz from "@/components/dashboard/quiz/Quiz.jsx";
import AdminQuizPanel from "@/components/dashboard/quiz/AdminQuizPanel.jsx";
import AdminQuizDashboard from "@/components/dashboard/quiz/AdminQuizDashboard.jsx";

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
                    <Route path="/dashboard/course/create2" element={<CourseCreate2/>} />
                    <Route path="/courseview" element={<CourseView/>} />
                    <Route path="/dashboard/book" element={<Bookshow/>} />
                    <Route path="/dashboard/adminquizdashboard" element={<AdminQuizDashboard/>} />
                    <Route path="/dashboard/adminquiz" element={<AdminQuizPanel/>} />
                    <Route path="/dashboard/quiz" element={<QuizPage/>} />
                    <Route path="/dashboard/quizlogin" element={<QuizLogin/>} />
                    <Route path="/dashboard/quizshow" element={<Quiz/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
