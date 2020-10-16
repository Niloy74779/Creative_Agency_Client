import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import ServiceListDetail from "../ServiceListDetail/ServiceListDetail";

const ServicesList = () => {
  const [loading, setLoading] = useState(true);
  const [orderServices, setOrderServices] = useState([]);

  useEffect(() => {
    fetch("https://creative-agency1.herokuapp.com/allorders", {
      method: "POST",
      body: JSON.stringify({ email: "" }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setOrderServices(data);
      })
      .catch(() => alert("Something went wrong"));
  }, []);

  const changeStatus = (id, state) => {
    setLoading(true);
    fetch("https://creative-agency1.herokuapp.com/changeorderstatus", {
      method: "PATCH",
      body: JSON.stringify({ id: id, status: state }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderServices(data);
        setLoading(false);
        alert("Order status changed successfully");
      })
      .catch(() => alert("Somwthing went wrong"));
  };

  return (
    <Row>
      <Col md={2} sm={2} xs={2}>
        <Sidebar />
      </Col>
      <Col md={10} sm={10} xs={10} className="responsive-dashboard">
        <DashboardHeader title="Services List" />

        {loading && <h2 className="text-info">Loading... Please Wait...</h2>}

        <Container>
          <Row>
            <Col md={12}>
              <Table size="md" responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orderServices.map((service) => (
                    <ServiceListDetail
                      key={service._id}
                      service={service}
                      changeStatus={changeStatus}
                    />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default ServicesList;
