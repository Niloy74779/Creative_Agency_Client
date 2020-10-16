import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  const { _id, iconImage, title, description } = service;

  return (
    <Col
      md={{ span: 3, offset: 1 }}
      sm={{ span: 5, offset: 1 }}
      className="my-5 service-box"
    >
      <Link to={`/order/${_id}`} className="nav-link text-dark">
        <Image
          src={`data:image/png;base64,${iconImage.img}`}
          className="img-fluid image"
        />
        <h4 className="mt-3">{title}</h4>
        <p>{description}</p>
      </Link>
    </Col>
  );
};

export default ServiceDetails;
