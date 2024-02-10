import React, { useEffect, useState } from "react";
import { Button, TextField, Slider } from "@mui/material";
import ErrorBar from "../Error";

const Links = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings, handleComplete } = prop;
  const [value, setValue] = useState(qrCodeSettings.inputData.url);
  const [qrName, setQrName] = useState(qrCodeSettings.qrName);
  const [size, setSize] = useState(qrCodeSettings.size.width); // Assuming width and height are initially the same
  const [urlError, setUrlError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    setValue(qrCodeSettings.inputData.url);
    setQrName(qrCodeSettings.qrName);
    setSize(qrCodeSettings.size.width); // Sync with external updates
  }, [qrCodeSettings]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setUrlError("");
  };

  const handleQRNameChange = (event) => {
    setQrName(event.target.value);
    setNameError("");
  };

  const handleSizeChange = (_, newValue) => {
    setSize(newValue);
  };

  const handleSubmit = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(value)) {
      setUrlError("Please enter a valid URL");
      return;
    }
    if (!qrName.trim()) {
      setNameError("Name should not be empty");
      return;
    }

    // Assuming validation for size is not needed as the slider controls the range
    setQrCodeSettings({
      ...qrCodeSettings,
      inputData: { ...qrCodeSettings.inputData, url: value },
      qrName: qrName.trim(),
      size: { width: size, height: size }, // Apply the size to both width and height
    });
    handleComplete();
  };

  return (
    <div>
      {urlError && <ErrorBar message={urlError} />}
      {nameError && <ErrorBar message={nameError} />}
      <div className="heading-container">
        <span className="heading-2">Fill Out the QR Code's Content</span>
      </div>
      <TextField
        required
        label="Write Your QR Name"
        value={qrName}
        onChange={handleQRNameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        required
        label="Submit URL Here"
        value={value}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <p>Your QR code will open this URL.</p>

      {/* Removed Width and Height TextFields */}
      <br/>
      <span className="heading-3">Control Size</span>
      <br/>
      <Slider
        value={size}
        onChange={handleSizeChange}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
        min={30}
        max={1000}
        style={{ marginTop: 10, marginBottom: 10, width:'50%' }}
      />
      <br/>

      <Button variant="contained" onClick={handleSubmit} style={{ marginTop: 20 }}>
        Submit
      </Button>
    </div>
  );
};

export default Links;
