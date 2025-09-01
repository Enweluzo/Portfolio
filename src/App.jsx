import { useEffect } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Testimonial from "./components/testimonial";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
