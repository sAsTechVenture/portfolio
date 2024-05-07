import React, { useEffect, useRef } from "react";
import { Footer, Navbar, SectionName } from "../components/index";
import frontend from "./images/pr1.png";
import Gym from "./images/Gym.jpeg";
import Import from "./images/Import.jpeg";
import Data from "./images/Data.jpeg";
import UI_UX from "./images/UI_UX.jpeg";
import Ecommerce from "./images/Ecommerce.jpeg";
import { motion, useAnimation } from "framer-motion";

const cardsData = [
  {
    id: 1,
    title: "Web Development",
    image: frontend,
    description: "Building dynamic and responsive web applications.",
  },
  {
    id: 2,
    title: "Web Designing",
    image: frontend,
    description: "Creating visually appealing and user-friendly interfaces.",
  },
  {
    id: 3,
    title: "System Design",
    image: frontend,
    description: "Architecting scalable and efficient systems design.",
    title: "Import Exports Products",
    image: Import,
    description: "Create Manage and  Deploy WEB based Application",
  },
  {
    id: 2,
    title: "Gym Management System",
    image: Gym,
    description: "Create Manage and  Deploy WEB based Application",
  },
  {
    id: 3,
    title: "Ecommerce Application",
    image: Ecommerce,
    description: "Create Manage and Deploy WEB based Application",
  },
  {
    id: 4,
    title: "Database Engineering",
    image: frontend,
    image: Data,
    description: "Designing and managing databases for optimal performance.",
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    image: frontend,
    description: "Improving website visibility and search engine rankings.",
  },
  {
    id: 6,
    title: "Software Testing",
    image: frontend,
    description: "Ensuring software quality through comprehensive testing.",
  },
  {
    title: "Design Of Skin Disease App ",
    image: UI_UX,
    description: "Design, Develop, and Deploy Seamless User Experiences",
  },
];

const Projects = () => {
  const controlsArray = cardsData.map(() => useAnimation());
  const refs = Array.from({ length: cardsData.length }, () => useRef(null));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      refs.forEach((ref, index) => {
        const elementOffsetTop = ref.current.offsetTop;
        if (scrollY + windowHeight > elementOffsetTop + 100) {
          controlsArray[index].start({ opacity: 1, y: 0 });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsArray, refs]);

  return (
    <>
      <Navbar />
      <section className="grid md:grid-cols-12 gap-4 md:max-w-[100%] p-4 h-fit max-w-[95%] mx-auto bg-[#e0d6c6]">
        <SectionName title="Projects" />
      </section>
      <section className="p-8 md:max-w-[100%] mx-auto bg-[#F6F3EE] flex flex-wrap justify-center gap-10">
        {cardsData.map((card, index) => (
          <motion.div
            key={card.id}
            ref={refs[index]}
            initial={{ opacity: 0, y: 50 }}
            animate={controlsArray[index]}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-200 ease-in-out transform hover:scale-105  relative group"
          >
            <div className="w-full h-64 flex items-center justify-center">
              <img
                className="w-auto h-full object-cover object-center transition duration-300 ease-in-out transform hover:scale-110"
                src={card.image}
                alt={card.title}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2 text-center md:text-2xl">
                {card.title}
              </div>
              <p className="text-gray-700 text-center md:text-xl">
                {card.description}
              </p>
              <div className="flex items-center justify-center mb-2 mt-3"></div>
            </div>
          </motion.div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Projects;
