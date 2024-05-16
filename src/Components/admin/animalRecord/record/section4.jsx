import { Input } from "antd";
import React from "react";

const Section4 = ({ data, handleChange }) => {
  return (
    <div className="row">
      <h3>Adoption Information</h3>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adoption Date</label>
        <Input
          size="large"
          type="date"
          placeholder=""
          name="adoptionDate"
          value={data.adoptionDate}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter Name</label>
        <Input
          size="large"
          type="text"
          placeholder="Adopter Name"
          name="adopterName"
          value={data.adopterName}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter Email</label>
        <Input
          size="large"
          type="text"
          placeholder="Adopter Email"
          name="adopterEmail"
          value={data.adopterEmail}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter Phone</label>
        <Input
          size="large"
          type="number"
          placeholder="Adopter Phone"
          name="adopterPhone"
          value={data.adopterPhone}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter Street</label>
        <Input
          size="large"
          type="text"
          placeholder="Adopter Street Address"
          name="adopterStreet"
          value={data.adopterStreet}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter City</label>
        <Input
          size="large"
          type="text"
          placeholder="Adopter City"
          name="adopterCity"
          value={data.adopterCity}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter State</label>
        <select
          className="form-select"
          name="adopterState"
          value={data.adopterState}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Adopter ZIP</label>
        <Input
          size="large"
          type="number"
          placeholder="Adopter ZIP"
          name="adopterZip"
          value={data.adopterZip}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Source of Adopter</label>
        <select
          className="form-select"
          name="adopterSource"
          value={data.adopterSource}
          onChange={handleChange}
        >
          <option selected>Choose Source of Adopter</option>
          <option value="Referral">Referral</option>
          <option value="Facebook">Facebook</option>
          <option value="Website">Website</option>
          <option value="Previous Adopter">Previous Adopter</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {data.adopterSource === "Other" && (
        <div className="col-md-6 rightSpace mt-2">
          <input
            className="form-control mt-2"
            type="text"
            // id="sourceComment"
            name="sourceComment"
            value={data.sourceComment}
            onChange={handleChange}
            placeholder="Type Source"
          />
        </div>
      )}

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Brand Inspection</label>
        <select
          className="form-select"
          name="brandInspection"
          value={data.brandInspection}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Yes">Sheduled</option>
          <option value="No">Completed</option>
        </select>
      </div>

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Halter Color Requested</label>
        <select
          className="form-select"
          name="halterColor"
          value={data.halterColor}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Black with Tan">Black with Tan</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {data.halterColor === "Other" && (
        <InputField
          label={"Add Color"}
          type={"text"}
          placeholder={"Add Color"}
          name={"otherHalterColor"}
          value={data.otherHalterColor}
          onChange={handleChange}
        />
      )}

      <div className="col-md-6 rightSpace mt-2">
        <label className="form-label">Halter Size</label>
        <select
          className="form-select"
          name="halterSize"
          value={data.halterSize}
          onChange={handleChange}
        >
          <option defaultValue>Choose option</option>
          <option value="Weanling">Weanling</option>
          <option value="Yearling">Yearling</option>
          <option value="Small">Small</option>
        </select>
      </div>

      <div className="col-12 rightSpace mt-2">
        <label className="form-label">Notes</label>
        <Input
          size="large"
          type="text"
          placeholder="Notes"
          name="adopterNotes"
          value={data.adopterNotes}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Section4;
