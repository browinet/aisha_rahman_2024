import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MyProvider } from "./context/MyContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Test from "./pages/Test";

function App() {
  const location = useLocation();

  return (
    <>
      <MyProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:portId" element={<Portfolio />} />
            <Route path="/1dea" element={<Test />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </MyProvider>
    </>
  );
}

export default App;
