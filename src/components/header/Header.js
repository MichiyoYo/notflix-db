import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { UserContext } from "../../App";

import logo from "../../images/logo.png";

function Header(props) {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="pt-20 pb-20 pl-10 pr-10"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="NotFlix Logo"
              src={logo}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0 text-center">
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/genres">Genres</Nav.Link>
              <Nav.Link href="/directors">Directors</Nav.Link>
              <Nav.Link href="/actors">Actors</Nav.Link>
            </Nav>
            {props.user ? (
              <Nav variant="pills text-center logged-in-menu">
                <Nav.Link href="/user/favorites">
                  <i className="fas fa-heart mr-10"></i>
                  Favorites
                </Nav.Link>
                <Nav.Link href="/user/watchlist">
                  <i className="fas fa-bookmark mr-10"></i>
                  Watchlist
                </Nav.Link>
                <Nav.Item className="ml-30">
                  <Button onClick={props.onLogout}>Logout</Button>
                </Nav.Item>
              </Nav>
            ) : (
              <Nav variant="pills text-center">
                <Nav.Item>
                  <Nav.Link href="/login">
                    <Button>Login</Button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
