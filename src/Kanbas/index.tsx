import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard, { CourseType } from "./Dashboard";
import Courses from "./Courses";
import TopBarNav from "./Navigation/TopBarNav";
import "./index.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const COURSES_API = `${API_BASE}/api/courses`;
  console.log("Courses API", COURSES_API);

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState<CourseType>({
    _id: "id",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.webp",
  });

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        return c._id === course._id ? course : c;
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="kanbas d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <TopBarNav />
        <div style={{ flexGrow: 1, margin: "0 24px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
