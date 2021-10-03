import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import logo from "../../images/logo2x.png";

function Home(props) {
  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="text-center home-content">
        <h1 className="mb-30">
          Welcome to
          <img className="pt-50" src={logo} alt="Large Notflix logo" fluid />
        </h1>
        <h2 className="subtitle">Not your mother's movie DB</h2>
      </Col>
    </Row>
  );
}

export default Home;
