import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaBars, FaLinkedin, FaBehance, FaTimes, FaFile, FaFileAlt } from "react-icons/fa";

import logo from "/images/logo.svg";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container>
        <nav className=" bg-white px-4 py-6 w-full">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="" />
            </a>
            <div className="block lg:hidden">
              <button
                onClick={toggleSidebar}
                className="w-10 h-10 bg-black text-white flex justify-center items-center rounded-full focus:outline-none"
              >
                <FaBars />
              </button>
            </div>

            <ul className="hidden lg:flex items-center space-x-10">
              <li>
                <a
                  href="https://drive.google.com/file/d/1Uezx2LXyztz483zrjNpfOCBI0I81EhE-/view?usp=drive_link"
                  target="_blank"
                  className="text-black hover:text-gray-600"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/josephadofo/"
                  target="_blank"
                  className="text-black hover:text-gray-600 flex items-center gap-2"
                >
                  {/* <FaLinkedin /> */}
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="mailto:kwabenaadofo330@gmail.com"
                  target="_blank"
                  className="text-white bg-black rounded-full  px-6 py-3  text-[14px]"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>

      {/* Mobile Nav */}


      {isOpen && (
        <div className="lg:hidden fixed bottom-0 top-0 left-0 w-full h-full bg-white z-50 flex flex-col transition-all ease-in-out">
          <div className="flex justify-between items-center pt-6 px-8">
            <a href="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="" />
            </a>
            <div className="block lg:hidden">
              <button
                onClick={toggleSidebar}
                className="w-10 h-10 bg-black text-white flex justify-center items-center rounded-full focus:outline-none"
              >
               <FaTimes />
              </button>
            </div>
          </div>
          <ul
            className="space-y-14
           flex flex-col items-center justify-center h-full"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/josephadofo/"
                className="text-[#525866] text-2xl hover:text-gray-400"
                onClick={toggleSidebar}
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/josephadofo/"
                className="text-[#525866] text-2xl hover:text-gray-400"
                onClick={toggleSidebar}
              >
                LinkedIn
              </a>
            </li>

            <li>
                <a
                  href="mailto:kwabenaadofo330@gmail.com"
                  target="_blank"
                  className="text-white bg-black rounded-full px-6 py-4 text-[14px]"
                >
                  Get In Touch
                </a>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
