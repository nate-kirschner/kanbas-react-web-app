import axios from "axios";
import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;

  const [module, setModule] = useState({
    id: "id",
    name: "Module Name",
    description: "Created a module",
    course: "Web Dev",
  });

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>

      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>Update Title</a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />

      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Score</a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />

      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: !assignment.completed })
        }
        checked={assignment.completed}
      />

      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}>Get Assignment</a>
      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`}>Get Title</a>

      <h3>Module</h3>
      <a href={`${API_BASE}/a5/module`}>Get Module</a>
      <br />
      <a href={`${API_BASE}/a5/module/name`}>Get Module Name</a>
      <br />
      <a href={`${API_BASE}/a5/module/name/${module.name}`}>
        Update Module Name
      </a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <a href={`${API_BASE}/a5/module/description/${module.description}`}>
        Update Module Description
      </a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
    </div>
  );
}
export default WorkingWithObjects;
