import { DownloadIcon } from "lucide-react";
// import bannerImg from "../assets/dp.jpg";
import bannerImg1 from "../assets/profile-pic.png";
import resume from "../assets/resume.pdf";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <section className="flex flex-col-reverse gap-11 md:gap-4  md:px-16 md:flex-row md:justify-between md:items-center py-16 md:py-28">
      <div
        className="space-y-3 md:space-y-6 md:w-1/2 text-center md:text-left"
        data-aos="fade-up"
      >
        <h1
          data-aos="fade-in"
          className="font-roboto font-[800] text-xl md:text-4xl"
        >
          Hi, I'm MD Saidul Islam
        </h1>
        <Typewriter
          options={{
            strings: [
              `I’m a Frontend Developer passionate about creating intuitive and dynamic user interfaces. 
              Currently, I'm actively seeking opportunities to apply and further develop my skills.
              I love building responsive and optimized websites.`,
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <p>
          <button className="px-4 py-2 rounded-3xl  bg-[#576CBC] hover:bg-[#4e61ac]">
            <a
              href={resume}
              download="resume"
              className="flex items-center gap-1"
            >
              {" "}
              <span>
                <DownloadIcon className="animate-downloadIcon" />
              </span>{" "}
              My Resume{" "}
            </a>
          </button>
        </p>
      </div>
      <div className=" shadow-lg hover:shadow-xl" data-aos="zoom-in-down">
        {/* <img
          className="w-[70%] mx-auto rounded-full"
          src={bannerImg}
          alt="Banner Image"
        /> */}
        <img
          className="w-[70%] mx-auto rounded-full animate-float"
          src={bannerImg1}
          alt="Banner Image"
        />
      </div>
    </section>
  );
};

export default Banner;
