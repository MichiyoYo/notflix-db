import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import logo from "../../images/logo2x.png";
import { Link } from "react-router-dom";

/**
 * Home component, renders a welcome message on the home page of the site
 * @returns a JSX element that holds a welcome message
 */
function Home() {
  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="text-center home-content">
        <h1 className="mb-30">
          Welcome to
          <img className="pt-50" src={logo} alt="Large Notflix logo" />
        </h1>
        <h2 className="subtitle mb-30">
          Not Your mother's movie DB
          <span className="block mt-20">🍿 🎥 ⭐</span>
        </h2>
        <Link to="/login">
          <Button>Start having fun</Button>
        </Link>
      </Col>
    </Row>
  );
}

export default Home;
