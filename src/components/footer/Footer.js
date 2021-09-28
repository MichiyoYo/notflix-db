import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className="text-center">1 of 3</Col>
          <Col className="text-center">2 of 3</Col>
          <Col className="text-center">3 of 3</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
