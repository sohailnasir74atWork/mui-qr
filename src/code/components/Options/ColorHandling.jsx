import React, { useEffect, useRef, useState } from "react";
import GradientColorPicker from "./ColorHelper.jsx/GradientColorPicker";
const ColorHandling = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings } = prop;
  console.log(qrCodeSettings)

  return (
    <div
      className='option-container-home p-v-15 accordion-open'
    >
     
        <div className="accordion-content">
         <span className="block heading-3">Background Color</span>
         <GradientColorPicker
  setColor={(color) => setQrCodeSettings((prev) => ({ ...prev, backgroundColor: color }))}
  color={qrCodeSettings.backgroundColor}
  setSolidColor={(solidColor) => setQrCodeSettings((prev) => ({ ...prev, solidColorBackground: solidColor }))}
  solidColor={qrCodeSettings.solidColorBackground}
/>

          <hr />
          <br />
          <span className="block heading-3">QR Color</span>
          {/* <GradientColorPicker
            setColor={setQrColor}
            color={qrColor}
            setSolidColor={setSolidColorQR}
            solidColor={solidColorQR}
            hideTransparent
          /> */}
        </div>
    
    </div>
  );
};

export default ColorHandling;
