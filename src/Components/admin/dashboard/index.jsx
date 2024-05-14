import React from "react";
import Heading from "./Heading";
import Registration from "./Registration";

const Dashboard = () => {
  return (
    <>
      <Heading />

      <Registration
        heading={"Add Staff"}
        link={"/admin/employees/add"}
        btnTitle={"Add Staff"}
        link2={"/admin/employees"}
        btnTitle2={"All Staff"}
      />

      <Registration
        heading={"Add Animal"}
        link={"/admin/animal-records/add"}
        btnTitle={"Add Animal"}
        link2={"/admin/animal-records"}
        btnTitle2={"All Animals"}
      />
    </>
  );
};

export default Dashboard;
