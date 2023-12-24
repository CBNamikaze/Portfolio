import { Anchor, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";

function Home() {
  const [isBigScreen, setIsBigScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia("(min-width: 1500px)");
      setIsBigScreen(mediaQuery.matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
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
        <Col xs={1} sm={1} md={1} lg={1} xl={16} className="job-title">
          FULLSTACK
        </Col>
        {isBigScreen && (
          <Col xs={1} sm={1} md={1} lg={1} xl={8} className="name-title">
            SIBI MUGHIL
          </Col>
        )}
      </Row>
      <Row>
        <Col xs={7} sm={7} md={7} lg={6} xl={8} className="job-title"></Col>
        <Col
          xs={17}
          sm={17}
          md={17}
          lg={18}
          xl={16}
          className="job-title title-border"
        >
          DEVELOPER
        </Col>
      </Row>
      <Row className="home-bottom-row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="home-anchor">
          <Anchor affix={false} showInkInFixed={false} items={items} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ContactCard circle="#ffaf52" />
        </Col>
      </Row>
    </>
  );
}

export default Home;
