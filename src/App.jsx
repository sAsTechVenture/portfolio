import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home, About, Contact, Projects, Services,StepsComponent } from "./routes";

function ScrollToTopOnRouteChange({ delay }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, delay);
    };

    scrollToTop();
  }, [pathname, delay]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="!scroll-smooth">
      <ScrollToTopOnRouteChange />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/About"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/Services"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/Projects"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/Contact"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <Contact />
              </motion.div>
            }
          />

    <Route
            path="/steps/:id"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <StepsComponent />
              </motion.div>
            }
          />
          
        </Routes>

        
        
      </AnimatePresence>
    </div>
  );
}

export default App;
