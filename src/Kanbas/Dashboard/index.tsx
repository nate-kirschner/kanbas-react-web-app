import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaRegFileAlt } from "react-icons/fa";
import "./index.css";

function Dashboard() {
  return (
    <div className="p-4 dashboard">
      <h1>
        Dashboard
        <hr />
      </h1>
      <h2>Published Courses ({courses.length})</h2> <hr />
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

                    <FaRegFileAlt className="fs-2" size="20px" />
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
