import { Col, Row } from "antd";
import React from "react";
import Home from "./Home";
import AboutTop from "./AboutTop";

function Index() {
  return (
    <div>
      <div className="background-margin">
        <Home />
      </div>{" "}
      <div className="background-margin">
        <AboutTop />
      </div>
    </div>
  );
}

export default Index;
