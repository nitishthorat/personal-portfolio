import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Botpress from "./components/Botpress/Botpress";
import NexusAvatar from "./components/NexusAvatar/NexusAvatar";

import useSectionInView from "./hooks/useSectionInView";

function App() {
  const currentSectionId = useSectionInView([
    "home",
    "skills",
    "projects",
    "contact",
  ]);

  const handleNexusClick = () => {
    // optional: scroll to section or open chat
  };

  return (
    <div className="App">
      <NavBar />
      <Banner id="home" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
      <Botpress />
      <NexusAvatar
        currentSection={currentSectionId}
        onClick={handleNexusClick}
      />
    </div>
  );
}

export default App;
