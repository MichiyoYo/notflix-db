import React, { useState, useRef } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function UserEdit(props) {
  const [username, setUsername] = useState(props.userData.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(props.userData.Email);
  const [name, setName] = useState(props.userData.Name);
  const [birthDate, setBirthdate] = useState(props.userData.BirthDate);
  const [isValid, setIsValid] = useState("");
  const [isNotValid, setIsNotValid] = useState("");

  const birth = new Date(birthDate);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://notflixapi.herokuapp.com/users/${props.userData.Username}`,
        {
          Username: username,
          Password: password,
          Name: name,
          Email: email,
          BirthDate: birthDate,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        const data = res.data;
        setIsValid(true);
      })
      .catch((err) => {
        console.error(`🛑 Error updating the user \n${err}`);
        setIsNotValid(true);
      });
  };

  const validate = () => {
    form.current.reportValidity();
  };

  return (
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12} className="login-wrapper">
        <h2 className="mb-30">Update Profile</h2>
        {isValid ? (
          <div>
            <Alert variant="success" show={true}>
              Your info have been updated! 👌
            </Alert>
          </div>
        ) : (
          ""
        )}
        {isNotValid ? (
          <Alert variant="danger" show={false}>
            🛑 Something went wrong with your info update.
          </Alert>
        ) : (
          ""
        )}
        <Form ref={form} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              required
              pattern=".{8,}"
              title="Must be 8 or more characters"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Your birthday"
              onChange={(e) => setBirthdate(e.target.value)}
              value={birth}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-10"
            onClick={validate}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default UserEdit;
