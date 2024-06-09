
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

type Section = "projects" | "blogs" | "skills";

const Dashboard = () => {
  const [openDropdown, setOpenDropdown] = useState({
    projects: false,
    blogs: false,
    skills: false,
  });

  const toggleDropdown = (section: Section) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row md:min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <nav className="w-full md:w-[15%] md:min-h-screen bg-gradient-to-b from-[#283e5e] to-[#1b2a3c] text-white shadow-lg">
        {["projects", "blogs", "skills"].map((section) => (
          <div key={section} className="w-full">
            <div
              className="flex justify-between items-center w-full py-4 px-6 text-lg font-semibold border-b border-gray-600 cursor-pointer hover:bg-[#3c5278] transition-colors duration-300"
              onClick={() => toggleDropdown(section as Section)}
            >
              <span className="capitalize">{section}</span>
              {openDropdown[section as Section] ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {openDropdown[section as Section] && (
              <div className="w-full py-2 bg-[#1b2a3c]">
                <ul className="space-y-2 pl-8 text-md text-gray-300">
                  <li className="hover:bg-[#283e5e] py-2 px-4 rounded-md transition-colors duration-300">
                    <Link to={`add-${section.slice(0, -1)}`}>
                      Add {section.slice(0, -1)}
                    </Link>{" "}
                  </li>
                  <li className="hover:bg-[#283e5e] py-2 px-4 rounded-md transition-colors duration-300">
                    <Link to={`edit-${section.slice(0, -1)}`}>
                      Action {section.slice(0, -1)}
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="flex-1 p-4 md:p-8 bg-white shadow-lg rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
