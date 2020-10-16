import React from "react";
import { useContext } from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";

const NavbarMenu = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <div className="container">
      <Navbar variant="light" expand="lg">
        <Navbar.Brand>
          <Image src={logo} className="w-25 img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              Our Portfolio
            </Link>
            <Link to="/" className="nav-link">
              Contact Us
            </Link>
            <Link to="/" className="nav-link">
              Our Team
            </Link>
          </Nav>

          {loggedInUser.isLoggedIn ? (
            <>
              <Link
                to={loggedInUser.isAdmin ? "/servicelist" : "clientservicelist"}
                className="nav-link"
              >
                <Button variant="secondary">Dashboard</Button>
              </Link>
              <Link to="/login" className="nav-link">
                <Button variant="danger">Logout</Button>
              </Link>
            </>
          ) : (
            <Link to="/login" className="nav-link">
              <Button variant="dark">Login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
