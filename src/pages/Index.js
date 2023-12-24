import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Interests from "./Interests";
import Contact from "./Contact";

function Index() {
  return (
    <div>
      <div className="background-margin">
        <Home />
      </div>
      <div className="background-margin">
        <About />
      </div>
      <div className="background-margin">
        <Projects />
      </div>
      <Skills />
      {/* <Interests /> */}
      <Contact />
    </div>
  );
}

export default Index;
