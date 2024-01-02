import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
// import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skills from "./components/skills/Skills";
import Projects from "./components/portfolio/Project";
import Experience from "./components/experience/Experience";
// import Test from "./components/navbar/Test";
const App = () => {
  return (
    <div>
      {/* <Test /> */}
      <Cursor />
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <div className="section1" id="Experience">
        <Experience />
      </div>
      <div className="section1" id="Projects">
        <Projects />
      </div>
      <section>
        <Skills />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
