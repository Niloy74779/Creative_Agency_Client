import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
import "./Partners.css";

const Partners = () => {
  return (
    <Container className="partners my-5">
      <Row>
        <Col>
          <Image src={slack} className=" img-fluid partner-logo" />
        </Col>
        <Col>
          <Image src={google} className=" img-fluid partner-logo" />
        </Col>
        <Col>
          <Image src={uber} className=" img-fluid partner-logo" />
        </Col>
        <Col>
          <Image src={netflix} className=" img-fluid partner-logo" />
        </Col>
        <Col>
          <Image src={airbnb} className=" img-fluid partner-logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;
