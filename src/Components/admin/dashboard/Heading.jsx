import React from "react";
import Cards from "../../../UI/Cards";
import { AllAnimals } from "../../../actions/addAnimal";
import { GetUsers } from "../../../actions/authentication";

const Heading = () => {
  const { data, loading: animalsLoading } = AllAnimals();
  const { users, loading: usersLoading } = GetUsers();

  return (
    <div className="row">
      <div className="col-md-4">
        <Cards
          heading={"Total Staff"}
          number={usersLoading ? "loading..." : users?.length}
        />
      </div>

      <div className="col-md-4">
        <Cards
          className="mx-2"
          heading={"Total Animals"}
          number={animalsLoading ? "loading..." : data?.length}
        />
      </div>

      <div className="col-md-4">
        <Cards
          heading={"Registered Today"}
          number={
            animalsLoading
              ? "loading..."
              : data?.filter(
                  (x) =>
                    x.createdAt?.slice(0, 10) === new Date().toISOString().slice(0, 10)
                ).length
          }
        />
      </div>
    </div>
  );
};

export default Heading;
