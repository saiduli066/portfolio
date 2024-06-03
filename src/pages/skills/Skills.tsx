import skills from "./skill";

const Skills = () => {

    return (
      <div className="py-10 md:py-14 px-6 space-y-6 my-6 md:my-10">
        <h1 className="font-roboto font-bold text-xl md:text-3xl">Skills</h1>
        <div className="flex flex-wrap gap-6 justify-center mx-auto">
          {skills.map((skill) => (
            <div className="bg-slate-300 p-4 rounded-full flex  items-center overflow-hidden">
              {" "}
              <img className="object-contain w-16  " src={skill.icon_url} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Skills;