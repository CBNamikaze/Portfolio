import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function Index() {
  return (
    <div>
      <div className="background-margin">
        <Home />
        <About />
      </div>
      <div className="background-margin">
        <Projects />
      </div>
    </div>
  );
}

export default Index;
