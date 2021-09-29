import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="login-wrapper">
        <h2>Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Your Username" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="text-muted mt-20 mb-0">
          No account yet?{" "}
          <Link to="/register">
            <Button variant="link">Register</Button>
          </Link>
        </p>
      </Col>
    </Row>
  );
}

export default Login;
