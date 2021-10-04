import React from "react";
import Router from "../router/Router";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function Main(props) {
  return (
    <main>
      <Container fluid className="main-container">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <Router {...props} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
