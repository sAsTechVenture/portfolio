import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Moon, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
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
        className="w-full h-fit bg-blue-300 rounded-lg grid gap-y-4 md:grid-cols-12 grid-cols-6 p-8 mb-8 text-green-950"
      >
        <div className="md:col-span-8 col-span-3">
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-2 items-center justify-start">
              <Moon size={36} strokeWidth={2.75} />
              <h3 className="md:text-3xl text-2xl font-bold">sAs</h3>
            </div>
            <p className="md:text-xl text-lg">
              Our team is typically a group of professionals focused on
              providing comprehensive solutions to address.
            </p>
            <ul className="md:text-lg text-md list-none flex flex-row gap-x-4">
              <a
                href="#"
                className="no-underline hover:scale-125 transition-all duration-500"
              >
                <li>
                  <a
                    href="https://www.linkedin.com/company/103387153"
                    target="_blanck"
                  >
                    <Linkedin size={20} strokeWidth={1.25} />
                  </a>
                </li>
              </a>
              <a
                href="#"
                className="no-underline hover:scale-125 transition-all duration-500"
              >
                <li>
                  <a
                    href="https://www.instagram.com/sastechventures/"
                    target="_blanck"
                  >
                    <Instagram size={20} strokeWidth={1.25} />
                  </a>
                </li>
              </a>
              <a
                href="#"
                className="no-underline hover:scale-125 transition-all duration-500"
              >
                <li>
                  <a
                    href="https://twitter.com/sAsTechVentures"
                    target="_blanck"
                  >
                    <Twitter size={20} strokeWidth={1.25} />
                  </a>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="md:col-span-4 col-span-3 flex justify-center">
          <div className="flex flex-col">
            <h3 className="md:text-2xl text-xl font-bold">Menu</h3>
            <Link
              to="/"
              className={`hover:underline ease-in-out duration-300 ${
                location.pathname === "/" && "underline"
              }`}
            >
              Home
            </Link>
            <Link
              to="/About"
              className={`hover:underline ease-in-out duration-300 ${
                location.pathname === "/About" && "underline"
              }`}
            >
              About
            </Link>
            <Link
              to="/Services"
              className={`hover:underline ease-in-out duration-300 ${
                location.pathname === "/Services" && "underline"
              }`}
            >
              Services
            </Link>
            <Link
              to="/Projects"
              className={`hover:underline ease-in-out duration-300 ${
                location.pathname === "/Projects" && "underline"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className={`hover:underline ease-in-out duration-300 ${
                location.pathname === "/Contact" && "underline"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto md:col-span-12 col-span-6 border-b-2 border-gray-400"></div>
        <div className="md:col-span-12 col-span-6 flex items-center justify-between md:text-2xl text-xl">
          <h4>Powered by Humans</h4>
          <h4>Created by sAs Developers</h4>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
