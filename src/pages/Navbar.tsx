import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-[#04152d6b] md:fixed top-0 right-0 left-0 flex justify-between items-center px-4 md:px-16 pt-4 md:pt-6 shadow-md z-50">
      <div>
        <Link to="/" className="font-[600] text-3xl text-white">
          My Portfolio
        </Link>
      </div>

      <ul className="hidden lg:flex space-x-10 items-center text-[19px] font-[500] text-white">
        <LinkScroll
          to="about"
          activeClass="border-b-2 border-active text-active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          About Me
        </LinkScroll>
        <LinkScroll
          to="skills"
          activeClass="border-b-2 border-active text-active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          Skills
        </LinkScroll>
        <LinkScroll
          to="projects"
          activeClass="border-b-2 border-active text-active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          Projects
        </LinkScroll>
        <LinkScroll
          to="contact"
          activeClass="border-b-2 border-active text-active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          Contact Me
        </LinkScroll>
      </ul>

      <div className="lg:hidden relative z-50">
        <button
          onClick={toggleNavbar}
          className="text-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-[#576CBC]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul
          className={`flex flex-col absolute w-[112px] right-0 top-full text-sm ease-in bg-[#576bbc49] rounded-md px-3 py-2 text-white ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <LinkScroll
            to="about"
            activeClass="border-b-2 border-active text-active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer py-2"
            onClick={toggleNavbar}
          >
            About Me
          </LinkScroll>
          <LinkScroll
            to="skills"
            activeClass="border-b-2 border-active text-active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer py-2"
            onClick={toggleNavbar}
          >
            Skills
          </LinkScroll>
          <LinkScroll
            to="projects"
            activeClass="border-b-2 border-active text-active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </LinkScroll>
          <LinkScroll
            to="contact"
            activeClass="border-b-2 border-active text-active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            Contact Me
          </LinkScroll>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
