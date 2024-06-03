import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="flex justify-between items-center px-4  md:px-16 py-6 md:py-6">
      <div>
        <Link to="/" className="font-[600] text-3xl">
          My Portfolio
        </Link>
      </div>

      <ul className="hidden lg:flex  space-x-10 items-center text-[19px] font-[500] ">
        <Link to="/">About Me</Link>
        <Link to="/">Experience</Link>
        <Link to="/">Contact Me</Link>
      </ul>
      <div className="lg:hidden relative z-[100]">
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
          className={`lg:flex  flex-col absolute w-[112px] right-0 top-full text-sm ease-in bg-[#576bbc49] rounded-md px-3 py-2 text-white ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <p>
            <Link to="/">About Me</Link>
          </p>
          <p>
            <Link to="/">Experience</Link>
          </p>
          <p>
            <Link to="/">Contact Me</Link>
          </p>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
