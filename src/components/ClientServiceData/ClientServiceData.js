import React from "react";
import { Alert, Col, Image, Row } from "react-bootstrap";

const ClientServiceData = ({ service }) => {
  const { service: serviceName, detail, status, projectImage } = service;

  return (
    <Col
      md={4}
      style={{ border: "1px solid lightgray", padding: "5px", margin: "5px" }}
    >
      <Row>
        <Col>
          <Image
            src={`data:image/png;base64,${projectImage.img}`}
            className="img-fluid"
            style={{ height: "100px", width: "100px", margin: "auto" }}
          />
        </Col>
        <Col>
          <Alert variant="info">{status.toUpperCase()}</Alert>
        </Col>
      </Row>
      <h4 className="mt-3">{serviceName}</h4>
      <p>{detail}</p>
    </Col>
  );
};

export default ClientServiceData;
