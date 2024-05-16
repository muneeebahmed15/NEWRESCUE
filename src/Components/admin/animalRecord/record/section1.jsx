import React from "react";
import InputField from "../../../../UI/InputField";

const Section1 = ({ data, handleChange, handleFile }) => {
  return (
    <div className="row">
      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Source of Animal</label> <br />
        <select
          className="form-select"
          name="burroSource"
          value={data.burroSource}
          onChange={handleChange}
        >
          <option value="">Choose Source</option>
          <option value="BLM">BLM</option>
          <option value="Re Home">Re Home</option>
          <option value="Sale Barn">Sale Barn</option>
          <option value="Purchase">Purchase</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <InputField
        label={"Animal Name"}
        type={"text"}
        placeholder={"Animal Name"}
        name={"animalName"}
        value={data.animalName}
        onChange={handleChange}
      />

      <InputField
        label={"Animal Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Animal Gender</label> <br />
        <select
          className="form-select"
          name="animalGender"
          value={data.animalGender}
          onChange={handleChange}
        >
          <option value="">Choose Gender</option>
          <option value="Female">Female</option>
          <option value="Male-Intact">Male-Intact</option>
          <option value="Male-Gelded">Male-Gelded</option>
        </select>
      </div>

      <InputField
        label={"Animal Age"}
        type={"date"}
        placeholder={""}
        name={"animalAge"}
        value={data.animalAge}
        onChange={handleChange}
      />

      <InputField
        label={"Animal Birth Year"}
        type={"number"}
        placeholder={"Animal Birth Year"}
        name={"animalYear"}
        value={data.animalYear}
        onChange={handleChange}
      />

      <InputField
        label={"Age Notes"}
        type={"text"}
        placeholder={"Age Notes"}
        name={"ageNotes"}
        value={data.ageNotes}
        onChange={handleChange}
      />

      <InputField
        label={"Freeze Mark"}
        type={"text"}
        placeholder={"Freeze Mark"}
        name={"freezeMark"}
        value={data.freezeMark}
        onChange={handleChange}
      />

      <InputField
        label={"Microchip #"}
        type={"number"}
        placeholder={"Enter 15 digit code"}
        name={"microchip"}
        value={data.microchip}
        onChange={handleChange}
      />

      <InputField
        label={"Notes"}
        type={"text"}
        placeholder={"Notes"}
        name={"animalNotes"}
        value={data.animalNotes}
        onChange={handleChange}
      />
    </div>
  );
};

export default Section1;
