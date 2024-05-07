import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const ServiceSelection = () => {
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
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="bg-green-950 w-full flex gap-y-4 rounded-lg h-fit p-4 text-white justify-center flex-col text-center"
      >
        <div className="bg-green-950 w-full flex gap-y-4 rounded-lg h-fit p-4 text-white justify-center flex-col text-center">
          <h3 className="md:text-3xl text-2xl font-bold">
            Services That Help You Grow
          </h3>

          <div className="md:max-w-[60%] mx-auto">
            <div className="flex gap-y-2 flex-col">
              <h4 className="font-semibold md:text-2xl text-xl">01</h4>
              <h4 className="font-bold md:text-2xl text-xl">
                Choose A Service
              </h4>
              <p className="md:text-xl text-lg">
                Whether you require web development, web designing, SEO & UI/UX
                services, we've got you covered. Choose from our range of
                offerings tailored to meet your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="font-semibold md:text-2xl text-xl">02</h4>
              <h4 className="font-bold md:text-2xl text-xl">
                Request a Meeting
              </h4>
              <p className="md:text-xl text-lg">
                Let's sit down and discuss your goals, challenges, and vision.
                We'll explore how our services can align with your objectives
                and create a roadmap for success.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="font-semibold md:text-2xl text-xl">03</h4>
              <h4 className="font-bold md:text-2xl text-xl">
                Receive Custom Plan
              </h4>
              <p className="md:text-xl text-lg">
                Based on our discussion, we'll craft a personalized plan
                designed to maximize your growth potential. This custom strategy
                will outline actionable steps tailored to your business,
                ensuring optimal results.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="font-semibold md:text-2xl text-xl">04</h4>
              <h4 className="font-bold md:text-2xl text-xl">
                {`Let’s Make It Happen.`}
              </h4>
              <p className="md:text-xl text-lg">
                With your custom plan in hand, we'll collaborate closely to
                bring your vision to life. From implementation to execution,
                we're dedicated to turning your ideas into reality and achieving
                tangible results.
              </p>
            </div>
          </div>
          <div className="w-full text-center font-bold">
            <Link to="/Contact">
              <button className="md:text-2xl md:w-44 md:h-12 text-lg w-32 h-10 bg-white rounded-full text-green-950 hover:text-white hover:bg-green-950 border-2 border-white transition-all duration-500">
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceSelection;
