import { GithubIcon, Linkedin, MailIcon } from "lucide-react";
import { Element } from "react-scroll";

const ContactMe = () => {

    
  return (
    <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw] bg-[#19376D] ">
      <Element
        name="contact"
        className="flex flex-col text-2xl md:flex-row md:w-1/2 mx-auto items-center  gap-4 md:gap-16 rounded my-10  py-20 "
      >
        <div className="space-y-2">
          <h1 className="font-[800] md:text-4xl">Contact Me</h1>
          <p>Feel free to reach out</p>
        </div>
        <div className="text-xs md:text-sm  space-y-2">
          <div className="flex items-center gap-2">
            <MailIcon /> saiduli066@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Linkedin />
            linkedin.com/in/md-saidul-islam-akash
          </div>
          <div className="flex items-center gap-2">
            <GithubIcon />
            github.com/saiduli066
          </div>
        </div>
      </Element>
    </div>
  );
};

export default ContactMe;
