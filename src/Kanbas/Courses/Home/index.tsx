import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div className="courses-home">
      <ModuleList />
      <CourseStatus />
    </div>
  );
}
export default Home;
