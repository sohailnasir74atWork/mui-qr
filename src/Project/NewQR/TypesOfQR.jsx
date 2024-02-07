import { Dialog, TextField, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dymanicTools, staticTools } from "./TypesofQRList";
import QrDemo from "./QrDemo";
import Links from "../InputComponents/Links";
import CustomizedAccordions from "./QrDesigns";
import { useTheme } from "@emotion/react";

const TypesOfQR = ({ prop }) => {
  const { handleComplete, qrCodeSettings, setQrCodeSettings, activeTool, setActiveTool, activeStep, isMobile, showMobileQR, setShowMobileQR } = prop;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const inputClick = (e) => {
    
    setActiveTool(e)
    handleComplete()
    // console.log(activeStep);
  };
  const handleClose = () => {
    setShowMobileQR(false);
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
     {isMobile && showMobileQR && <Dialog
             sx={{ m: 0, p: 1 }} id="customized-dialog-title"

        open={showMobileQR}
        onClose={handleClose}
      ><QrDemo prop={{qrCodeSettings}}/></Dialog>}

    </div>
  );
};

export default TypesOfQR;