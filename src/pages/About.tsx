const About = () => {
  return (
    <section className="bg-[#0C0C0C] p-6 rounded-md">
      <h1 className="font-roboto font-bold text-xl md:text-3xl">About Me</h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div>
          {" "}
          <img
            className="md:w-3/4 mx-auto"
            src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
            alt="About Image"
          />
        </div>
        <div className="">
          <div className="bg-slate-100 text-black mb-3  p-4 rounded-lg">
            <h1 className="font-roboto font-semibold">Frontend Developer</h1>
            <p className="text-sm">
              I’m a front-end developer with experience in building responsive
              and optimized sites
            </p>
          </div>
          <div className="bg-slate-100 text-black  p-4 rounded-lg">
            <h1 className="font-roboto font-semibold ">IT Undergrad Student</h1>
            <p className="text-sm">
              I’m a student of Information and Communication Engineering in
              NSTU. In the end of 2026,I will be an IT Graduate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
