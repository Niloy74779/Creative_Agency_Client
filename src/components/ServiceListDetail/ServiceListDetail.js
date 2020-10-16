import React from "react";
import { Dropdown } from "react-bootstrap";

const ServiceListDetail = ({ service, changeStatus }) => {
  const { _id, name, email, service: serviceName, detail, status } = service;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{detail}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {status.toUpperCase()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {status !== "pending" && (
              <Dropdown.Item onClick={() => changeStatus(_id, "pending")}>
                Pending
              </Dropdown.Item>
            )}
            {status !== "ongoing" && (
              <Dropdown.Item onClick={() => changeStatus(_id, "ongoing")}>
                Ongoing
              </Dropdown.Item>
            )}
            {status !== "done" && (
              <Dropdown.Item onClick={() => changeStatus(_id, "done")}>
                Done
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default ServiceListDetail;
