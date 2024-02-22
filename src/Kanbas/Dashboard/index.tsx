import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses as initialCourses } from "../Database";
import { FaRegFileAlt } from "react-icons/fa";
import "./index.css";

export type CourseType = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  color?: string;
};

interface DashboardProps {
  courses: CourseType[];
  course: CourseType;
  setCourse: (course: CourseType) => void;
  addNewCourse: () => void;
  deleteCourse: (id: string) => void;
  updateCourse: () => void;
}

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  return (
    <div className="p-4 dashboard">
      <h1>
        Dashboard
        <hr />
      </h1>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    className="card-img-top"
                    style={{ height: 150, backgroundColor: course.color }}
                  >
                    {course.image && (
                      <img
                        src={`/images/${course.image}`}
                        className="card-img-top"
                        style={{
                          opacity: 0.5,
                          height: 150,
                        }}
                      />
                    )}
                  </div>

                  <div className="card-body">
                    <div
                      className="card-title"
                      style={{
                        color: course.color,
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}{" "}
                    </div>
                    <p className="card-text">{course.name}</p>

                    <div className="courses-buttons">
                      <FaRegFileAlt className="fs-2" size="20px" />

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
