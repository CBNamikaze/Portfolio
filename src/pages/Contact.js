import { Col, Row } from "antd";
import React from "react";
import ContactCard from "../components/ContactCard";

function Contact() {
  return (
    <div>
      <div className="contacts-top">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contacts-title">
          LET'S CONNECT
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contacts-title">
          <ContactCard circle="#f6f6f6" />
        </Col>
      </div>
      <div className="contacts-bottom">
        <div>MAIL</div>
        <div>TWITTER</div>
        <div>LINKEDIN</div>
        <div>INSTAGRAM</div>
        <div>DEV.TO</div>
        <div>GITHUB</div>
      </div>
    </div>
  );
}

export default Contact;
