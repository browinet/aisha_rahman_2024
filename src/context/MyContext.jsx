import { createContext, useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 920px)");
  const location = useLocation();

  //Homepage Transition
  const pageTransition = isDesktop
    ? {
        initialTitle: {
          maxHeight: "100%",
          opacity: 1,
          transition: { duration: 0.3 },
        },

        exitTitle: {
          maxHeight: "0%",
          marginBottom: "-20px",
          opacity: 0,
          transition: { duration: 0.3 },
        },
        initialProject: {
          maxWidth: "0px",
        },
        animateProject: {
          maxWidth: "385px",
          transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
        },
        initialFadeProject: { opacity: 0, y: "10px" },
        animateFadeProject: {
          opacity: 1,
          y: "0px",
          transition: { delay: 1, duration: 0.3 },
        },
      }
    : {};

  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);

    navigate(`/project/${index.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setSelectedIndex(null);
    }, 10000);
  };

  const transition = {
    duration: 10,
    ease: [0.6, 0.01, -0.05, 0.9],
  };

  //Toggle Menu to Open and close
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  //Checkmenu will determine if menu is open but it's switched to desktop

  //Toggle close menu on change page

  useEffect(() => {
    setMenuOpen(false);
  }, [location, isDesktop]);

  const menuAnimation = isDesktop
    ? {
        //TEMP FIX: This just resets wrapper in desktop
        hideWrapper: {
          overflow: "visible",
          maxHeight: "100%",

          transition: {
            duration: 0.2,
          },
        },

        openWrapper: {
          overflow: "visible",
          maxHeight: "100%",

          transition: {
            delay: 0.5,
            duration: 0.2,
          },
        },
      }
    : {
        // Menu Open Menu Close
        initialMenu: {
          scaleY: 0,
        },
        openMenu: {
          scaleY: 1,
          transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
          },
        },
        closeMenu: {
          scaleY: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
        //Hide Wrapper to prevent ghost clicking wrapper
        hideWrapper: {
          overflow: "hidden",
          maxHeight: "0px",
          transition: {
            duration: 0.2,
          },
        },

        openWrapper: {
          overflow: "visible",
          zIndex: 200,
          maxHeight: "100%",

          transition: {
            delay: 0.5,
            duration: 0.2,
          },
        },
      };
  const containerAnimation = isDesktop
    ? {}
    : {
        initialLink: {
          transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
          },
        },
        showLink: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
          },
        },
      };
  const linkAnimation = isDesktop
    ? {}
    : {
        initialLink: {
          y: "30vh",
          transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
          },
        },
        showLink: {
          y: 0,
          transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
          },
        },
        showEmail: {
          opacity: 1,
          transition: {
            delay: 1,
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
          },
        },
        hideEmail: {
          opacity: 0,
          transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
          },
        },
      };

  return (
    <MyContext.Provider
      value={{
        pageTransition,
        transition,
        selectedIndex,
        handleSelect,
        menuOpen,
        toggleMenu,
        menuAnimation,
        linkAnimation,
        containerAnimation,
        isDesktop,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
