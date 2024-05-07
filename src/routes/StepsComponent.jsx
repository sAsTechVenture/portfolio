import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Footer, Navbar, SectionName } from "../components/index";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const stepTexts = {
  1: {
    Step1: "Project Discovery and Planning ",
    Step2: "Frontend Development",
    Step3: "Backend Development and Database Integration",
    Step4: "Testing and Quality Assurance",
    Step5: "Deployment and Launch",
  },
  2: {
    Step1: "Project Discovery and Planning",
    Step2: "Designing Wireframes and Mockups",
    Step3: "Frontend Development using HTML, CSS, and JavaScript",
    Step4: "Content Integration and Quality Assurance",
    Step5: "Testing Responsiveness and Cross-Browser Compatibility",
  },
  3: {
    Step1: "Requirement Analysis and Research",
    Step2: "System Architecture Design",
    Step3: "Prototyping and Mockups",
    Step4: "Development and Implementation",
    Step5: "Testing, Deployment, and Maintenance",
  },
  4: {
    Step1: "Requirement Gathering and Analysis",
    Step2: "Conceptual Data Modeling",
    Step3: "Logical and Physical Database Design",
    Step4: "Database Implementation and Development",
    Step5: "Testing, Optimization, and Maintenance",
  },
  5: {
    Step1: "Keyword Research and Analysis",
    Step2: "On-Page Optimization (Content, Meta Tags, URLs, etc.)",
    Step3: "Technical SEO (Site Structure, Speed, Mobile-Friendliness, etc.)",
    Step4: "Off-Page Optimization (Backlinks, Social Signals, etc.)",
    Step5: "Monitoring and Continuous Improvement (Analytics, Reporting, Updates)",
  },
  6: {
    Step1: "Requirements Analysis and Test Planning",
    Step2: "Test Case Design and Development",
    Step3: "Test Environment Setup",
    Step4: "Test Execution and Defect Reporting",
    Step5: "Test Closure and Reporting",
  },
  7:{
      Step1: "Market Research and Audience Analysis",
      Step2: "Goal Setting and Strategy Development",
      Step3: "Content Creation and Optimization",
      Step4: "Social Media Marketing and Management",
      Step5: "PPC Advertising and Campaign Management",
  },
};

const categoryHeadings = {
  1: 'Working of Web Development',
  2: 'Working of Web Designing',
  3: 'Working of System Designing',
  4: "Database Engineer",
  5:"Working of SEO Optimization",
  6:"Working of Software Testing",
  7:"Digital Marketing",
};

const StepsComponent = () => {
  const location = useLocation();
  const { id } = useParams(); 
  const steps = stepTexts[id] || {}; 
  const dynamicHeading = categoryHeadings[id] || '';

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showArrow = Object.keys(steps).length > 1;
  const isSmallScreen = windowWidth <= 768; 

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  let newStr = dynamicHeading.replace('working of', '');

  return (
    <>
      <Navbar />
      <section className="grid md:grid-cols-12 gap-4 md:max-w-[100%] p-4 h-fit max-w-[95%] mx-auto bg-[#e0d6c6]">
        <SectionName title={dynamicHeading} />
      </section>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Steps for developing {dynamicHeading.replace('Working of', '')} projects</h2>
          <motion.div className={`flex items-center justify-center gap-8 ${isSmallScreen ? 'flex-col' : 'flex-wrap'}`}
            initial="hidden"
            animate="visible"
          >
            {Object.keys(steps).map((stepKey, index) => (
              <React.Fragment key={stepKey}>
                {showArrow && index > 0 && (
                  <ArrowRight
                    size={isSmallScreen ? 32 : 42}
                    strokeWidth={isSmallScreen ? 1.5 : 1.8}
                    color="black"
                    style={{ transform: isSmallScreen ? 'rotate(90deg)' : 'none' }}
                  />
                )}
                <motion.div className="flex items-center flex-col"
                  variants={stepVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-16 h-16 bg-blue-400 rounded-full text-white text-xl font-bold mb-2 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="text-lg font-semibold mb-2">{stepKey}</div>
                  <div className="text-base text-center text-xl" style={{ fontFamily: 'cursive' }}>{steps[stepKey]}</div>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StepsComponent;
