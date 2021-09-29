import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import SocialIcons from "../social-icons/SocialIcons";

function Footer(props) {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md={4} sm={12} className="text-center credits">
            <p className="mb-0">
              Coded and Designed by{" "}
              <a href="https://cristinalester.rocks" target="_blank">
                Cristina Lester
              </a>
              <SocialIcons />
            </p>
          </Col>
          <Col md={4} sm={12} className="text-center logo-wrapper">
            <img src={logo} alt="NotFlix Logo" />
          </Col>
          <Col md={4} sm={12} className="text-center copyright">
            <p className="mb-0">2021 &copy; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
