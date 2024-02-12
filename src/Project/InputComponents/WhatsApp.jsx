import React, { useState } from "react";
import { Button, TextField, MenuItem, Grid, Typography, Slider } from "@mui/material";
import ErrorBar from "../Error";
import { isValidPhoneNumber } from 'libphonenumber-js';

// Assuming countries data is imported or defined elsewhere in your project
import { countries } from "./CountriesList";
const WhatsApp = ({ prop }) => {
    const { setQrCodeSettings, qrCodeSettings, handleNext } = prop;
    const [selectedCountry, setSelectedCountry] = useState(countries[0].dial_code); // Default to the first country's dial code
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [qrName, setQrName] = useState(qrCodeSettings.qrName);
    const [size, setSize] = useState(qrCodeSettings.size.width);
    const [numberError, setNumberError] = useState("");
  
    const handleSubmit = () => {
      const fullNumber = selectedCountry + number;
      if (!isValidPhoneNumber(fullNumber)) {
        setNumberError("Please enter a valid Phone Number");
        return;
      }
  
      // Update QR code settings and proceed
      setQrCodeSettings((prevSettings) => ({
        ...prevSettings,
        inputData: {
          ...prevSettings.inputData,
          url: { ...prevSettings.inputData.url, value: null }, // Optionally clear other types
          text: { ...prevSettings.inputData.text, value: null }, // Optionally clear other types
          mail: { ...prevSettings.inputData.mail, email: email, message: message }, 
          whatsapp: { number: fullNumber, message: message },
        },
        qrName: qrName.trim(),
        size: { width: size, height: size },
      }));
      handleNext();
    };
  
    return (
      <div>
        {numberError && <ErrorBar message={numberError} />}
        <Typography variant="h6" gutterBottom>Create Your WhatsApp Message QR Code</Typography>
        <TextField
          required
          label="QR Name"
          value={qrName}
          onChange={(e) => setQrName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={3}>
            <TextField
              select
              label="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              fullWidth
            >
              {countries.map((option) => (
                <MenuItem key={option.code} value={option.dial_code}>
                  {option.name} ({option.dial_code})
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              label="WhatsApp Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
              error={!!numberError}
            //   helperText={numberError || "Enter phone number without country code."}
            />
          </Grid>
        </Grid>
        <TextField
          required
          label="WhatsApp Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Typography id="input-slider" gutterBottom>QR Code Size</Typography>
        <Slider
          value={size}
          onChange={(e, newValue) => setSize(newValue)}
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
          min={30}
          max={1000}
          className="slider-select"

        />
        <br/>
        <Button variant="contained" onClick={handleSubmit} style={{ marginTop: 20 }}>
          Generate QR Code
        </Button>
      </div>
    );
  };
  
  export default WhatsApp;