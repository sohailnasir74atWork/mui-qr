import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ErrorBar from "../Error";

const Links = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings, handleComplete, isMobile } = prop;
  const [value, setValue] = useState("");
  const [qrName, setQrName] = useState("");
  const [urlError, setUrlError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    setValue(qrCodeSettings.inputData.url)
    setQrName(qrCodeSettings.qrName)


  }, [qrCodeSettings]);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
    setUrlError(""); // Clear the URL error when the input changes
  };

  const handleQRNameChange = (event) => {
    const updatedQRNameValue = event.target.value;
    setQrName(updatedQRNameValue);
    setNameError(""); // Clear the Name error when the input changes
  };

  const handleSubmit = () => {
    // Validate URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = urlRegex.test(value);
  
    // Validate QR Name
    const isQrNameValid = qrName.trim() !== '';
  
    // Set errors based on validation results
    if (!isValidUrl || value.trim() === '') {
      setUrlError('Please enter a valid URL');
    } else {
      setUrlError('');
    }
  
    if (!isQrNameValid) {
      setNameError('Name should not be empty');
    } else {
      setNameError('');
    }
  
    // If both URL and QR Name are valid, update the settings
    if (isValidUrl && isQrNameValid) {
      setQrCodeSettings((prevSettings) => ({
        ...prevSettings,
        inputData: { ...prevSettings.inputData, url: value },
        qrName: qrName.trim()
      }));
      handleComplete();
    }
  };
  

  return (
    <div className="input-container-home">
      {urlError && <ErrorBar message={urlError} />}
      {nameError && <ErrorBar message={nameError} />}
      <h3 className="heading-2">Fill Out the QR Code's Content</h3>
           <TextField
        required
        id="outlined-required"
        label="Write Your QR Name"
        value={qrName}
        onChange={handleQRNameChange}
        style={{ width: "100%" }}
      />
      <br/>
      <br/>
      <TextField
        required
        id="outlined-required"
        label="Submit Url Here"
        value={value}
        onChange={handleInputChange}
        style={{ width: "100%" }}
      />
      <p>Your QR code will open this URL</p>
      
      <br/>
      <TextField
          id="outlined-number"
          label="Width"
          defaultValue={300}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{marginRight:'10px'}}
        />
       {isMobile && (
  <>
    <br />
    <br />
  </>
)}

        <TextField
          id="outlined-number"
          label="Height"
          defaultValue={300}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br/>
      <br/>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Links;
