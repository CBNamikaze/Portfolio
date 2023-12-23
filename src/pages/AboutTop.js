import { Anchor, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
function AboutTop() {
  const [isBigScreen, setIsBigScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia("(min-width: 1200px)");
      setIsBigScreen(mediaQuery.matches);
    };
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      key: "1",
      href: "#home",
      title: "// Home",
    },
    {
      key: "2",
      href: "#about",
      title: "// About",
    },
    {
      key: "3",
      href: "#projects",
      title: "// Projects",
    },
    {
      key: "4",
      href: "#skills",
      title: "// Skills",
    },
    {
      key: "5",
      href: "#contact",
      title: "// Contact",
    },
  ];
  return (
    <>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={17}>
          <div className="about-header">
            <div>
              <div className="about-main-header">HELLO! I'M SIBI MUGHIL</div>
              <div className="about-job-header">
                FULLSTACK <span style={{ color: "#292929" }}>|</span> DEVELOPER
              </div>{" "}
            </div>
          </div>
          <p className="about-description big-desc-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </p>
          <p className="about-description smol-desc-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </p>
          {/* </div>
          </div> */}
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={7}>
          <img src={image} />
        </Col>
      </Row>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <div className="about-side-header-container">
            <div className="about-side-header title-border">LET'S</div>
            <div className="about-side-header title-border">WORK</div>
            <div className="about-side-header title-border">TOGETHER</div>
          </div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={10}>
          <p className="about-description big-phrase-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="about-description smol-phrase-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default AboutTop;
