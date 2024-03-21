import { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

export type Module = {
  _id: string;
  name: string;
  description: string;
  course?: string;
  lessons?: {
    _id: string;
    name: string;
    description: string;
    module: string;
  }[];
};

function ModuleList() {
  const { courseId } = useParams();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState<Module | undefined>(
    moduleList[0]
  );

  useEffect(() => {
    client
      .findModulesForCourse(courseId ?? "")
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const moduleOnClick = (module: Module) => {
    setSelectedModule((curModule) =>
      curModule === module ? undefined : module
    );
  };

  const handleAddModule = () => {
    client.createModule(courseId ?? "", module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
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
        <li className="list-group-item new-module-form">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <div>
            <button className="add" onClick={handleAddModule}>
              Add
            </button>
            <button className="update" onClick={handleUpdateModule}>
              Update
            </button>
          </div>
        </li>

        {moduleList.map((module) => (
          <li className="module" onClick={() => moduleOnClick(module)}>
            <div className="item header">
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
              </div>
              <span className="icons">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <button
                  className="edit"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
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
