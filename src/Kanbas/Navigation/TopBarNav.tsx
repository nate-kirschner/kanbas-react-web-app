import { useParams } from "react-router";
import { courses } from "../Database";
import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaBars,
  FaCaretDown,
  FaCartArrowDown,
} from "react-icons/fa";
import KanbasNavigation from ".";
import CourseNavigation from "../Courses/Navigation";

const TopBarNav = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [showCoursesNav, setShowCoursesNav] = useState(false);

  const [showKanbasMenu, setShowKanbasMenu] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);

  const params = useParams();

  useEffect(() => {
    setShowCoursesMenu(false);
    setShowKanbasMenu(false);
    const path = params["*"]?.split("/");

    if (path?.[0] === "Courses") {
      setTitle(path[1]);
      setSubtitle(path[2]);
      setShowCoursesNav(true);
    } else {
      setTitle(path?.[0] ?? "");
      setSubtitle("");
      setShowCoursesNav(false);
    }
  }, [params]);

  return (
    <>
      <div className="topbar-nav d-md-none">
        <FaBars
          color="white"
          onClick={() => setShowKanbasMenu((val) => !val)}
        />
        <div
          className="titles"
          onClick={() => setShowCoursesMenu((val) => !val)}
        >
          <span>{title}</span>
          <span>{subTitle}</span>
        </div>
        {showCoursesNav ? (
          <FaCaretDown
            color="white"
            onClick={() => setShowCoursesMenu((val) => !val)}
          />
        ) : (
          <div />
        )}
      </div>
      {showKanbasMenu && (
        <div className="kanbas-menu">
          <KanbasNavigation />
        </div>
      )}
      {showCoursesMenu && (
        <div className="courses-menu">
          <CourseNavigation linkPath={`Courses/${title}/`} />
        </div>
      )}
    </>
  );
};

export default TopBarNav;
