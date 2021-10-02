import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccessDenied(props) {
  return (
    <div>
      <Row className="access-denied  justify-content-center">
        <Col md={6} sm={12} className="text-center copy">
          <h2 className="mb-40">🚫Access Denied🚫</h2>
          <p>
            Please{" "}
            <Link to="/login">
              <Button variant="link">Login</Button>
            </Link>{" "}
            or{" "}
            <Link to="/register">
              <Button variant="link">Register</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AccessDenied;
