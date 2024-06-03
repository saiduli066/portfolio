import { DownloadIcon } from "lucide-react";
import bannerImg from "../assets/dp.jpg";
import resume from '../assets/resume.pdf';

const Banner = () => {


  return (
    <section className="flex flex-col-reverse gap-11 md:gap-4  md:px-16 md:flex-row md:justify-between md:items-center py-16">
      <div className="space-y-3 md:space-y-6 md:w-1/2 text-center md:text-left">
        <h1 className="font-roboto font-[800] text-xl md:text-4xl">
          Hi, I'm MD Saidul Islam
        </h1>
        <p className="text-justify">
          I’m a Frontend Developer passionate about creating intuitive and
          dynamic user interfaces. Although I'm currently not employed, I'm
          actively seeking opportunities to apply and further develop my skills.
        </p>
        <p>
          <button className="px-4 py-2 rounded-3xl  bg-[#576CBC] hover:bg-[#4e61ac]">
            <a
              href={resume}
              download="resume"
              className="flex items-center gap-1"
            >
              {" "}
              <span>
                <DownloadIcon />
              </span>{" "}
              My Resume{" "}
            </a>
          </button>
        </p>
      </div>
      <div className="">
        <img
          className="w-[70%] mx-auto rounded-full"
          src={bannerImg}
          alt="Banner Image"
        />
      </div>
    </section>
  );
};

export default Banner;
