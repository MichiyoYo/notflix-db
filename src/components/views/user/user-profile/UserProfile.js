import React, { useState } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function UserProfile(props) {
  const { userData } = props;
  const birth = new Date(userData.BirthDate);
  const [isValid, setIsValid] = useState(true);

  const handleDeregister = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://notflixapi.herokuapp.com/users/${userData.Username}/deregister`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setIsValid(true);
        window.open("/login", "_self");
      })
      .catch((err) => {
        setIsValid(false);
        console.error(err);
      });
  };

  return (
    <Row className="user-details justify-content-center">
      <Col sm={12}>
        <Row className="user-details-wrap justify-content-center">
          <Col md={6} sm={12} className="copy">
            <div className="header">
              <h2 className="mb-50">Welcome {userData.Username} ! 👋</h2>
              {isValid ? (
                <div>
                  <Alert variant="danger" show={false}></Alert>
                </div>
              ) : (
                <Alert variant="danger" show={true}>
                  🛑 Something went wrong with your deregistration.
                </Alert>
              )}
              <h3 className="mb-30">Your info</h3>
            </div>
            <div className="info mb-30">
              <p>
                <span className="label">Username: </span>
                {userData.Username}
              </p>
              <p>
                <span className="label">Name: </span>
                {userData.Name}
              </p>
              <p>
                <span className="label">Email: </span>
                {userData.Email}
              </p>
              <p>
                <span className="label">Birthday: </span>
                {birth.getMonth() +
                  1 +
                  "/" +
                  birth.getDate() +
                  "/" +
                  birth.getFullYear()}
              </p>
              <p>
                <Link to="/user/favorites">
                  <Button variant="link">Your Favorite Movies</Button>
                </Link>
              </p>
              <p>
                <Link to="/user/watchlist">
                  <Button variant="link">Your Watchlist</Button>
                </Link>
              </p>
            </div>
            <div className="interactions">
              <Link to="/user/edit">
                <Button>Edit Profile</Button>
              </Link>
              <Button onClick={handleDeregister}>Deregister</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default UserProfile;
