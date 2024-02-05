import React, { useEffect, useRef, useState } from "react";
import GradientColorPicker from "./ColorHelper.jsx/GradientColorPicker";
import { Divider } from "@mui/material";
const ColorHandling = ({ prop }) => {
  const { setQrCodeSettings, qrCodeSettings } = prop;
  // console.log(qrCodeSettings);

  return (
    <div className="option-container-home p-v-15 accordion-open">
      <div className="accordion-content">
        <span className="block heading-3">Background Color</span>

        <GradientColorPicker
          setColor={(color) =>
            setQrCodeSettings((prev) => ({ ...prev, backgroundColor: color }))
          }
          color={qrCodeSettings.backgroundColor}
          setSolidColor={(solidColor) =>
            setQrCodeSettings((prev) => ({
              ...prev,
              solidColorBackground: solidColor,
            }))
          }
          solidColor={qrCodeSettings.solidColorBackground}
        />
        <Divider/>

        <span className="block heading-3">Dots Color</span>

        <GradientColorPicker
          setColor={(color) =>
            setQrCodeSettings((prev) => ({ ...prev, qrColor: color }))
          }
          color={qrCodeSettings.qrColor}
          setSolidColor={(solidColor) =>
            setQrCodeSettings((prev) => ({ ...prev, solidColorQR: solidColor }))
          }
          solidColor={qrCodeSettings.solidColorQR}
          hideTransparent
        />
                <Divider/>

        <span className="block heading-3">Marker Border Color</span>

<GradientColorPicker
  setColor={(color) =>
    setQrCodeSettings((prev) => ({ ...prev, borderColor: color }))
  }
  color={qrCodeSettings.borderColor}
  setSolidColor={(solidColor) =>
    setQrCodeSettings((prev) => ({ ...prev, solidBorderColor: solidColor }))
  }
  solidColor={qrCodeSettings.solidBorderColor}
  hideTransparent
/>
<Divider/>

<span className="block heading-3">Marker Center Color</span>

        <GradientColorPicker
          setColor={(color) =>
            setQrCodeSettings((prev) => ({ ...prev, centerColor: color }))
          }
          color={qrCodeSettings.centerColor}
          setSolidColor={(solidColor) =>
            setQrCodeSettings((prev) => ({ ...prev, solidCenterColor: solidColor }))
          }
          solidColor={qrCodeSettings.solidCenterColor}
          hideTransparent
        />      </div>
    </div>
  );
};

export default ColorHandling;
