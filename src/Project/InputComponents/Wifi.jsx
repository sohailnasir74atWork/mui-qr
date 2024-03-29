import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Grid,
  Typography,
  Slider,
  FormControlLabel,
} from "@mui/material";
import ErrorBar from "../Error";
import { AntSwitch } from "../NewQR/Options/ColorHelper.jsx/GradientColorPicker";
import { Password } from "@mui/icons-material";
// Assuming countries data is imported or defined elsewhere in your project
const network = ["WPA/WPA2", "WEP", "No Encryption"];
const Wifi = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings, handleNext } = prop;
  const [selectedNetwork, setSelectedNetwork] = useState(network[0]); // Default to the first country's dial code
  const [networkName, setNetworkName] = useState("");
  const [isHide, setIsHide] = useState("");
  const [networkType, setNetworkType] = useState("");
  const [password, setPassword] = useState("");
  const [qrName, setQrName] = useState(qrCodeSettings.qrName);
  const [size, setSize] = useState(qrCodeSettings.size.width);
  const [nameError, setNameError] = useState("");
  const toggleButton = () => {
    setIsHide(!isHide);
  };

  const handleSubmit = () => {
    if (networkName.length < 1) {
      setNameError("Please enter a valid Network Name");
      return;
    }
  
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      inputData: {
        ...prevSettings.inputData,
        url: { ...prevSettings.inputData.url, value: null },
        text: { ...prevSettings.inputData.text, value: null },
        mail: { ...prevSettings.inputData.mail, email: null, message: null },
        whatsapp: { ...prevSettings.inputData.whatsapp, number: null, message: null },
        message: { ...prevSettings.inputData.message, number: null, message: null },
        call: { ...prevSettings.inputData.call, number: null },
        wifi: {
          ...prevSettings.inputData.wifi,
          networkName: networkName,
          networkType: selectedNetwork,
          password: password,
          isHide: isHide,
        },
      },
      qrName: qrName.trim(),
      size: { width: size, height: size },
    }));
  
    handleNext();
  };
  
  return (
    <div>
      {nameError && <ErrorBar message={nameError} />}
      <div className="heading-container">
        <span className="heading-2">Create Your Phone Call QR Code</span>
      </div>
      <TextField
        required
        label="QR Name"
        value={qrName}
        onChange={(e) => setQrName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <br />
      <br />

      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={4}>
          <TextField
            required
            label="Network Name"
            value={networkName}
            onChange={(e) => setNetworkName(e.target.value)}
            fullWidth
            error={!!nameError}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            label="Network Type"
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            fullWidth
          >
            {network.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
      <br />
      <div className="toggle-button" style={{ justifyContent: "left" }}>
        <FormControlLabel
          control={<AntSwitch checked={isHide} onChange={toggleButton} />}
          label=""
        />
        <span className="text-switch">Hide</span>
      </div>
      <br />
      <Typography id="input-slider" gutterBottom>
        QR Code Size
      </Typography>
      <Slider
        value={size}
        onChange={(e, newValue) => setSize(newValue)}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
        min={30}
        max={1000}
        className="slider-select"
      />
      <br />
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: 20 }}
      >
        Generate QR Code
      </Button>
    </div>
  );
};

export default Wifi;