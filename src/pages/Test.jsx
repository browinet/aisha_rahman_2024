import { useState } from "react";
import { motion } from "framer-motion";
import "../css/test.css";

function Test() {
  const [buttonStatus, setButtonStatus] = useState(false);
  const buttonToggle = () => {
    setButtonStatus(!buttonStatus);
    console.log(buttonStatus);
  };
  const buttonAnimation = {
    buttonClose: {
      rotate: "0deg",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    buttonOpen: {
      rotate: "90deg",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const barAnimation = {
    barOpen: {
      scaleX: "50%",
      opacity: "95%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    barClose: {
      scaleX: "100%",
      opacity: "100%",
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
    topSerifOpen: {
      scaleY: "100%",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    topSerifClose: {
      scaleY: "0%",
    },
    bottomSerifOpen: {
      scaleY: "100%",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    bottomSerifClose: {
      scaleY: "0%",
    },
  };
  return (
    <div className="t-container">
      <div className="button-wrapper" onClick={buttonToggle}>
        <motion.button
          className="burger-menu"
          variants={buttonAnimation}
          initial="buttonClose"
          animate={buttonStatus ? "buttonOpen" : "buttonClose"}
        >
          <motion.span
            className="bar"
            variants={barAnimation}
            initial="barClose"
            animate={buttonStatus ? "barOpen" : "barClose"}
          ></motion.span>
          <span className="bar">
            <motion.span
              className="serif"
              variants={barAnimation}
              initial="topSerifClose"
              animate={buttonStatus ? "topSerifOpen" : "topSerifClose"}
            ></motion.span>
            <motion.span
              className="serif-bottom"
              variants={barAnimation}
              initial="bottomSerifClose"
              animate={buttonStatus ? "bottomSerifOpen" : "bottomSerifClose"}
            ></motion.span>
          </span>
          <motion.span
            className="bar"
            variants={barAnimation}
            initial="barClose"
            animate={buttonStatus ? "barOpen" : "barClose"}
          ></motion.span>
        </motion.button>
      </div>
    </div>
  );
}
export default Test;
