import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="assignments">
      <div className="button-row">
        <input placeholder="Search for Assignment" />
        <div className="button-group">
          <button>+Group</button>
          <button id="add-module">Assignment</button>
          <button>
            <FaEllipsisV className="me-2" />
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="module">
          <div className="item header">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
            </div>
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="item"
                >
                  <div>
                    <FaEllipsisV className="me-2" />

                    {assignment.title}
                  </div>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
