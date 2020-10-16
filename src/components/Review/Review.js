import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const Review = () => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = (data) => {
    data.image = loggedInUser.image;
    fetch("https://creative-agency1.herokuapp.com/addreview", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Review added successfully");
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
          <DashboardHeader title="Review" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              defaultValue={loggedInUser.name}
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Your name"
              readOnly
            />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>This field is required</span>}
            <br />

            <input
              name="designation"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Company’s name, Designation"
            />
            {/* errors will return when field validation fails  */}
            {errors.designation && <span>This field is required</span>}
            <br />
            <textarea
              name="description"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Description"
            />
            {/* errors will return when field validation fails  */}
            {errors.description && <span>This field is required</span>}
            <br />

            <br />
            <input type="submit" value="Submit" className="btn btn-dark" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
