import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useContext } from "react";
import MyContext from "../context/MyContext";

function Title() {
  const { pageTransition } = useContext(MyContext);
  return (
    <motion.div
      variants={pageTransition}
      className="title"
      layout="position"
      initial="initialTitle"
      exit="exitTitle"
    >
      <h4>
        Graphic Designer <span>&</span> <br />
        Front-End Developer
      </h4>
      <p> Toronto, ON 🇨🇦</p>
      <div className="side-links">
        <Link to="/assets/Aisha_Rahman_Resume_040624.pdf" target="_blank">
          Resume
        </Link>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/aisha-o-rahman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <span>|</span>
        <a
          href="https://github.com/browinet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </motion.div>
  );
}
export default Title;
