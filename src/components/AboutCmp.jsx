import React, { useEffect, useRef, useState } from "react";
import { SectionName } from "./index";
import leftHeroAbout from "../assets/leftHeroAbout.svg";
import { Check } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



const AboutCmp = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [showWebDevContent, setShowWebDevContent] = useState(false);
  const [showWebdesignContent, setshowWebdesignContent] = useState(false);
  const [showsystemdesignContent, setshowsystemdesignContent] = useState(false);
  const [showDatabseContent, setshowDatabseContent] = useState(false);
  const [showSEOContent, setshowSEOContent] = useState(false);
  const toggleWebDevContent = () => {
    setShowWebDevContent((prevState) => !prevState);
  };
  const toggleWebdesignContent = () => {
    setshowWebdesignContent((prevState) => !prevState);
  };

  const toggleSystemdesignContent = () => {
    setshowsystemdesignContent((prevState) => !prevState);
  };

  const toggleDatabseContent = () => {
    setshowDatabseContent((prevState) => !prevState);
  };

  const toggleSEOContent = () => {
    setshowSEOContent((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll1 = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffsetTop = ref1.current.offsetTop;

      if (scrollY + windowHeight > elementOffsetTop + 100) {
        controls1.start({ opacity: 1, y: 0 });
      }
    };

    const handleScroll2 = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffsetTop = ref2.current.offsetTop;

      if (scrollY + windowHeight > elementOffsetTop + 100) {
        controls2.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll1);
    window.addEventListener("scroll", handleScroll2);

    return () => {
      window.removeEventListener("scroll", handleScroll1);
      window.removeEventListener("scroll", handleScroll2);
    };
  }, [controls1, controls2]);

  return (
    <main>
      <section className="grid md:grid-cols-12 gap-4 md:max-w-[100%] p-4 h-fit max-w-[95%] mx-auto bg-[#e0d6c6]">
        <SectionName title="About Us" />
      </section>

      <motion.section
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        className="grid md:grid-cols-2 gap-4 text-green-950 p-4"
      >
        <div className="md:col-span-1">
          <img src={leftHeroAbout} alt="leftHeroAbout" />
        </div>
        <div className="md:col-span-1 flex flex-col gap-2">
          <h1 className="lg:text-4xl md:text-3xl text-2xl text-left font-semibold">
            <span className="lg:text-5xl md:4xl sm:3xl font-bold">
              Welcome to Software's & Solution's
            </span>
            , where your vision meets our creative expertise.
          </h1>
          <p className="md:text-2xl text-xl mt-4">
            Founded in 2024, we are a passionate team of freelancers committed
            to delivering excellence in
          </p>
          <ul className="md:text-2xl text-xl m-4 w-full">
            <li
              className="flex flex-row gap-2 items-start justify-start cursor-pointer my-2"
              onClick={toggleWebDevContent}
            >
              Web Development
              {showWebDevContent ? (
                <FaChevronUp className="text-green-500 mt-1 ml-3" />
              ) : (
                <FaChevronDown className="text-green-500 mt-2 ml-3" />
              )}
            </li>
            {showWebDevContent && (
              <div className="ml-8 mt-2 md:text-xl text-lg">
                <ul className="list-disc pl-4">
                  <li>Front-end Development: Creating interactive and user-friendly interfaces using HTML, CSS, and JavaScript frameworks.</li>
                  <li>Back-end Development: Building robust server-side logic and database management systems with technologies like Node.js, Python, and SQL.</li>
                </ul>
              </div>

            )}

            <li
              className="flex flex-row gap-2 items-start justify-start cursor-pointer my-2"
              onClick={toggleWebdesignContent}
            >
              Web design
              {showWebdesignContent ? (
                <FaChevronUp className="text-green-500 mt-1 ml-3" />
              ) : (
                <FaChevronDown className="text-green-500 mt-2 ml-3" />
              )}
            </li>
            {showWebdesignContent && (
              <div className="ml-8 mt-2 md:text-lg text-lg">
                <ul className="list-disc pl-4">
                  <li>UI/UX Design: Designing visually appealing layouts and seamless user experiences to enhance brand identity and engagement.</li>
                  <li>Responsive Design: Ensuring websites are optimized for all devices, from desktops to smartphones, for a consistent user experience.</li>
                </ul>
              </div>

            )}

            <li
              className="flex flex-row gap-2 items-start justify-start cursor-pointer my-2"
              onClick={toggleSystemdesignContent}
            >
              System design
              {showsystemdesignContent ? (
                <FaChevronUp className="text-green-500 mt-1 ml-3" />
              ) : (
                <FaChevronDown className="text-green-500 mt-2 ml-3" />
              )}
            </li>
            {showsystemdesignContent && (
              <div className="ml-8 mt-2 md:text-lg text-lg">
                <ul className="list-disc pl-4">
                  <li>Architecture Planning: Designing scalable and reliable systems that meet business requirements and accommodate future growth.</li>
                  <li>Integration Solutions: Implementing seamless integrations between different systems and platforms for streamlined operations.</li>
                </ul>
              </div>

            )}

            <li
              className="flex flex-row gap-2 items-start justify-start cursor-pointer my-2"
              onClick={toggleDatabseContent}
            >
              Database Engineering
              {showDatabseContent ? (
                <FaChevronUp className="text-green-500 mt-1 ml-3" />
              ) : (
                <FaChevronDown className="text-green-500 mt-2 ml-3" />
              )}
            </li>
            {showDatabseContent && (
              <div className="ml-8 mt-2 md:text-lg text-lg">
                <ul className="list-disc pl-4">
                  <li>Database Design: Creating efficient database structures to store, retrieve, and manage data securely and effectively.</li>
                  <li>Performance Optimization: Improving database performance through indexing, query optimization, and data caching techniques.</li>
                </ul>
              </div>

            )}

            <li
              className="flex flex-row gap-2 items-start justify-start cursor-pointer my-2"
              onClick={toggleSEOContent}
            >
              SEO
              {showSEOContent ? (
                <FaChevronUp className="text-green-500 mt-1 ml-3" />
              ) : (
                <FaChevronDown className="text-green-500 mt-2 ml-3" />
              )}
            </li>
            {showSEOContent && (
              <div className="ml-8 mt-2 md:text-lg text-lg">
                <ul className="list-disc pl-4">
                  <li>On-Page Optimization: Optimizing website content, meta tags, and URLs to improve search engine rankings and organic visibility.</li>
                  <li>Off-Page Optimization: Building high-quality backlinks, managing local listings, and enhancing overall website authority for better search results.</li>
                </ul>
              </div>

            )}

          </ul>
        </div>
      </motion.section>

      <motion.section
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        className="h-fit md:max-w-[90%] max-w-[95%] rounded-lg bg-green-950 grid md:grid-cols-12 grid-cols-6 text-white mx-auto m-4 p-4"
      >
        <div className="md:col-span-6 col-span-6">
          <h1 className="lg:text-9xl md:text-7xl text-4xl text-left flex items-center justify-center">
            Why Choose Us?
          </h1>
        </div>
        <div className="md:col-span-6 col-span-6 flex gap-y-6 flex-col">
          <p className="flex gap-y-2 flex-col md:text-xl text-lg">
            <span className="md:text-2xl text-xl font-bold flex gap-x-2">
              <Check size={28} strokeWidth={2.25} />
              Personalized Approach:
            </span>
            We understand that each project is unique. That's why we take the
            time to listen to your needs and tailor our services to fit your
            specific requirements.
          </p>
          <p className="flex gap-y-2 flex-col md:text-xl text-lg">
            <span className="md:text-2xl text-xl font-bold flex gap-x-2">
              <Check size={28} strokeWidth={2.25} />
              Quality Over Quantity:
            </span>
            Our focus is on delivering high-quality work that exceeds your
            expectations, not just meeting quotas.
          </p>
          <p className="flex gap-y-2 flex-col md:text-xl text-lg">
            <span className="md:text-2xl text-xl font-bold flex gap-x-2">
              <Check size={28} strokeWidth={2.25} />
              Customer Satisfaction:
            </span>
            Your satisfaction is our top priority. We strive to maintain open
            communication and transparency throughout our collaboration to
            ensure your project's success.
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutCmp;
