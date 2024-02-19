import "./index.css";

const CourseStatus = () => {
  return (
    <div className="course-status-container d-none d-lg-block">
      <div className="course-status">
        <ul>
          <li>
            <a href="">Import Existing Content</a>
          </li>
          <li>
            <a href="">Import From Commons</a>
          </li>
          <li>
            <a href="">Choose Home Page</a>
          </li>
          <li>
            <a href="">View Course Stream</a>
          </li>
          <li>
            <a href="">New Announcement</a>
          </li>
          <li>
            <a href="">New Analytics</a>
          </li>
          <li>
            <a href="">View Course Notifications</a>
          </li>
        </ul>
      </div>

      <div className="coming-up">
        <div className="title">
          <h5>To Do</h5>
          <a href="#">View Calendar</a>
        </div>

        <ul>
          <li>
            <a href="#">Grade A1</a>
            <div>100 points</div>
            <div>Sep 7 at 11:45 am</div>
          </li>
          <li>
            <a href="#">Lecture</a>
            <div>CS4550</div>
            <div>Sep 11 at 11:45 am</div>
          </li>
          <li>
            <a href="#">CS5610 Lecture</a>
            <div>Lecture</div>
            <div>Sep 11 at 6pm</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseStatus;
