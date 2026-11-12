import "./App.css";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Experience from "./components/sections/Experience.jsx";
import Projects from "./components/sections/Projects.jsx";
import Achievements from "./components/sections/Achievements.jsx";
import Education from "./components/sections/Education.jsx";
import Contact from "./components/sections/Contact.jsx";

function App() {
  return (
      <>
        <Hero/>
        <About/>
        <Skills />
        <Experience/>
          <Projects/>
          <Achievements/>
          <Education/>
          <Contact/>
      </>
  );
}

export default App;