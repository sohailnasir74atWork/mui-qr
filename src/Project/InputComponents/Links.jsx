import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ErrorBar from "../Error";

const Links = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings, handleComplete, isMobile } = prop;
  const [value, setValue] = useState("");
  const [qrName, setQrName] = useState("");
  const [width, setWidth] = useState(qrCodeSettings.size.width);
  const [height, setHeight] = useState(qrCodeSettings.size.height);
  const [urlError, setUrlError] = useState("");
  const [nameError, setNameError] = useState("");
  const [widthError, setWidthError] = useState("");
  const [heightError, setHeightError] = useState("");

  useEffect(() => {
    setValue(qrCodeSettings.inputData.url);
    setQrName(qrCodeSettings.qrName);
    setWidth(qrCodeSettings.size.width);
    setHeight(qrCodeSettings.size.height);
  }, [qrCodeSettings]);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
    setUrlError("");
  };

  const handleQRNameChange = (event) => {
    const updatedQRNameValue = event.target.value;
    setQrName(updatedQRNameValue);
    setNameError("");
  };

  const handleWidthChange = (event) => {
    const updatedWidth = event.target.value;
    setWidth(updatedWidth);
    setWidthError("");
  };

  const handleHeightChange = (event) => {
    const updatedHeight = event.target.value;
    setHeight(updatedHeight);
    setHeightError("");
  };

  const handleSubmit = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = urlRegex.test(value);
    const isQrNameValid = qrName.trim() !== "";

    // Validate width and height
    if (width.trim() < 30) {
      setWidthError("Width should not be less than 30");
    } else {
      setWidthError("");
    }

    if (height.trim() < 30) {
      setHeightError("Height should not be less than 30");
    } else {
      setHeightError("");
    }

    // Set errors based on validation results
    if (!isValidUrl || value.trim() === "") {
      setUrlError("Please enter a valid URL");
    } else {
      setUrlError("");
    }

    if (!isQrNameValid) {
      setNameError("Name should not be empty");
    } else {
      setNameError("");
    }

    // If all validations pass, update the parent component's state
    if (
      isValidUrl &&
      isQrNameValid &&
      widthError === "" &&
      heightError === ""
    ) {
      setQrCodeSettings((prevSettings) => ({
        ...prevSettings,
        inputData: { ...prevSettings.inputData, url: value },
        qrName: qrName.trim(),
        size: {
          width: width.trim(),
          height: height.trim(),
        },
      }));
      handleComplete();
    }
  };

  return (
    <div>
      {urlError && <ErrorBar message={urlError} />}
      {nameError && <ErrorBar message={nameError} />}
      {widthError && <ErrorBar message={widthError} />}
      {heightError && <ErrorBar message={heightError} />}
      <div className="heading-container">
        <span className="heading-2">Fill Out the QR Code's Content</span>
      </div>
      <TextField
        required
        id="outlined-required"
        label="Write Your QR Name"
        value={qrName}
        onChange={handleQRNameChange}
        style={{ width: "100%" }}
      />
      <br />
      <br />
      <TextField
        required
        id="outlined-required"
        label="Submit Url Here"
        value={value}
        onChange={handleInputChange}
        style={{ width: "100%" }}
      />
      <p>Your QR code will open this URL</p>

      <br />
      <TextField
        id="outlined-number"
        label="Width"
        defaultValue={qrCodeSettings.size.width}
        type="number"
        onChange={handleWidthChange}
        error={widthError !== ""}
        helperText={widthError}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginRight: "10px" }}
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
        defaultValue={qrCodeSettings.size.height}
        type="number"
        onChange={handleHeightChange}
        error={heightError !== ""}
        helperText={heightError}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleSubmit} className="button">
        Submit
      </Button>
    </div>
  );
};

export default Links;