import React, { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("true");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://notflixapi.herokuapp.com/login`, {
        Username: username,
        Password: password,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        props.onLogin(data);
      })
      .catch((err) => {
        console.error(`
        🚫 Wrong username or password.
        ${err}
        `);
        setIsValid(false);
      });
  };

  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="login-wrapper">
        <h2>Login</h2>
        {isValid ? (
          <Alert variant="danger" show={false}></Alert>
        ) : (
          <Alert variant="danger" show={true}>
            🚫 Wrong username or password. Try again.
          </Alert>
        )}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
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
