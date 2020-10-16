import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://creative-agency1.herokuapp.com/makeadmin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Set email address as admin successfully");
          reset();
        }
      })
      .catch(() => alert("Something went wrong"));
  };

  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10} className="responsive-dashboard">
          <DashboardHeader title="Make Admin" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              placeholder="jon@gmail.com"
              className="form-control w-25 d-inline"
            />
            {/* errors will return when field validation fails  */}
            <input type="submit" className="btn btn-success d-inline" />
            <br />
            {errors.email && (
              <span className="text-danger">* Invalid Email address</span>
            )}
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default MakeAdmin;
