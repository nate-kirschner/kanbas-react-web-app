import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { CourseType } from "../Dashboard";

interface CoursesProps {
  courses: CourseType[];
}

function Courses({ courses }: CoursesProps) {
  const params = useParams();
  const course = courses.find((course) => course._id === params.courseId);
  const coursePage = params["*"];

  return (
    <div className="courses">
      <h1 className="d-none d-md-block">
        <HiMiniBars3 /> Course {course?.name}{" "}
        <span style={{ color: "gray" }}>
          {">"} {coursePage}
        </span>
        <hr style={{ color: "gray" }} />
      </h1>
      <div className="nav-content">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="content">
          <div
            className="overflow-y-scroll "
            // style={{ left: "320px", top: "50px" }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
