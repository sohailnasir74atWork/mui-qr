import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dymanicTools, staticTools } from "./TypesofQRList";
import QrDemo from "./QrDemo";
import Links from "../InputComponents/Links";
import CustomizedAccordions from "./QrDesigns";

const TypesOfQR = ({ prop }) => {
  const { handleComplete, qrCodeSettings, setQrCodeSettings, activeTool, setActiveTool, activeStep, isMobile } = prop;
  
  const inputClick = (e) => {
    
    setActiveTool(e)
    handleComplete()
    // console.log(activeStep);
  };

  useEffect(() => {
    // console.log(activeStep);
  }, [activeTool]);

  return (
    <div className="types-of-qr-container" style={{width: isMobile ? "100%" : ''}}>
      {activeStep == 0 && (
        <div className={isMobile ? "types-of-qr-select-mobile" : 'types-of-qr-select'}>
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
                    <span className="text-primary">{item.heading}</span>
                    <span className="text-secondary">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="heading-container">
              <h3 className="heading-2">DYNAMIC QR</h3>{" "}
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
                    <span className="text-primary">{item.heading}</span>
                    <span className="text-secondary">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      )}
      {activeStep === 1 && activeTool === 'Link' && (
        <div className="types-of-qr-select">
        <Links prop={{setQrCodeSettings, qrCodeSettings, handleComplete, isMobile}}/>
        </div>
      )}
      {activeStep === 1 && activeTool !== 'Link' && (
        <div className="types-of-qr-select">We are at step 2</div>
      )}
      {activeStep === 2 && (
        <div className="types-of-qr-select">
          <CustomizedAccordions prop={{setQrCodeSettings, qrCodeSettings, handleComplete}}/>
        </div>
      )}
     {!isMobile && <QrDemo prop={{qrCodeSettings}}/>}
    </div>
  );
};

export default TypesOfQR;