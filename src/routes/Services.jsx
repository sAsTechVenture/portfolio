import React, { useEffect, useRef } from "react";
import { Footer, Navbar, SectionName } from "../components/index";
import { ArrowRight } from "lucide-react";
import frontend from "./images/Frontend.svg";
import SEO from "./images/SEO.svg";
import System from "./images/System.svg";
import Testing from "./images/Testing.svg";
import { Link } from "react-router-dom";
import webdesign from "./images/webdesign.svg";
import Database from "./images/Database.svg";
import digitalMarketing from "./images/digitalMarketing.svg";
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
    image: webdesign,
    description: "Creating visually appealing and user-friendly interfaces.",
  },
  {
    id: 3,
    title: "System Design",
    image: System,
    description: "Architecting scalable and efficient systems design.",
  },
  {
    id: 4,
    title: "Database Engineering",
    image: webdesign,
    description: "Designing and managing databases for optimal performance.",
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    image: SEO,
    description: "Improving website visibility and search engine rankings.",
  },
  {
    id: 6,
    title: "Software Testing",
    image: frontend,
    description: "Ensuring software quality through comprehensive testing.",
  },
  {
    id: 7,
    title: "Digital Marketing",
    image: digitalMarketing,
    description:
      "Promoting businesses and brands through digital channels to reach and engage with target audiences.",
  },
];

const Services = () => {
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
        <SectionName title="Our Services" />
      </section>
      <section className="p-8 md:max-w-[100%] mx-auto bg-[#F6F3EE] flex flex-wrap justify-center gap-10 ">
        {cardsData.map((card, index) => (
        
            <Link
            key={card.id}
            to={{
              pathname: `/steps/${card.id}`,
              state: { steps: card.steps }
            }}
          >
          <motion.div
            key={card.id}
            ref={refs[index]}
            initial={{ opacity: 0, y: 50 }}
            animate={controlsArray[index]}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-200 ease-in-out transform hover:scale-105 p-4 relative group"
          >
            <div className="bg-blue-200 rounded-lg overflow-hidden relative group-hover:bg-yellow-200 p-3">
              <img
                className="w-full h-auto object-cover object-center transition duration-300 ease-in-out transform hover:scale-110 p-4"
                src={card.image}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2 text-center md:text-2xl">
                {card.title}
              </div>
              <p className="text-gray-700 text-center md:text-xl">
                {card.description}
              </p>
              <div className="flex items-center justify-center mb-2 mt-3">
                <ArrowRight size={40} strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Services;
