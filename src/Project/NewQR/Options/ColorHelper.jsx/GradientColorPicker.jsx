import React, { useState, useEffect, useRef } from "react";
import  ReactGPicker  from 'react-gcolor-picker';
import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import ErrorBar from "./Error";
import { Flag } from "@mui/icons-material";

const AntSwitch = styled(Switch)(({ theme }) => ({
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
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
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
  const [errorTransparent, seterrorTransparent] = useState(false);

// console.log(solidColor)
  const colorPickerRef = useRef();

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleTransparentToggle = () => {
    if (!isGradientToggleOn) {
      setIsTransparentToggleOn((prev) => {
        const newTransparentState = !prev;
        setColor(newTransparentState ? "" : "#ffffff");
        return newTransparentState;
      });
    } else {
      setShowError((prev) => !prev);
    }
    setShowColorPicker(false);
  };

  const handleGradientToggle = () => {
    if(!isTransparentToggleOn){
    setIsGradientToggleOn((prev) => !prev);
    setSolidColor(!solidColor);
    setShowColorPicker(false);
  } else {
    seterrorTransparent((prev) => !prev);
  }} 

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setShowColorPicker(false);
    }
  };

  const handleDemoClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div>
      <div className="color-picker-container">
        {showError && <ErrorBar message={'Please disbale gradient mode'}/>}
        {errorTransparent && <ErrorBar message={'Please disbale transparent mode'}/>}

        <div style={{ display: "flex" }}></div>
        <div
          className="color-picker"
          ref={colorPickerRef}
          style={{ display: showColorPicker ? "block" : "none" }}
        >
          <ReactGPicker
            color={color}
            onChange={handleColorChange}
            solid={isGradientToggleOn ? false : true}
            gradient={isGradientToggleOn ? true : false}
            format='hex'
            popupWidth={200}
            showGradientAngle={false}
            showGradientResult={false}

          />
        </div>
        <div className="home-color-container">
          <div className="demo-container">
            <div className="flex-row" style={{position:'relative'}}>
              <input className="input-demo" value={color} readOnly/>
            <div style={{background: color}} onClick={handleDemoClick} className="color-demo"></div>
            </div>
          </div>
          <div className="flex-responsive">
            <div className="toggle-button">
              <div className="color-switch">
                <FormControlLabel
                  control={
                    <AntSwitch
                      checked={isGradientToggleOn}
                      onChange={handleGradientToggle}
                    />
                  }
                  label=""
                />
                <span className="text-switch">Gradient</span>
              </div>
            </div>
            {!hideTransparent && (
              <div className="toggle-button">
                <div className="color-switch">
                  <FormControlLabel
                    control={
                      <AntSwitch
                        checked={isTransparentToggleOn}
                        onChange={handleTransparentToggle}
                      />
                    }
                    label=""
                  />
                  <span className="text-switch">Transparent</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientColorPicker;
