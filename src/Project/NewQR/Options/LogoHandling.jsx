import React, { useEffect, useState } from "react";
import { Button, Divider, FormControlLabel, Slider, Typography } from "@mui/material";
import style1 from "../../../Assets/Shapes/style1.svg";
import corner1 from "../../../Assets/Shapes/corner1.svg";
import cornerDot1 from "../../../Assets/Shapes/cornerDot1.svg";
import "./optionsStyles.css";
import { AntSwitch } from "./ColorHelper.jsx/GradientColorPicker";

const LogoHandling = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings, isMobile } = prop;
  const [isLogo, setIsLogo] = useState(qrCodeSettings.logoSetting.backgrounddots)
  const [selectedLogo, setSelectedLogo] = useState(qrCodeSettings.logo); // Assuming the initial selected logo is stored in qrCodeSettings.logo
  const [size, setSize] = useState(qrCodeSettings.logoSetting.margin); // Assuming width and height are initially the same
  useEffect(() => {
    setSize(qrCodeSettings.logoSetting.margin); // Sync with external updates
    setIsLogo(qrCodeSettings.logoSetting.backgrounddots)
  }, [qrCodeSettings]);


  const handleUploadLogo = (event) => {
    const file = event.target.files[0];

    // Assuming you want to store the logo as a base64 string
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQrCodeSettings((prevSettings) => ({
          ...prevSettings,
          logos: [...(prevSettings.logos || []), reader.result],
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSizeChange = (_, newValue) => {
    setSize(newValue);
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      logoSetting: {
        ...prevSettings.logoSetting,
        margin: newValue,
      },
    }));
  };
  
  const handleClickLogo = (logo) => {
    setSelectedLogo(logo);
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      logo: logo,
    }));
  };
  const handleRemoveLogo = ()=>{
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      logo: null,
    }));
  }
  const handleLogoBG = () => {
    setIsLogo((prevIsLogo) => !prevIsLogo);
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      logoSetting: {
        ...prevSettings.logoSetting,
        backgrounddots: !prevSettings.logoSetting.backgrounddots,
      },
    }));
  };
  
  
  

  return (
<div className={ isMobile ? "option-container-home p-v-15 accordion-open" : "p-v-15 accordion-open"}> 
<br/>
<div className="flex-row">
     <div className="button-logo" style={{marginRight:"10px"}}>
        <input
          type="file"
          accept="image/*"
          onChange={handleUploadLogo}
          multiple
          className="input-logo"
          id="upload-input"
        />
        <label htmlFor="upload-input" className="upload-button">
          Upload Image
        </label>
      </div>
      {qrCodeSettings.logo && (
  <div className="button-logo">
    <div
      onClick={handleRemoveLogo}
      style={{ backgroundColor: '#1f1f1f1f', color: 'grey' }}
      className="input-logo upload-button"
    >
      Remove Logo
    </div>
  </div>
)}

      </div>
      <br/>
      <div className="toggle-button" style={{justifyContent:'left'}}>
              <FormControlLabel
                control={<AntSwitch checked={isLogo} onChange={handleLogoBG} disabled={!qrCodeSettings.logo} />}
                label=""
              />
              <span className="text-switch">Remove Background Behind Logo</span>
            </div>
            <br/>
            <Typography id="track-inverted-slider" gutterBottom>
        Set Logo Padding
      </Typography>
      <Slider
        value={size}
        onChange={handleSizeChange}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
        min={0}
        max={40}
        disabled={!qrCodeSettings.logo}
        className="slider-select"
      />
      <br/>
      <div className="logo-container">
        {qrCodeSettings.logos &&
          qrCodeSettings.logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Uploaded Logo ${index + 1}`}
              className={`logo ${selectedLogo === cornerDot1 ? "selected" : ""}`}
              onClick={() => handleClickLogo(logo)}
            />
          ))}
      </div>
      <br/>
      <Divider/>
      <div className="text-primary">You can pick from Below</div>
      <div className="logo-container">
        <img
          src={style1}
          className={`logo ${selectedLogo === style1 ? "selected" : ""}`}
 
          onClick={() => handleClickLogo(style1)}
        />
        <img
          src={corner1}
          className={`logo ${selectedLogo === corner1 ? "selected" : ""}`}
 
          onClick={() => handleClickLogo(corner1)}
        />
        <img
          src={cornerDot1}
          className={`logo ${selectedLogo === cornerDot1 ? "selected" : ""}`}
 
          onClick={() => handleClickLogo(cornerDot1)}
        />
      </div>
    </div>
  );
};

export default LogoHandling;
