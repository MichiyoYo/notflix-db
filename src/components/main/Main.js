import React from "react";
import Router from "../router/Router";
import { Container, Row, Col } from "react-bootstrap";

/**
 * Main component, it is the main container of the application.
 * It holds the component Router which, based on the url, renders the right component
 * @param {*} props
 * @returns a JSX element that holds a Router component
 */
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
