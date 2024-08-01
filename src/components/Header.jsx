import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/images/header-logo.png";

export default function Header() {
  const [click, Setclick] = useState(false);
  const handleClick = () => Setclick(!click);

  const content = (
    <>
      <div className="lg:hidden z-50 block absolute top-28 w-full left-0 right-0 bg-slate-500 backdrop-blur-xl bg-opacity-35 transition">
        <ul className="text-center text-xl px-20 py-6">
          <Link to="home" spy={true} smooth={true} offset={40} duration={500}>
            <li className="my-4 py-3 text-gray-700 hover:text-white transition-all duration-150 hover:rounded-lg hover:bg-gray-500">
              Home
            </li>
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={80}
            duration={500}
          >
            <li className="my-4 py-3 text-gray-700  hover:text-white transition-all duration-150 hover:rounded-lg hover:bg-gray-500">
              Courses
            </li>
          </Link>
          <Link
            to="success"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="my-4 py-3 text-gray-700  hover:text-white transition-all duration-150 hover:rounded-lg hover:bg-gray-500">
              Success
            </li>
          </Link>
          <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
            <li className="my-4 py-3 text-gray-700  hover:text-white transition-all duration-150 hover:rounded-lg hover:bg-gray-500">
              FAQ
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="my-4 py-3 text-gray-700  hover:text-white transition-all duration-150 hover:rounded-lg hover:bg-gray-500">
              Contact Us
            </li>
          </Link>

          <Link to="\">
            <li className="my-6 py-3 text-blue-700 rounded-lg border-2 border-blue-700 transition-all duration-150 hover:rounded-lg hover:bg-gray-100">
              Login
            </li>
          </Link>

          <Link to="\">
            <li className="my-6 py-3 text-white rounded-lg bg-blue-700 transition-all duration-150 hover:rounded-lg hover:bg-blue-500">
              Register
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="z-50 bg-white">
      <div className="h-10vh flex justify-between lg:py-2 px-14 py-6">
        <div className="flex items-center flex-1">
          <img className="h-[60px] md:h-[80px]" src={logo} />
        </div>
        <div className="lg:flex flex-1 justify-center items-center font-normal hidden">
          <ul className="flex gap-8 text-[18px]">
            <Link to="home" spy={true} smooth={true} offset={40} duration={500}>
              <li className="text-xl text-gray-900 border-white border-b-2 hover:text-gray-600 transition hover:border-gray-600 cursor-pointer">
                Home
              </li>
            </Link>
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={80}
              duration={500}
            >
              <li className="text-xl text-gray-900 border-white border-b-2 hover:text-gray-600 transition hover:border-gray-600 cursor-pointer">
                Courses
              </li>
            </Link>
            <Link
              to="success"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="text-xl text-gray-900 border-white border-b-2 hover:text-gray-600 transition hover:border-gray-600 cursor-pointer">
                Success
              </li>
            </Link>
            <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
              <li className="text-xl text-gray-900 border-white border-b-2 hover:text-gray-600 transition hover:border-gray-600 cursor-pointer">
                FAQ
              </li>
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="text-xl text-gray-900 border-white border-b-2 hover:text-gray-600 transition hover:border-gray-600 cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:flex justify-center items-center gap-8 flex-1 hidden">
          <button className="bg-white text-blue-700 px-5 py-2 border-blue-700 hover:border-blue-900 hover:text-blue-900 border-2 border-solid">
            Login
          </button>
          <button className="bg-blue-700 text-white hover:bg-blue-500 px-5 py-2">
            Register
          </button>
        </div>
        <div>{click && content}</div>
        <button
          className="block md:hidden transition-none"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="text-black" />
          ) : (
            <CiMenuFries className="text-black" />
          )}
        </button>
      </div>
    </nav>
  );
}
