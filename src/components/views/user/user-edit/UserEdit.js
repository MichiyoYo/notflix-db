import React, { useState, useRef } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { updateUser } from "../../../../actions/actions";

const mapStateToProps = (state) => {
  const { userData } = state;
  return { userData };
};

/**
 * UserEdit component, lets the user update their info
 * @param {*} props
 * @returns a JSX element holding the form to update the user info
 */
function UserEdit(props) {
  const historyData = useHistory();

  const [username, setUsername] = useState(props.userData.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(props.userData.Email);
  const [name, setName] = useState(props.userData.Name);
  const [birthDate, setBirthdate] = useState(props.userData.BirthDate);
  const [isValid, setIsValid] = useState("");
  const [isNotValid, setIsNotValid] = useState("");

  var date = new Date(birthDate).toISOString().substring(0, 10);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = {
      Username: username,
      Password: password,
      Name: name,
      Email: email,
      BirthDate: birthDate,
    };
    axios
      .put(
        `https://notflixapi.herokuapp.com/users/${props.userData.Username}`,
        newInfo,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        const data = res.data;
        props.updateUser(newInfo);

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
        <Button onClick={() => historyData.goBack()} className="back-btn">
          <i className="fas fa-times"></i>
        </Button>
        <h2 className="mb-30 mt-10">Update Profile</h2>
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
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              defaultValue={username}
              required
              disabled
              pattern=".{8,}"
              title="Must be 8 or more characters, only alphanumeric characters are allowed"
              onChange={(e) => setUsername(e.target.value)}
            />
            <small>This value cannot be changed</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              pattern=".{8,}"
              defaultValue={password}
              title="Must be 8 or more characters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>Please insert old or new password</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              required
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small>Please insert old or new email address</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicDate">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Your birthday"
              defaultValue={date}
              onChange={(e) => setBirthdate(e.target.value)}
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

export default connect(mapStateToProps, { updateUser })(UserEdit);
