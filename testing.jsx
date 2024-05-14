import React, { useState } from "react";
import axios from "axios";

const Testing = () => {
  const [fileInputs, setFileInputs] = useState([null, null, null]);

  console.log(fileInputs);

  // Handler for file input change
  const handleFileInputChange = (event, index) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = event.target.files[0];
    setFileInputs(newFileInputs);
  };

  // Handler for form submission
  const handleSubmit = async () => {
    const formData = new FormData();
    fileInputs.forEach((file, index) => {
      if (file) {
        formData.append(`file`, file);
      }
    });

    // Log FormData object
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post("multiple-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileInputChange(e, 0)} />
      <input type="file" onChange={(e) => handleFileInputChange(e, 1)} />
      {/* <input type="file" onChange={(e) => handleFileInputChange(e, 2)} />
      <input type="file" onChange={(e) => handleFileInputChange(e, 3)} /> */}
      <button onClick={handleSubmit}>Upload Files</button>
    </div>
  );
};

export default Testing;
