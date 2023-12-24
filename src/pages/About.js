import { Anchor, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import image from "../assets/image.png";
function About() {
  return (
    <>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={17}>
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

export default About;
