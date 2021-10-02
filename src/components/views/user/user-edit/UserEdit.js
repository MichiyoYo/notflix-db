import React, { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function UserEdit(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthdate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://notflixapi.herokuapp.com/users/${username}`, {
        Username: username,
        Password: password,
        Name: name,
        Email: email,
        BirthDate: birthDate,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setIsValid(true);
        window.open("/login", "_self");
      })
      .catch((err) => {
        console.error(`🛑 Error registering the user \n${err}`);
        setIsValid(false);
      });
  };

  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="login-wrapper">
        <h2 className="mb-30">Update Profile</h2>
        {isValid ? (
          <div>
            <Alert variant="danger" show={false}></Alert>
          </div>
        ) : (
          <Alert variant="danger" show={true}>
            🛑 Something went wrong with your registration.
          </Alert>
        )}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Your birthday"
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-10"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default UserEdit;
