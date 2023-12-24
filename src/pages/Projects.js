import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Col, Row } from "antd";

function Projects() {
  return (
    <div>
      <div className="center about-main-header">PROJECTS</div>
      <div className="center about-description">WEB DEVELOPMENT</div>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <ProjectCard />
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <ProjectCard />
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <ProjectCard />
        </Col>
      </Row>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <ProjectCard />
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <ProjectCard />
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={8}>
          <ProjectCard />
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
