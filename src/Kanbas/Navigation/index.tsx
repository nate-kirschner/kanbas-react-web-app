import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaTv,
  FaRegArrowAltCircleRight,
  FaRegQuestionCircle,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    {
      label: "",
      icon: <img src="/images/neu_logo.png" width="80px" height="80px" />,
    },
    {
      label: "Account",
      icon: <FaRegUserCircle className="fs-2" id="account" />,
    },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="fs-2" />,
    },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    {
      label: "Calendar",
      icon: <FaRegCalendarAlt className="fs-2" />,
    },
    {
      label: "Inbox",
      icon: <FaInbox className="fs-2" />,
    },
    {
      label: "History",
      icon: <FaHistory className="fs-2" />,
    },
    {
      label: "Studio",
      icon: <FaTv className="fs-2" />,
    },
    {
      label: "Commons",
      icon: <FaRegArrowAltCircleRight className="fs-2" />,
    },
    {
      label: "Help",
      icon: <FaRegQuestionCircle className="fs-2" />,
    },
  ];

  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation ">
      {links.map(({ label, icon }, index) => (
        <li
          key={index}
          className={label && pathname.includes(label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${label}`}>
            {" "}
            {icon} {label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
