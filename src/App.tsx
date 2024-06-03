
import About from './pages/About';
import Banner from './pages/Banner';
import Navbar from './pages/Navbar';
import Skills from './pages/skills/Skills';

const App = () => {
  return (
    <div className="bg-[#04152D] text-white px-5">
      <Navbar />
      <Banner />
      <About />
      <Skills/>
    </div>
  );
};

export default App;