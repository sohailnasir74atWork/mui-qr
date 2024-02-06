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
    setQrCodeSettings((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        background: {
          ...prev.colors.background,
          color: color
        }
      }
    }))
  }
  color={qrCodeSettings.colors.background.color}
  setSolidColor={(solidColor) =>
    setQrCodeSettings((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        background: {
          ...prev.colors.background,
          isSolid: solidColor
        }
      }
    }))
  }
  solidColor={qrCodeSettings.colors.background.isSolid}
/>

        <Divider/>

        <span className="block heading-3">Dots Color</span>

        <GradientColorPicker
          setColor={(color) =>
            setQrCodeSettings((prev) => ({
              ...prev,
              colors: {
                ...prev.colors,
                dots: {
                  ...prev.colors.dots,
                  color: color
                }
              }
            }))
          }
          color={qrCodeSettings.colors.dots.color}
          setSolidColor={(solidColor) =>
            setQrCodeSettings((prev) => ({
              ...prev,
              colors: {
                ...prev.colors,
                dots: {
                  ...prev.colors.dots,
                  isSolid: solidColor
                }}
            }))
          }
          solidColor={qrCodeSettings.colors.dots.isSolid}
          hideTransparent
        />
                <Divider/>

        <span className="block heading-3">Marker Border Color</span>

<GradientColorPicker
  setColor={(color) =>
    setQrCodeSettings((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        square: {
          ...prev.colors.square,
          color: color
        }
      }
    }))
  }
  color={qrCodeSettings.colors.square.color}
  setSolidColor={(solidColor) =>
    setQrCodeSettings((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        square: {
          ...prev.colors.square,
          isSolid: solidColor
        }
      }
    }))
  }
  solidColor={qrCodeSettings.colors.square.isSolid}
  hideTransparent
/>
<Divider/>

<span className="block heading-3">Marker Center Color</span>

        <GradientColorPicker
          setColor={(color) =>
            setQrCodeSettings((prev) => ({
              ...prev,
              colors: {
                ...prev.colors,
                cornerDots: {
                  ...prev.colors.cornerDots,
                  color: color
                }
              }
            }))
          }
          color={qrCodeSettings.colors.cornerDots.color}
          setSolidColor={(solidColor) =>
            setQrCodeSettings((prev) => ({
              ...prev,
              colors: {
                ...prev.colors,
                cornerDots: {
                  ...prev.colors.cornerDots,
                  isSolid: solidColor
                }
              }
            }))
          }
          solidColor={qrCodeSettings.colors.cornerDots.isSolid}
          hideTransparent
        />      </div>
    </div>
  );
};

export default ColorHandling;