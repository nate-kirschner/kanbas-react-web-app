import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: {
    _id: string;
    name: string;
    description: string;
    module: string;
  }[];
};

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState<Module | undefined>(
    modulesList[0]
  );

  const moduleOnClick = (module: Module) => {
    setSelectedModule((curModule) =>
      curModule === module ? undefined : module
    );
  };

  return (
    <div className="modules" style={{ flexGrow: 1 }}>
      <div className="button-row">
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button id="add-module">+Module</button>
        <button>
          <FaEllipsisV className="me-2" />
        </button>
      </div>

      <hr />

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li className="module" onClick={() => moduleOnClick(module)}>
            <div className="item header">
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
              </div>
              <span className="icons">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule?._id === module._id && (
              <ul>
                {module.lessons?.map((lesson) => (
                  <li className="item">
                    <div>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                    </div>
                    <span>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
