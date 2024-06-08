import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className="bg-[#0C0C0C] p-6 rounded-md">
      <h1 className="font-roboto font-bold text-2xl md:text-3xl">About Me</h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          <img
            className="md:w-3/4 mx-auto"
            src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
            alt="About Image"
          />
        </div>
        <div className="">
          <div
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="bg-aboutCardBG-gradient mb-3  p-4 rounded-lg"
          >
            <h1 className="font-roboto font-semibold">Frontend Developer</h1>
            <p className="text-sm">
              I’m a front-end developer with experience in building responsive
              and optimized sites
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="bg-aboutCardBG-gradient   p-4 rounded-lg"
          >
            <h1 className="font-roboto font-semibold ">IT Undergrad Student</h1>
            <p className="text-sm">
              I’m a student of Information and Communication Engineering in
              NSTU. In the end of 2026,I will be an IT Graduate.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
