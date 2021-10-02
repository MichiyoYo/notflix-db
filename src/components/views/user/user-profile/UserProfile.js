import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function UserProfile(props) {
  const { userData } = props;
  const birth = new Date(userData.BirthDate);

  return (
    <Row className="user-details detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          {/* <Button onClick={() => historyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button> */}
          <Col sm={12}>
            <h2 className="mb-50">Welcome {userData.Username} !</h2>
          </Col>
          <Col sm={12}>
            <h3 className="mb-30">Your info</h3>
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
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default UserProfile;
