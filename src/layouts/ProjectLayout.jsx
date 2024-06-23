import Nav from "../components/Nav";
import ProjectInfo from "../components/ProjectInfo";

// eslint-disable-next-line react/prop-types
function ProjectLayout({ children }) {
  return (
    <div className="p-container">
      <Nav />
      <div className="p-content">
        <ProjectInfo />
        {children}
      </div>
    </div>
  );
}
export default ProjectLayout;
