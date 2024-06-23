/* eslint-disable react/prop-types */
import { useContext } from "react";
import MyContext from "../context/MyContext";

import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";

const navLinks = [
  { title: "Portfolio", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

function Nav() {
  const {
    toggleMenu,
    menuOpen,
    menuAnimation,
    containerAnimation,
    linkAnimation,
  } = useContext(MyContext);
  return (
    <nav>
      <div className="nav-desktop">
        <Link to="/">
          <Logo />
        </Link>
        <div className="link">
          {navLinks.map((item, index) => {
            return (
              <NavLink to={item.link} key={index}>
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="nav-mobile">
        <div className="nm-top">
          <Link to="/">
            <Logo />
          </Link>
          <MotionConfig
            transition={{
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="nm-button"
              onClick={toggleMenu}
              initial={false}
              animate={menuOpen ? "open" : "close"}
            >
              <motion.span
                style={{
                  left: "0%",
                  top: "10%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["0%", "50%", "50%"],
                  },
                  close: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "0%"],
                  },
                }}
              />

              <motion.span
                style={{
                  left: "0%",
                  top: "50%",
                }}
                variants={{
                  open: {
                    opacity: ["1", "0", "0"],
                    rotate: ["0deg", "0deg", "45deg"],
                  },
                  close: {
                    opacity: ["0", "1", "1"],
                    rotate: ["45deg", "0deg", "0deg"],
                  },
                }}
              />
              <motion.span
                style={{
                  left: "0%",
                  top: "90%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                    top: ["100%", "50%", "50%"],
                  },
                  close: {
                    rotate: ["-45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "100%"],
                  },
                }}
              />
            </motion.div>
          </MotionConfig>
        </div>
        <motion.div
          className="nm-bottom"
          variants={menuAnimation}
          initial="initialMenu"
          animate={menuOpen ? "openMenu" : "closeMenu"}
          exit="closeMenu"
        >
          <motion.div
            className="nm-link"
            variants={containerAnimation}
            initial="initialLink"
            animate={menuOpen ? "showLink" : "initialLink"}
            exit="initialLink"
          >
            {navLinks.map((item, index) => {
              return (
                <motion.div
                  className="nm-links-motion"
                  style={{
                    overflow: "hidden",
                  }}
                  key={index}
                >
                  <MobileLinks title={item.title} href={item.link} />
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="nm-info"
            variants={linkAnimation}
            initial={false}
            animate={menuOpen ? "showEmail" : "hideEmail"}
          >
            <a href="mailto:hello@aisharahman.com">hello@aisharahman.com</a>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Nav;

const MobileLinks = ({ title, href }) => {
  const { linkAnimation } = useContext(MyContext);

  return (
    <motion.div variants={linkAnimation}>
      <NavLink to={href}>{title}</NavLink>
    </motion.div>
  );
};
