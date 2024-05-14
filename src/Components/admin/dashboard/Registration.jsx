import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Registration = ({ heading, link, btnTitle, link2, btnTitle2 }) => {
  return (
    <Card
      className="mt-3"
      style={{
        borderColor: "grey",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h3>{heading}</h3>

        <div className="d-flex ">
          <Link to={link2}>
            <Button className="me-2">{btnTitle2}</Button>
          </Link>

          <Link to={link}>
            <Button type="primary">{btnTitle}</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Registration;
