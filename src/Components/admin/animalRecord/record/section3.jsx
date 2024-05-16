import React from "react";
import InputField from "../../../../UI/InputField";
import { Input } from "antd";

const Section3 = ({ data, handleChange, handleFile }) => {
  return (
    <div className="row">
      <h3>Training</h3>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Touch/Take Reward</label>
        <select
          className="form-select"
          name="touch"
          value={data.touch}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Touch/Take Reward Photo"}
        type={"file"}
        placeholder={""}
        // picture="abc"
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Brush/Groom</label>
        <select
          className="form-select"
          name="brush"
          value={data.brush}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Brush/Groom Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Halter</label>
        <select
          className="form-select"
          name="halter"
          value={data.halter}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Halter Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Lead Rope On</label>
        <select
          className="form-select"
          name="leadRope"
          value={data.leadRope}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Lead Rope On Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Lead in Small Area</label>
        <select
          className="form-select"
          name="leadInSmall"
          value={data.leadInSmall}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Lead Small Area Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Lead in Large Area</label>
        <select
          className="form-select"
          name="leadInLarge"
          value={data.leadInLarge}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Lead Large Area Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Lead in Pasture(outside pen)</label>
        <select
          className="form-select"
          name="leadInPasture"
          value={data.leadInPasture}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Lead in Pasture(outside pen)"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      {/* <InputField label={"Lead Pasture Photo"} type={"file"} placeholder={""} name={"leadPasturePicture"} value={data.leadPasturePicture} onChange={handleChange} /> */}

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Tie</label>
        <select
          className="form-select"
          name="tie"
          value={data.tie}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Tie Photo"}
        type={"file"}
        placeholder={""}
        picture="abc"
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Touch Feet</label>
        <select
          className="form-select"
          name="touchFeet"
          value={data.touchFeet}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Touch Feet Photo"}
        type={"file"}
        placeholder={""}
        // picture="abc"
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Pick Up feet</label>
        <select
          className="form-select"
          name="pickupFeet"
          value={data.pickupFeet}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Pick Up feet Photo"}
        type={"file"}
        placeholder={""}
        picture="abc"
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Pick Out feet</label>
        <select
          className="form-select"
          name="pickoutFeet"
          value={data.pickoutFeet}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Pick Out Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Trailer Load</label>
        <select
          className="form-select"
          name="trailerLoad"
          value={data.trailerLoad}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Working">Working</option>
        </select>
      </div>

      <InputField
        label={"Trailer Load Photo"}
        type={"file"}
        placeholder={""}
        name={"files"}
        onChange={handleFile}
      />

      <div className="col-12 rightSpace mt-2">
        <label className="form-label">Notes</label>
        <Input
          size="large"
          type="text"
          placeholder="Notes"
          name="trainingNotes"
          value={data.trainingNotes}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Section3;
