import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image } from "antd";
import { EditOutlined, LeftOutlined, UploadOutlined } from "@ant-design/icons";
import { SingleAnimal, UpdateAnimal } from "../../../actions/addAnimal";
import InputField from "../../../UI/InputField";
import { formatCreatedAtDate } from "../../../UI/DateFormater";

const RecordDetail = () => {
  const { id } = useParams();
  const { data, loading, singleanimal } = SingleAnimal(id);
  const {
    loading: updateLoading,
    updateAnimal,
    setUpdation,
    updation,
    from,
    setFrom,
    setUpdatedData,
    updatedData,
    magic,
    changeHandler,
  } = UpdateAnimal(id);

  const againMagic = () => {
    setFrom("empDet");
    setUpdation(false);
    updateAnimal();
  };

  const files = updatedData?.files || [];
  // console.log("updatedData", updatedData);

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  return (
    <>
      <Link to={"/admin/animal-records"}>
        <Button type="primary" className="mb-5" size="large" icon={<LeftOutlined />}>
          Back
        </Button>
      </Link>

      <div className="d-flex justify-content-between align-items-center">
        <h2>Animal data</h2>

        <div>
          {!updation ? (
            <Button size="large" className="me-2" icon={<EditOutlined />} onClick={magic}>
              Edit
            </Button>
          ) : (
            <Button
              size="large"
              type="primary"
              icon={<UploadOutlined />}
              onClick={againMagic}
            >
              Update
            </Button>
          )}
        </div>
      </div>

      <hr />

      {updatedData && (
        <div className="row">
          <h4>Animal Information</h4>
          <InputField
            label={"Source of Burro"}
            type={"text"}
            name="burroSource"
            value={updatedData.burroSource}
            onChange={changeHandler}
            from={from}
          />
          {/* <InputField label={"Animal Name"} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Animal Name"}
            type={"text"}
            name={"animalName"}
            value={updatedData.animalName}
            onChange={changeHandler}
            from={from}
          />
          <InputField
            label={"Animal Gender"}
            type={"text"}
            name={"animalGender"}
            onChange={changeHandler}
            from={from}
            value={updatedData.animalGender}
          />
          <InputField
            label={"Animal Age"}
            type={"date"}
            name={"animalAge"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.animalAge)}
          />
          <InputField
            label={"Animal Year"}
            type={"text"}
            name={"animalYear"}
            onChange={changeHandler}
            from={from}
            value={updatedData.animalYear}
          />
          <InputField
            label={"Age Notes"}
            type={"text"}
            name={"ageNotes"}
            onChange={changeHandler}
            from={from}
            value={updatedData.ageNotes}
          />
          <InputField
            label={"Freeze Mark"}
            type={"text"}
            name={"freezeMark"}
            onChange={changeHandler}
            from={from}
            value={updatedData.freezeMark}
          />
          <InputField
            label={"Microchip #"}
            type={"text"}
            name={"microchip"}
            onChange={changeHandler}
            from={from}
            value={updatedData.microchip}
          />
          <InputField
            label={"Notes"}
            type={"text"}
            name={"ageNotes"}
            onChange={changeHandler}
            from={from}
            value={updatedData.ageNotes}
          />

          <h4 className="mt-2">Animal Care</h4>
          <InputField
            label={"Vaccination"}
            type={"date"}
            name={"vaccination"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.vaccination)}
          />
          <InputField
            label={"Next Vaccination"}
            type={"date"}
            name={"nextVaccination"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.nextVaccination)}
          />
          <InputField
            label={"Vaccination Serial  #"}
            type={"text"}
            name={"vaccinationSerial"}
            onChange={changeHandler}
            from={from}
            value={updatedData.vaccinationSerial}
          />
          <InputField
            label={"Rabies"}
            type={"date"}
            name={"addRabies"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.addRabies)}
          />
          <InputField
            label={"Next Rabies"}
            type={"date"}
            name={"nextRabies"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.nextRabies)}
          />
          <InputField
            label={"Rabies Serial #"}
            type={"text"}
            name={"rabiesSerial"}
            onChange={changeHandler}
            from={from}
            value={updatedData.rabiesSerial}
          />
          <InputField
            label={"Farrier"}
            type={"date"}
            name={"farrier"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.farrier)}
          />
          <InputField
            label={"Next Farrier"}
            type={"date"}
            name={"nextFarrie"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.farrier)}
          />
          {updatedData.farrierName !== "Other" ? (
            <InputField
              label={"Farrier Name"}
              type={"date"}
              name={"farrierName"}
              onChange={changeHandler}
              from={from}
              value={updatedData.farrierName}
            />
          ) : (
            <InputField
              label={"Farrier Name"}
              type={"date"}
              name={"otherFarrierName"}
              onChange={changeHandler}
              from={from}
              value={updatedData.otherFarrierName}
            />
          )}
          <InputField
            label={"De Worm"}
            type={"date"}
            name={"deWorm"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.deWorm)}
          />
          <InputField
            label={"Next De Worm"}
            type={"date"}
            name={"nextDeWorm"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.deWorm)}
          />
          <InputField
            label={"De Worm Brand"}
            type={"date"}
            name={"deWormBrand"}
            onChange={changeHandler}
            from={from}
            value={updatedData.deWormBrand}
          />
          <InputField
            label={"Sand Clear"}
            type={"date"}
            name={"sandClear"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.sandClear)}
          />
          <InputField
            label={"Next Sand Clear"}
            type={"date"}
            name={"nextSandClear"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.nextSandClear)}
          />
          <InputField
            label={"Health Certificate"}
            type={"text"}
            name={"healthCertificate"}
            onChange={changeHandler}
            from={from}
            value={updatedData.healthCertificate}
          />
          <InputField
            label={"Coggins"}
            type={"text"}
            name={"coggins"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.coggins)}
          />
          <InputField
            label={"Gelded"}
            type={"text"}
            name={"gelded"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.gelded)}
          />
          <InputField
            label={"Notes"}
            type={"text"}
            name={"careNotes"}
            onChange={changeHandler}
            from={from}
            value={updatedData.careNotes}
          />

          <h4>Training Notes</h4>
          <InputField
            label={"Tuch"}
            type={"text"}
            name={"touch"}
            onChange={changeHandler}
            from={from}
            value={updatedData.touch}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Brush"}
            type={"text"}
            name={"brush"}
            onChange={changeHandler}
            from={from}
            value={updatedData.brush}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Halter"}
            type={"text"}
            name={"halter"}
            onChange={changeHandler}
            from={from}
            value={updatedData.halter}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Lead Rope"}
            type={"text"}
            name={"leadRope"}
            onChange={changeHandler}
            from={from}
            value={updatedData.leadRope}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Lead In Small"}
            type={"text"}
            name={"leadInSmall"}
            onChange={changeHandler}
            from={from}
            value={updatedData.leadInSmall}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Lead In Large"}
            type={"text"}
            name={"leadInLarge"}
            onChange={changeHandler}
            from={from}
            value={updatedData.leadInLarge}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Lead In Pasture"}
            type={"text"}
            name={"leadInPasture"}
            onChange={changeHandler}
            from={from}
            value={updatedData.leadInPasture}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Tie"}
            type={"text"}
            name={"tie"}
            onChange={changeHandler}
            from={from}
            value={updatedData.tie}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Touch Feet"}
            type={"text"}
            name={"touchFeet"}
            onChange={changeHandler}
            from={from}
            value={updatedData.touchFeet}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Pick Up Feet"}
            type={"text"}
            name={"pickupFeet"}
            onChange={changeHandler}
            from={from}
            value={updatedData.pickupFeet}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Pick Out Feet"}
            type={"text"}
            name={"pickoutFeet"}
            onChange={changeHandler}
            from={from}
            value={updatedData.pickoutFeet}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Tailer Load"}
            type={"text"}
            name={"trailerLoad"}
            onChange={changeHandler}
            from={from}
            value={updatedData.trailerLoad}
          />
          {/* <InputField label={""} type ={} name={""} onChange={changeHandler} from={from} value={updatedData.}/> */}
          <InputField
            label={"Notes"}
            type={"text"}
            name={"trainingNotes"}
            onChange={changeHandler}
            from={from}
            value={updatedData.trainingNotes}
          />

          <h4>Adoption Information</h4>
          <InputField
            label={"Adoption Date"}
            type={"date"}
            name={"adoptionDate"}
            onChange={changeHandler}
            from={from}
            value={formatCreatedAtDate(updatedData.adoptionDate)}
          />
          <InputField
            label={"Adoption Name"}
            type={"text"}
            name={"adopterName"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterName}
          />
          <InputField
            label={"Adoption Email"}
            type={"text"}
            name={"adopterEmail"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterEmail}
          />
          <InputField
            label={"Adoption Phone"}
            type={"number"}
            name={"adopterPhone"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterPhone}
          />
          <InputField
            label={"Adoption Street"}
            type={"text"}
            name={"adopterStreet"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterStreet}
          />
          <InputField
            label={"Adoption City"}
            type={"text"}
            name={"adopterCity"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterCity}
          />
          <InputField
            label={"Adoption State"}
            type={"text"}
            name={"aopterState"}
            onChange={changeHandler}
            from={from}
            value={updatedData.aopterState}
          />
          <InputField
            label={"Adoption Zip"}
            type={"number"}
            name={"adopterZip"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterZip}
          />
          <InputField
            label={"Adopter Source"}
            type={"text"}
            name={"adopterSource"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterSource}
          />
          <InputField
            label={"Brand Inspection"}
            type={"text"}
            name={"brandInspection"}
            onChange={changeHandler}
            from={from}
            value={updatedData.brandInspection}
          />
          {updatedData.halterColor !== "Other" ? (
            <InputField
              label={"Halter Color"}
              type={"text"}
              name={"halterColor"}
              onChange={changeHandler}
              from={from}
              value={updatedData.halterColor}
            />
          ) : (
            <InputField
              label={"Halter Color"}
              type={"text"}
              name={"otherHalterColor"}
              onChange={changeHandler}
              from={from}
              value={updatedData.otherHalterColor}
            />
          )}
          <InputField
            label={"Halter Size"}
            type={"text"}
            name={"halterSize"}
            onChange={changeHandler}
            from={from}
            value={updatedData.halterSize}
          />
          <InputField
            label={"Notes"}
            type={"text"}
            name={"adopterNotes"}
            onChange={changeHandler}
            from={from}
            value={updatedData.adopterNotes}
          />
        </div>
      )}

      <div className="row mt-2">
        {files?.map((x, index) => (
          <div className="col-md-3" key={index}>
            <Image
              // width={250}
              height={200}
              src={`http://localhost:5000/${x}`}
              alt={`File ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecordDetail;
