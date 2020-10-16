import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import frame from "../../../images/logos/frame.png";

const Banner = () => {
  return (
    <Container className="banner">
      <Row>
        <Col className="align-self-center" md={4}>
          <h1>Let’s Grow Your Brand To The Next Level</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
          <Button variant="dark">Hire us</Button>
        </Col>
        <Col md={8}>
          <Image src={frame} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
