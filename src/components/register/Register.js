import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="login-wrapper">
        <h2>Register</h2>
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" placeholder="Your birthday" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-10">
            Submit
          </Button>
        </Form>
        <p className="text-muted mt-20 mb-0">
          Already have an account?{" "}
          <Link to="/login">
            <Button variant="link">Login</Button>
          </Link>
        </p>
      </Col>
    </Row>
  );
}

export default Register;
