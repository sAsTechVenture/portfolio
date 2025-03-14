import React, { useEffect, useRef } from "react";
import { Footer, Navbar, SectionName } from "../components/index";
import Grocery from './images/Grocerry.jpg'
import Mobile from './images/MobileApp.jpg'
import Ecommerce from "./images/E-Commerce.jpg"
import VerseGuide from './images/VerseGuide.jpg'
import GovtJobScrap from './images/GovtJobScrap.jpg'
import LLM from './images/LLM.jpg'
import FineTuning from './images/Fine_Tuning.jpg'
import Ai from './images/Ai.jpg'
import Gym from "./images/Gym.jpeg";
import SEO from './images/SEO1.jpg'
import SystemDesign from './images/SystemDesign.jpg'
import Import from "./images/Import.jpeg";
import Data from "./images/Data.jpeg";
import UI_UX from "./images/UI_UX.jpeg";
import { motion, useAnimation } from "framer-motion";
import Videomate from './images/Videomate.png'
const cardsData = [
  {
    id: 1,
    title: "Web Development & Design",
    image: Grocery,
    description: "Crafting cutting-edge web solutions with seamless UI/UX, robust functionality, and scalable architecture. We specialize in custom websites, and full-stack applications using the latest technologies. Elevate your digital presence with our high-performance, secure, and SEO-optimized web solutions.  ",
  },
  {
    id: 2,
    title: "Mobile Development & Design",
    image: Mobile,
    description: "We build high-performance, scalable, and user-friendly mobile apps using React Native, Flutter, and native technologies. Our expertise spans AI-powered apps, e-commerce platforms, and enterprise solutions with a focus on security, speed, and seamless user experience. Elevate your business with cutting-edge mobile solutions!",
    
  },
  {
    id: 3,
    title: "Videomate: The Ultimate Video Sharing & Streaming Platform ",
    image: Videomate,
    description: "VideoMate is a powerful video-sharing platform offering seamless content uploading, live streaming, and multi-category video management. With advanced search, user-friendly interface, and monetization options, it provides creators and audiences a dynamic and engaging experience, making content discovery and interaction effortless. ",
  },
  {
    id: 4,
    title: "E-Commerce",
    image: Ecommerce,
    description: "We build scalable, high-performance e-commerce platforms with seamless product management, secure payments, and user-friendly experiences. Our solutions include custom storefronts, advanced search, and optimized checkout to enhance sales and engagement. Empower your business with a feature-rich, modern online store!",
  },
  {
    id: 5,
    title: "Verse Guide: AI-Powered Quranic Guidance",
    image: VerseGuide,
    description: "VerseGuide uses AI-driven facial recognition to analyze your mood and emotions and recommends personalized Quranic verses for motivation, peace, and spiritual upliftment. Whether feeling joyful, stressed, or seeking guidance, VerseGuide delivers the perfect verse to inspire and heal. 🌿",
  },
  {
    id: 6,
    title: "Government Jop Scrapping Web App: Smart Government Job Notification Hub",
    image: GovtJobScrap,
    description: "Government job scrapping is an automated web platform that scrapes and aggregates government job listings from multiple official websites. It provides real-time updates, categorized job postings, and an easy-to-navigate interface, ensuring users never miss an important opportunity."
  },
  {
    id: 7,
    title: "LLM: Large Language Model",
    image: LLM,
    description: "Large Language Model (LLM) solutions offer intelligent text processing, natural language understanding, and AI-driven automation for businesses. From chatbots and content generation to sentiment analysis and code assistance, LLMs empower seamless and human-like interactions for various applications.",
  },
  {
    id: 8,
    title: "Fine Tuning",
    image: FineTuning,
    description: "Fine-tuning enhances pre-trained AI models by adapting them to specific tasks, industries, or datasets for improved accuracy and performance. Whether for chatbots, sentiment analysis, medical diagnostics, or legal document processing, fine-tuning ensures AI models align perfectly with your needs.",
  },
  {
    id: 9,
    title: "Ai Integretion",
    image: Ai,
    description: "Seamlessly integrate AI-driven solutions into your applications for enhanced automation, smarter decision-making, and personalized user experiences. From chatbots and recommendation systems to predictive analytics and workflow optimization, AI integration elevates efficiency and innovation across industries.",
  },
  {
    id: 10,
    title: "Import Exports Products",
    image: Import,
    description: "GlobalTradeHub is a comprehensive import-export web platform that connects buyers and suppliers worldwide, streamlining product listings, trade management, and secure transactions. With real-time tracking, automated documentation, and multi-currency support, it simplifies global trade operations for businesses.",
  },
  {
    id: 11,
    title: "Gym Management System",
    image: Gym,
    description: "It is a comprehensive gym management platform that streamlines membership tracking, workout planning, payment processing, and trainer scheduling. With automated reminders, progress tracking, and attendance monitoring, it ensures seamless gym operations and an enhanced fitness experience for members.",
  },
  {
    id: 12,
    title: "Database Engineering",
    image: Data,
    description: "We design high-performance, scalable, and secure databases tailored for enterprise applications, analytics, and real-time processing. Our expertise spans SQL, NoSQL, and cloud databases, ensuring optimized data storage, seamless integration, and efficient query performance for any business need.",
  },
  {
    id: 13,
    title: "System Design",
    image: SystemDesign,
    description: "We specialize in designing robust, scalable, and high-performance system architectures for web, mobile, and enterprise applications. From microservices and cloud infrastructure to database optimization and API integrations, our solutions ensure efficiency, security, and seamless scalability.",
  },
  {
    id: 14,
    title: "Search Engine Optimization",
    image: SEO,
    description: "Our SEO strategies enhance search rankings, drive organic traffic, and improve online visibility through keyword optimization, technical SEO, and content strategy. With on-page, off-page, and analytics-driven insights, we ensure your brand stays ahead in search results. ",
  },
  {
    id: 15,
    title: "Design Of Skin Disease App ",
    image: UI_UX,
    description: "A comprehensive skin disease diagnosis app that enables users to check symptoms, access medical insights, and track skin conditions over time. With an easy-to-use interface, it provides detailed information on various skin diseases, treatment recommendations, and connects users with dermatologists for expert advice.",
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
