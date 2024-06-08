import About from "./pages/About";
import Banner from "./pages/Banner";
import ContactMe from "./pages/ContactMe";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/skills/Skills";

const App = () => {
  return (
    <div className="bg-[#04152D] text-white px-5 overflow-hidden">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <div className="flex flex-col md:flex-row gap-3">
        <Projects />
        <Projects />
        <Projects />
      </div>
      <div className="bg-[#19376D]">
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
