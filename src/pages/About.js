import { Anchor, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import image from "../assets/image.png";
function About() {
  return (
    <>
      <Row>
        <Col xs={24} sm={17} md={17} lg={17} xl={17}>
          <div className="about-header">
            <div>
              <div className="about-main-header">HELLO! I'M SIBI MUGHIL</div>
              <div className="about-job-header">
                FULLSTACK <span style={{ color: "#292929" }}>|</span> DEVELOPER
              </div>
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
        </Col>
        <Col xs={24} sm={7} md={7} lg={7} xl={7}>
          <img src={image} height="100%" width="100%" />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <div className="about-side-header-container">
            <div className="about-side-header title-border">LET'S</div>
            <div className="about-side-header title-border">WORK</div>
            <div className="about-side-header title-border">TOGETHER</div>
          </div>
        </Col>
        <Col xs={20} sm={10} md={10} lg={10} xl={10}>
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

export default About;
