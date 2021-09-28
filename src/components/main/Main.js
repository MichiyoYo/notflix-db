import React from "react";
import Router from "../router/Router";
import { Container, Row } from "react-bootstrap";

function Main(props) {
  return (
    <main>
      <Container fluid className="main-container">
        <Row>
          <Router />
        </Row>
      </Container>
    </main>
  );
}

export default Main;
