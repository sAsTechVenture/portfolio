import React, { useEffect, useRef } from "react";
import Form from "./Form";
import { SectionName } from "./index";
import contactBottom from "../assets/contactBottom.svg";
import { motion, useAnimation } from "framer-motion";

const ContactCmp = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffsetTop = ref.current.offsetTop;

      if (scrollY + windowHeight > elementOffsetTop + 100) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <main className="bg-[#f8f0e3] w-full flex flex-col overflow-x-hidden">
      <section className="grid md:grid-cols-12 gap-4 md:max-w-[100%] p-4 h-fit max-w-[95%] mx-auto bg-[#e0d6c6]">
        <SectionName title="Contact Us" />
      </section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="bg-white rounded-lg grid md:grid-cols-2 grid-cols-1 gap-4 p-4 max-w-[95%] mx-auto mb-6"
      >
        <motion.div
          className="md:col-span-1 flex flex-col gap-y-2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <div className="w-full">
            <h1 className="md:text-5xl text-3xl">
              Feel Free, Contact Us Today And Get Your Solution!
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <motion.img
              src={contactBottom}
              alt="contactBottomImg"
              className="w-full h-56 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            />
          </div>
        </motion.div>
        <div className="md:col-span-1">
          <Form />
        </div>
      </motion.section>
    </main>
  );
};

export default ContactCmp;
