import React from "react";
import { Divider } from "@mui/material";
import style1 from "../../../Assets/Shapes/style1.svg";
import corner1 from "../../../Assets/Shapes/corner1.svg";
import cornerDot1 from "../../../Assets/Shapes/cornerDot1.svg";
import "./optionsStyles.css";

const LogoHandling = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings } = prop;

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

  const handleClickLogo = (logo) => {
    // Update QR code settings on logo click
    // setQrCodeSettings((prevSettings) => ({
    //   ...prevSettings,
    //   logo: logo,
    // }));
  };

  return (
    <div className="option-container-home p-v-15 accordion-open">
      <div className="button-logo">
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
      <div className="logo-container">
        {qrCodeSettings.logos &&
          qrCodeSettings.logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Uploaded Logo ${index + 1}`}
              className="logo"
              onClick={() => handleClickLogo(logo)}
            />
          ))}
      </div>
      <div className="text-primary">You can pick from Below</div>
      <div className="logo-container">
        <img
          src={style1}
          className="logo"
          onClick={() => handleClickLogo(style1)}
        />
        <img
          src={corner1}
          className="logo"
          onClick={() => handleClickLogo(corner1)}
        />
        <img
          src={cornerDot1}
          className="logo"
          onClick={() => handleClickLogo(cornerDot1)}
        />
      </div>
      <Divider />
    </div>
  );
};

export default LogoHandling;
