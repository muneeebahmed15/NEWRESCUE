import { Card } from "antd";
import React from "react";

const index = ({ heading, number, className }) => {
  return (
    <Card
      className={className}
      style={{
        // width: 300,
        borderColor: "black",
      }}
    >
      <h2>{heading}</h2>
      <h5>{number}</h5>
    </Card>
  );
};

export default index;
