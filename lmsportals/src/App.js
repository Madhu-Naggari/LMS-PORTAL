import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import Assessment from "./components/Assessment"
import Course from "./components/Course"
import Schedule from "./components/Schedule"
import Profile from "./components/Profile"
import Login from "./components/Login"
// import { BlogSinglePage } from "./components/common/BlogSinglePage"
// import { About } from "./pages/About"
// import { Courses } from "./pages/Courses"
// import { Blog } from "./pages/Blog"
// import { Instructor } from "./pages/Instructor"
import { Header } from './components/common/Header';
import Signup from "./components/Signup"
import CourseInfo from "./components/CourseInfo"
import Payment from './components/Upi';
import Compiler from "./components/Compiler"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/CourseInfo" element={<CourseInfo />} />
          <Route path="/Upi" element={<Payment />} />
          <Route path="/Compiler" element={<Compiler />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
