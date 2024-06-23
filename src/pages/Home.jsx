import SiteLayout from "../layouts/SiteLayout";
import { motion } from "framer-motion";
import { Project } from "../data/ProjectList";

import { useContext } from "react";
import MyContext from "../context/MyContext";

function Home() {
  const project = Project;
  const { handleSelect, isDesktop } = useContext(MyContext);

  return (
    <SiteLayout>
      <motion.div className="home">
        {project.slice().map((item, index) => (
          <motion.div
            className="frame"
            key={index}
            layoutId={isDesktop ? item.id : null}
            transition={{
              layout: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
            }}
            onClick={() => handleSelect(item)}
          >
            <motion.div
              className="bw-card"
              whileHover={{ opacity: 0 }}
              style={{
                backgroundImage: `url(${item.coverImage[0]})`,
              }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="color-card"
              style={{
                backgroundImage: `url(${item.coverImage[1]})`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </SiteLayout>
  );
}
export default Home;
