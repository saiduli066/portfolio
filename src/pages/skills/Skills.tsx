import { Element } from "react-scroll";
import skills from "./skill";

const Skills = () => {
  return (
    <Element
      name="skills"
      className="py-10 md:py-14 px-6 space-y-6 my-6 md:my-10 bg-[#04152D]"
    >
      <h1 className="font-roboto font-[800] text-2xl md:text-3xl  text-gray-200 mb-8">
        Skills
      </h1>
      <div className="flex flex-wrap gap-8 justify-center mx-auto py-8">
        {skills.map((skill, index) => (
          <div
            data-aos="zoom-in-up"
            key={index}
            className="bg-white p-6 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center"
          >
            <img
              className="object-contain w-16 md:w-20"
              src={skill.icon_url}
              alt={skill.name}
            />
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
