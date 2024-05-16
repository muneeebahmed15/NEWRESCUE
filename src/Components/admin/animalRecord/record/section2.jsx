import React from "react";
import InputField from "../../../../UI/InputField";

const Section2 = ({ data, handleChange }) => {
  return (
    <div className="row">
      <h3>Care Record</h3>

      {/* vaccination */}
      <InputField
        label={"Vaccination Date"}
        type={"date"}
        placeholder={"Vaccination Date"}
        name={"vaccination"}
        value={data.vaccination}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Next Vaccination Due"}
        type={"date"}
        placeholder={"Next Vaccination Due"}
        name={"nextVaccination"}
        value={data.nextVaccination}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Vaccination Serial #"}
        type={"text"}
        placeholder={"Vaccination Serial #"}
        name={"vaccinationSerial"}
        value={data.vaccinationSerial}
        onChange={handleChange}
        from={"col-3"}
      />

      {/* rabies */}
      <InputField
        label={"Rabies"}
        type={"date"}
        placeholder={"Add Rabies"}
        name={"addRabies"}
        value={data.addRabies}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Next Rabies Due"}
        type={"date"}
        placeholder={"Next Rabies Due"}
        name={"nextRabies"}
        value={data.nextRabies}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Rabies Serial #"}
        type={"text"}
        placeholder={"Vaccination Serial #"}
        name={"rabiesSerial"}
        value={data.rabiesSerial}
        onChange={handleChange}
        from={"col-3"}
      />

      {/* farrier */}
      <InputField
        label={"Farrier"}
        type={"date"}
        placeholder={"Farrier"}
        name={"farrier"}
        value={data.farrier}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Next Due Farrier"}
        type={"date"}
        placeholder={"Next Due Farrier"}
        name={"nextFarrie"}
        value={data.nextFarrie}
        onChange={handleChange}
        from={"col-3"}
      />

      <div className="col-md-4 px-2 mt-2">
        <label className="form-label">Farrier Name</label>
        <select
          className="form-select"
          name="farrierName"
          value={data.farrierName}
          onChange={handleChange}
          size="large"
        >
          <option defaultValue>Choose Farrier Name</option>
          <option value="Volunteer">Ross Keller</option>
          <option value="Board Member">Megan Legacy</option>
          <option value="Board Member">Adriane Temple</option>
          <option value="Board Member">Makendra Silverman</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {data.farrierName === "Other" && (
        <InputField
          label={"Other Farrier Name"}
          placeholder={"Farrier Name"}
          type={"text"}
          name={"otherFarrierName"}
          value={data.otherFarrierName}
          onChange={handleChange}
          from={"col-3"}
        />
      )}

      {/* de-worm */}
      <InputField
        label={"De-Worm"}
        type={"date"}
        placeholder={"De-Worm"}
        name={"deWorm"}
        value={data.deWorm}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Next De-Worm Due"}
        type={"date"}
        placeholder={"Next De-Worm Due"}
        name={"nextDeWorm"}
        value={data.nextDeWorm}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Brand of Dewormer "}
        type={"text"}
        placeholder={"Brand of Dewormer "}
        name={"deWormBrand"}
        value={data.deWormBrand}
        onChange={handleChange}
        from={"col-3"}
      />

      {/* sand clear */}
      <InputField
        label={"Sand Clear"}
        type={"date"}
        placeholder={"Sand Clear"}
        name={"sandClear"}
        value={data.sandClear}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Next Sand Clear Due"}
        type={"date"}
        placeholder={"Next Sand Clear Due"}
        name={"nextSandClear"}
        value={data.nextSandClear}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Health Certificate"}
        type={"date"}
        placeholder={"Health Certificate"}
        name={"healthCertificate"}
        value={data.healthCertificate}
        onChange={handleChange}
        from={"col-3"}
      />

      <InputField
        label={"Coggins"}
        type={"date"}
        placeholder={"Coggins"}
        name={"coggins"}
        value={data.coggins}
        onChange={handleChange}
      />

      <InputField
        label={"Gelded"}
        type={"date"}
        placeholder={""}
        name={"gelded"}
        value={data.gelded}
        onChange={handleChange}
      />

      <InputField
        label={"Notes"}
        type={"text"}
        placeholder={"Notes"}
        name={"careNotes"}
        value={data.careNotes}
        onChange={handleChange}
      />
    </div>
  );
};

export default Section2;
