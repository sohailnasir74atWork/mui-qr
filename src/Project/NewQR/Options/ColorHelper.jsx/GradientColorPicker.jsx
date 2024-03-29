import React, { useState, useEffect, useRef } from "react";
import ReactGPicker from 'react-gcolor-picker';
import styled from "@emotion/styled";
import { FormControlLabel, Switch } from "@mui/material";
import ErrorBar from "./Error";

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const GradientColorPicker = ({
  color,
  setColor,
  setSolidColor,
  solidColor,
  hideTransparent,
  isMobile
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isTransparentToggleOn, setIsTransparentToggleOn] = useState(false);
  const [isGradientToggleOn, setIsGradientToggleOn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorTransparent, setErrorTransparent] = useState(false);
  const colorPickerRef = useRef();

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  const handleTransparentToggle = () => {
    if (!isGradientToggleOn) {
      setIsTransparentToggleOn(!isTransparentToggleOn);
      setColor(isTransparentToggleOn ? "#ffffff" : "");
    } else {
      setShowError(true);
    }
    setShowColorPicker(false);
  };

  const handleGradientToggle = () => {
    if (!isTransparentToggleOn) {
      setIsGradientToggleOn(!isGradientToggleOn);
      setSolidColor(!solidColor);
    } else {
      setErrorTransparent(true);
    }
    setShowColorPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDemoClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div>
      <div className="color-picker-container">
        {showError && <ErrorBar message="Please disable gradient mode" />}
        {errorTransparent && <ErrorBar message="Please disable transparent mode" />}
        <div className="home-color-container">
          <div className="demo-container">
            <div className="flex-row" style={{ position: 'relative' }}>
              <input className="input-demo" value={color} onChange={handleInputChange} />
              <div style={{ background: color }} onClick={handleDemoClick} className="color-demo"></div>
            </div>
          </div>
          <div className="flex-responsive">
            <div className="toggle-button">
              <FormControlLabel
                control={<AntSwitch checked={isGradientToggleOn} onChange={handleGradientToggle} />}
                label=""
              />
              <span className="text-switch">Gradient</span>
            </div>
            {!hideTransparent && (
              <div className="toggle-button">
                <FormControlLabel
                  control={<AntSwitch checked={isTransparentToggleOn} onChange={handleTransparentToggle} />}
                  label=""
                />
                <span className="text-switch">Transparent</span>
              </div>
            )}
          </div>
        </div>
        {showColorPicker && (
          <div className="color-picker">
            <div ref={colorPickerRef} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <ReactGPicker
              color={color}
              onChange={handleColorChange}
              solid={!isGradientToggleOn}
              gradient={isGradientToggleOn}
              format='hex'
              popupWidth={300}
              showGradientAngle={true}
              showGradientResult={true}
              showInputs={false}
            /></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradientColorPicker;
