import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Links = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings } = prop;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (qrCodeSettings.clearInput) {
      setValue("");
    }
  }, [qrCodeSettings.clearInput]);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);

    // Update the qrCodeSettings state as well
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      inputData: { ...prevSettings.inputData, url: updatedValue }
    }));
  };

  return (
    <div className="input-container-home">
      <TextField
        required
        id="outlined-required"
        label="Submit Url Here"
        value={value}
        onChange={handleInputChange} // This function now updates both states
        style={{width:"100%"}}
      />
      <p>Your QR code will open this URL</p>
    </div>
  );
};

export default Links;
