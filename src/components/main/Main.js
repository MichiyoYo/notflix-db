import React from "react";
import Router from "../router/Router";
import { Container, Row, Col } from "react-bootstrap";

function Main(props) {
  return (
    <main>
      <Container fluid className="main-container">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <Router
              user={props.user}
              movies={props.movies}
              directors={props.directors}
              genres={props.genres}
              actors={props.actors}
              onLogin={props.onLogin}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
