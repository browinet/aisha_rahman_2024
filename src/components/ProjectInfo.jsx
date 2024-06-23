import { useContext } from "react";
import MyContext from "../context/MyContext";

import { useParams } from "react-router-dom";
import { Project } from "../data/ProjectList";

import { motion } from "framer-motion";

function ProjectInfo() {
  const { portId } = useParams();
  const project = Project.find((item) => item.id === portId);

  const { pageTransition, isDesktop } = useContext(MyContext);
  return (
    <motion.div
      className="project"
      variants={pageTransition}
      initial="initialProject"
      animate="animateProject"
    >
      <motion.div
        className="project-wrapper"
        variants={pageTransition}
        initial="initialFadeProject"
        animate="animateFadeProject"
      >
        <div
          style={
            isDesktop
              ? {
                  minHeight: "25vh",
                  visibility: "visible",
                }
              : { visibility: "collapse", display: "none" }
          }
        />
        <div
          className="banner-mobile"
          style={{
            backgroundImage: `url(${project.coverImage[1]})`,
          }}
        ></div>
        <h1>{project.name}</h1>
        <div className="tags">
          {project.tags.slice(0).map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="infos">
          <div className="info">
            <h2>Role:</h2>
            <ul>
              <li>{project.role}</li>
            </ul>
          </div>
          <div className="info">
            <h2>Duration:</h2>
            <ul>
              <li>{project.duration}</li>
            </ul>
          </div>
          <div className="info">
            <h2>Tools:</h2>
            <ul>
              {project.programs.slice(0).map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="info">
            <h2>Objective:</h2>
            <p>{project.overview}</p>
          </div>
        </div>
        <div
          style={
            isDesktop
              ? {
                  minHeight: "25vh",
                  visibility: "visible",
                }
              : { visibility: "collapse", display: "none" }
          }
        />
      </motion.div>
    </motion.div>
  );
}

export default ProjectInfo;
