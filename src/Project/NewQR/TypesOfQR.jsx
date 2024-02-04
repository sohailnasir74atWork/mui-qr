import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dymanicTools, staticTools } from "./TypesofQRList";
import QrDemo from "./QrDemo";
import Links from "../InputComponents/Links";

const TypesOfQR = ({ prop }) => {
  const { activeStep, setActiveStep, qrCodeSettings, setQrCodeSettings, activeTool, setActiveTool } = prop;
  const inputClick = (e) => {
    setActiveStep(activeStep + 1);
    setActiveTool(e)
    console.log(activeStep);
  };

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  return (
    <div className="types-of-qr-container">
      {activeStep == 0 && (
        <div className="types-of-qr-select">
          <div className="static-qr flex-col">
          <div className="heading-container">
              <span className="heading-2">STATIC QR</span>{" "}
              <span className="heading-tag">with tracking</span>
            </div>
            <div className="grid-container">
              {staticTools.map((item, index) => (
                <div className="static-qr-tabs" key={index}  onClick={()=>inputClick(item.heading)}
                >
                  <div className="static-qr-icons">{item.icon}</div>
                  <div className="flex-col">
                    <span>{item.heading}</span>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="heading-container">
              <span className="heading-2">DYNAMIC QR</span>{" "}
              <span className="heading-tag">with tracking</span>
            </div>
            <div className="grid-container">
              {dymanicTools.map((item, index) => (
                <div
                  className="static-qr-tabs"
                  key={index}
                  onClick={inputClick}
                >
                  <div className="static-qr-icons">{item.icon}</div>
                  <div className="flex-col">
                    <span>{item.heading}</span>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      )}
      {activeStep == 1 && activeTool === 'Link' && (
        <div className="types-of-qr-select">
        <Links prop={{setQrCodeSettings, qrCodeSettings}}/>
        </div>
      )}
      {activeStep == 1 && activeTool !== 'Link' && (
        <div className="types-of-qr-select">We are at step 2</div>
      )}
      {activeStep == 2 && (
        <div className="types-of-qr-select">We are at step 3</div>
      )}
      <QrDemo />
    </div>
  );
};

export default TypesOfQR;