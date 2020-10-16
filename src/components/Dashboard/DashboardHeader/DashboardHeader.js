import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import { UserContext } from "../../../App";

const DashboardHeader = ({ title }) => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="d-flex justify-content-between mb-5">
      <h3>{title}</h3>
      <h5>
        <Image
          src={loggedInUser.image}
          roundedCircle
          style={{ width: "15%" }}
        />
        {loggedInUser.name}
      </h5>
    </div>
  );
};

export default DashboardHeader;
