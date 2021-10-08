import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import SocialIcons from "../social-icons/SocialIcons";

/**
 * Footer component
 * @returns a JSX object that renders the footer
 */
function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col
            md={4}
            sm={12}
            className="text-center credits d-flex flex-column"
          >
            <p className="mb-0">
              Coded and Designed by{" "}
              <a
                href="https://cristinalester.rocks"
                rel="noreferrer"
                target="_blank"
              >
                Cristina Lester
              </a>
            </p>
            <SocialIcons />
          </Col>
          <Col
            md={4}
            sm={12}
            className="text-center logo-wrapper d-flex flex-column"
          >
            <img src={logo} alt="NotFlix Logo" />
          </Col>
          <Col
            md={4}
            sm={12}
            className="text-center copyright  d-flex flex-column"
          >
            <p className="mb-0">2021 &copy; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
