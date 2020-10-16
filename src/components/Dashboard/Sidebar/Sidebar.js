import React, { useContext } from "react";
import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faShoppingBag,
  faPeopleArrows,
  faCartPlus,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <div>
      <Nav className="d-block sidebar">
        <Nav.Item className="mb-5">
          <Link to="/" className="nav-link text-dark">
            <Image src={logo} className="w-25" />
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={loggedInUser.isAdmin ? "/servicelist" : "/clientservicelist"}
            className="nav-link text-dark"
          >
            <FontAwesomeIcon icon={faShoppingBag} /> Service List
          </Link>
        </Nav.Item>
        {loggedInUser.isAdmin === true ? (
          <>
            <Nav.Item>
              <Link to="/addservice" className="nav-link text-dark">
                <FontAwesomeIcon icon={faPlus} /> Add Service
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/makeadmin" className="nav-link text-dark">
                <FontAwesomeIcon icon={faPeopleArrows} /> Make Admin
              </Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Link
                to="/order/5f86a6553663052ec4775aaa"
                className="nav-link text-dark"
              >
                <FontAwesomeIcon icon={faCartPlus} /> Order
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/review" className="nav-link text-dark">
                <FontAwesomeIcon icon={faComments} />
                Review
              </Link>
            </Nav.Item>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
