import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("icon", data.file[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);

    fetch("https://creative-agency1.herokuapp.com/addservice", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Service added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10} className="responsive-dashboard">
          <DashboardHeader title="Add Service" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="d-block">
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              <Col md={6}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="title">Service Title</label>
                <input
                  name="title"
                  ref={register({ required: true })}
                  className="form-control mb-3"
                />
                {errors.title && (
                  <span className="text-danger">* This field is required</span>
                )}
                <br />
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  ref={register({ required: true })}
                  className="form-control mb-3"
                />
                {/* errors will return when field validation fails  */}
                {errors.description && (
                  <span className="text-danger">* This field is required</span>
                )}
                <br />
              </Col>

              <Col md={6}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="servicetitle">Icon</label>
                <input
                  type="file"
                  name="file"
                  ref={register({ required: true })}
                  className="w-25 mb-2"
                />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.file && (
                  <span className="text-danger">* This field is required</span>
                )}
                <br />
                <input type="submit" className="btn btn-success text-right " />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddService;
