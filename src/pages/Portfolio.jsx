import ProjectLayout from "../layouts/ProjectLayout";
import { Project } from "../data/ProjectList";

import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

import { useContext } from "react";
import MyContext from "../context/MyContext";

function Portfolio() {
  const { pageTransition, isDesktop } = useContext(MyContext);
  const { portId } = useParams();
  const project = Project.find((item) => item.id === portId);
  return (
    <ProjectLayout>
      <div className="portfolio">
        <motion.div
          className="frame"
          layoutId={isDesktop ? project.id : null}
          style={{ minHeight: "50vh" }}
          transition={{
            layout: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
          }}
        >
          <motion.div
            className="color-card"
            layoutId={"card" + project.id}
            transition={{
              layout: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
            }}
            style={{
              backgroundImage: `url(${project.coverImage[1]})`,
            }}
          />
        </motion.div>

        {project.image.slice(0).map((image, index) => (
          <motion.img
            variants={pageTransition}
            initial="initialFadeProject"
            animate="animateFadeProject"
            alt=""
            src={image}
            key={index}
          />
        ))}
      </div>
    </ProjectLayout>
  );
}

export default Portfolio;
