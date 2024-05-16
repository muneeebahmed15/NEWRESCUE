import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { _AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AddRecord = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    burroSource: "",
    animalName: "",
    // animalPhoto: null,
    animalGender: "",
    animalAge: "",
    microchip: "",
    freezeMark: "",
    ageNotes: "",
    animalYear: "",
    animalNotes: "",

    //care record
    vaccination: "",
    nextVaccination: "",
    vaccinationSerial: "",

    addRabies: "",
    nextRabies: "",
    rabiesSerial: "",

    farrier: "",
    nextFarrie: "",
    farrierName: "",
    otherFarrierName: "",

    deWorm: "",
    nextDeWorm: "",
    deWormBrand: "",

    sandClear: "",
    nextSandClear: "",
    healthCertificate: "",

    coggins: "",

    gelded: "",

    careNotes: "",

    //training

    touch: "",
    // touchPicture: null,

    brush: "",
    // brushPicture: null,

    halter: "",
    // halterPicture: null,

    leadRope: "",
    // leadRopePicture: null,

    leadInSmall: "",
    // leadInSmallPicture: null,

    leadInLarge: "",
    // leadInLargePicture: null,

    leadInPasture: "",
    // leadInPasturePicture: null,

    tie: "",
    // tiePicture: null,

    touchFeet: "",
    // touchFeetPicture: null,

    pickupFeet: "",
    // pickupFeetPicture: null,

    pickoutFeet: "",
    // pickoutFeetPicture: null,

    trailerLoad: "",
    // tailerLoadPicture: null,

    trainingNotes: "",

    //adoptionInformation
    adoptionDate: "",
    adopterName: "",
    adopterEmail: "",
    adopterPhone: "",
    adopterStreet: "",
    adopterCity: "",
    aopterState: "",
    adopterZip: "",
    adopterSource: "",

    brandInspection: "",
    halterColor: "",
    otherHalterColor: "",
    halterSize: "",
    adopterNotes: "",

    files: [],
  });

  const router = useNavigate();

  const handleChange = (e) => {
    // setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setData({ ...data, files: e.target.files });
  };

  console.log(data);

  const addrecord = async () => {
    setLoading(true);
    try {
      // const formData = new FormData();

      // Append data fields
      // Object.entries(data).forEach(([key, value]) => {
      //   if (key === "animalPhoto" || key === "touchPicture" || key === "brushPicture") {
      //     // Handle pictures
      //     if (value instanceof File) {
      //       // If it's a single file, append it directly
      //       formData.append(key, value);
      //     } else if (Array.isArray(value)) {
      //       // If it's an array of files, append each file with the appropriate key
      //       value.forEach((file, index) => {
      //         formData.append(`${key}[${index}]`, file);
      //       });
      //     }
      //   } else {
      //     // Append non-picture fields
      //     formData.append(key, value);
      //   }
      // });

      // // Append files array separately
      // data.files.forEach((file, index) => {
      //   formData.append(`files[${index}]`, file);
      // });
      // console.log(formData);
      const res = await axios.post("add-animal", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
      if (res.status === 200) {
        toast.success("Camper Added");
        router("/admin/animal-records");
      }
    } catch (error) {
      console.error("Error adding camper:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return { addrecord, loading, data, handleFile, handleChange };
};

export const AllAnimals = () => {
  const { auth } = _AuthContext();
  const authToken = auth && auth.token;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const allAnimals = async () => {
    setLoading(true);
    try {
      const res = await axios.get("get-animals");
      if (res.status === 200) {
        setData(res.data.user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      allAnimals();
    }
  }, [authToken]);

  return { data, loading };
};

export const SingleAnimal = (id) => {
  const { auth } = _AuthContext();
  const authToken = auth && auth?.token;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const singleanimal = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`single-animal/${id}`);
      setData(res.data.record);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      singleanimal();
    }
  }, [authToken]);

  return { loading, data, singleanimal };
};

export const UpdateAnimal = (id) => {
  const [loading, setLoading] = useState(false);
  const [updation, setUpdation] = useState(false);
  //   const [data, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [from, setFrom] = useState("empDet");

  //   console.log(from);

  const changeHandler = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const magic = () => {
    setFrom("updation");
    setUpdation(true);
  };

  // console.log(id);

  const updateAnimal = async () => {
    setLoading(true);
    try {
      const res = await axios.put(`update-animal/${id}`, updatedData);
      console.log(res.data.data);
      if (res.status === 200) {
        toast.success("Data updated successfully");
        SingleAnimal(id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    updation,
    from,
    setUpdatedData,
    updateAnimal,
    setUpdation,
    updatedData,
    setFrom,
    magic,
    changeHandler,
  };
};

export const useAddRecord = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    burroSource: "",
    animalName: "",
    // animalPhoto: null,
    animalGender: "",
    animalAge: "",
    microchip: "",
    freezeMark: "",
    ageNotes: "",
    animalYear: "",
    animalNotes: "",

    //care record
    vaccination: "",
    nextVaccination: "",
    vaccinationSerial: "",

    addRabies: "",
    nextRabies: "",
    rabiesSerial: "",

    farrier: "",
    nextFarrie: "",
    farrierName: "",
    otherFarrierName: "",

    deWorm: "",
    nextDeWorm: "",
    deWormBrand: "",

    sandClear: "",
    nextSandClear: "",
    healthCertificate: "",

    coggins: "",

    gelded: "",

    careNotes: "",

    //training

    touch: "",
    // touchPicture: null,

    brush: "",
    // brushPicture: null,

    halter: "",
    // halterPicture: null,

    leadRope: "",
    // leadRopePicture: null,

    leadInSmall: "",
    // leadInSmallPicture: null,

    leadInLarge: "",
    // leadInLargePicture: null,

    leadInPasture: "",
    // leadInPasturePicture: null,

    tie: "",
    // tiePicture: null,

    touchFeet: "",
    // touchFeetPicture: null,

    pickupFeet: "",
    // pickupFeetPicture: null,

    pickoutFeet: "",
    // pickoutFeetPicture: null,

    trailerLoad: "",
    // tailerLoadPicture: null,

    trainingNotes: "",

    //adoptionInformation
    adoptionDate: "",
    adopterName: "",
    adopterEmail: "",
    adopterPhone: "",
    adopterStreet: "",
    adopterCity: "",
    adopterState: "",
    adopterZip: "",
    adopterSource: "",
    sourceComment: "",

    brandInspection: "",
    halterColor: "",
    otherHalterColor: "",
    halterSize: "",
    adopterNotes: "",

    files: [],
  });

  const router = useNavigate();

  console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const newFiles = [...data.files]; // Create a copy of the existing files array
    newFiles.push(...e.target.files); // Append newly selected files to the copied array
    setData({ ...data, files: newFiles }); // Update the state with the new files array
  };

  const addRecord = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      // Append data fields
      Object.entries(data).forEach(([key, value]) => {
        if (key === "files") {
          // Skip files field
          return;
        }
        formData.append(key, value);
      });

      // Append files array separately
      data.files.forEach((file, index) => {
        formData.append(`file`, file);
      });

      const res = await axios.post("add-animal", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(res);
      if (res.status === 200) {
        toast.success("Camper Added");
        router("/admin/animal-records");
      }
    } catch (error) {
      console.error("Error adding camper:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return { addRecord, loading, data, handleFile, handleChange };
};
