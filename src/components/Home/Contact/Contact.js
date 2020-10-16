import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div
      className="contact mt-5 px-5 pt-5 pb-3"
      style={{ backgroundColor: "#FBD062" }}
    >
      <Container>
        <Row className="mb-5 align-self-center">
          <Col md={6} sm={12}>
            <h2>
              Let us handle your <br /> project, professionally.
            </h2>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email address" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Your name / company’s name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Your message"
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <p className="text-center">copyright Orange labs 2020</p>
      </Container>
    </div>
  );
};

export default Contact;
