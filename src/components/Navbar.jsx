import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#F6F3EE] flex items-center justify-between p-6 border-b border-gray-500 w-full">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>
        <div className="md:flex items-center gap-x-4 text-lg hidden">
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
            Service
          </Link>
          <Link
            to="/Projects"
            className={`hover:underline ease-in-out duration-300 ${
              location.pathname === "/Projects" && "underline"
            }`}
          >
            Project
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

        <div onClick={toggleMenu} className="block md:hidden">
          {isOpen ? <X /> : <Menu />}
        </div>

        <div
          className={
            isOpen
              ? "fixed h-full left-0 top-0 w-[60%] border-r border-gray-400 bg-[#F6F3EE] ease-in-out duration-500 rounded-2xl"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex flex-col gap-4 text-2xl">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-28 w-auto p-4" />
            </Link>
            <Link
              to="/"
              className={`hover:underline ease-in-out duration-300 p-4 ${
                location.pathname === "/" && "underline"
              }`}
            >
              Home
            </Link>
            <Link
              to="/About"
              className={`hover:underline ease-in-out duration-300 p-4 ${
                location.pathname === "/About" && "underline"
              }`}
            >
              About
            </Link>
            <Link
              to="/Services"
              
              className={`hover:underline ease-in-out duration-300 p-4 ${
                location.pathname === "/Services" && "underline"
              }`}
            >
              Services
            </Link>
            <Link
              to="/Projects"
              className={`hover:underline ease-in-out duration-300 p-4 ${
                location.pathname === "/Projects" && "underline"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className={`hover:underline ease-in-out duration-300 p-4 ${
                location.pathname === "/Contact" && "underline"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
