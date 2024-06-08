import { Badge } from "@/components/ui/badge";
import { Element } from "react-scroll";
const Projects = () => {
  return (
    <Element name="projects">
      <h1 className="text-2xl md:text-3xl font-[800] py-6">Projects</h1>
      <div
        className="p-4 bg-cardBG-gradient my-6 md:my-8 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-md shadow-lg"
        data-aos="zoom-in-up"
      >
        <div>
          <img
            className="object-cover w-full h-auto rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEFA3LPrqv_OMET8aYcq5-V1qCIMkG_Q4X31VKBfZyba2fI29VtWxp-NTscbt1R3IVr8&usqp=CAU"
            alt="Project"
          />
        </div>
        <div className="mt-4">
          <h1 className="font-roboto font-bold text-lg md:text-2xl lg:text-3xl">
            Project Name
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            autem libero sapiente nulla ex, molestias quasi quos numquam saepe
            accusantium sed enim provident id et officiis nisi ad, vero dolore.
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex gap-3 justify-evenly items-center flex-wrap">
              <Badge className="bg-blue-500 text-white">React</Badge>
              <Badge className="bg-purple-500 text-white">Redux</Badge>
              <Badge className="bg-green-500 text-white">Express</Badge>
            </div>
            <div className="flex gap-3 justify-center items-center font-roboto font-semibold mt-4">
              <button className="px-4 py-2 rounded-full bg-[#576CBC] text-white hover:bg-[#4e61ac] transition-colors">
                Demo
              </button>
              <button className="px-4 py-2 rounded-full bg-[#576CBC] text-white hover:bg-[#4e61ac] transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
