import React, { useState, useEffect, useRef } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import styled from "@emotion/styled";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { FormControlLabel } from "@mui/material";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  
const GradientPicker = ({ onChange, value }) => {
  return (
    <ColorPicker
      value={value}
      onChange={onChange}
      className="color-picker-container"
      width={200}
      height={100}
      hidePresets
      hideEyeDrop
      hideColorGuide
      hideInputType
      hideGradientStop
      presets={false}
      hideInputs
      setGradient
      hideColorTypeBtns
      hideAdvancedSliders
      colorStops={[
        { color: "rgba(255, 0, 0, 1)", position: 0 },
        { color: "rgba(0, 255, 0, 1)", position: 0.5 },
        { color: "rgba(0, 0, 255, 1)", position: 1 },
      ]}
    />
  );
};

const ColorDemo = ({ color, onClick }) => {
  const demoStyle = {
    background: color,
  };
  return <div style={demoStyle} onClick={onClick} className="color-demo"></div>;
};

const GradientColorPicker = ({
  color,
  setColor,
  setSolidColor,
  solidColor,
  hideTransparent,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isTransparentToggleOn, setIsTransparentToggleOn] = useState(false);
  const [isGradientToggleOn, setIsGradientToggleOn] = useState(false);
  const [showError, setShowError] = useState(false);

  const colorPickerRef = useRef();
  const { setSolid, setGradient, valueToHex } = useColorPicker(color, setColor);
  const hexValue = valueToHex(color);

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

  const handleColorChange = (color) => {
    setColor(color);
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

  // Hide the color picker.
  setShowColorPicker(false);
};


  const handleGradientToggle = () => {
    setIsGradientToggleOn((prev) => !prev);
    setSolidColor(!solidColor);
    if (isGradientToggleOn) {
      setSolid();
    } else setGradient();
    setShowColorPicker(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

console.log(color)
  return (
    <div>
      <div className="color-picker-container">
        <div style={{ display: "flex" }}>
          {/* <input
            type="text"
            value={isGradientToggleOn ? color : (isTransparentToggleOn ? 'Transparent':  hexValue)}
            readOnly
            className="input-color-home"
          /> */}
        </div>
        <div
          className="color-picker"
          ref={colorPickerRef}
          style={{ display: showColorPicker ? "block" : "none" }}
        >
          <GradientPicker value={color} onChange={handleColorChange} />
        </div>
        <div className="home-color-container">
            <div>
          {!hideTransparent && (
            <div className="toggle-button">
              {/* <div onClick={handleTransparentToggle} className="flex-align-center">
                {isTransparentToggleOn ? <FaToggleOn /> : <FaToggleOff />}
              </div> */}
             
              {showError && (
                <>
                  <hr />{" "}
                  <span className="error" style={{ display: "block" }}>
                    Transparent Background cant be created in Gredient Mode
                  </span>
                </>
              )}
            </div>
          )}
          <div className="toggle-button">
            <div>
            {/* <div onClick={handleGradientToggle}className="flex-align-center">
              {isGradientToggleOn ? <FaToggleOn /> : <FaToggleOff />}
            </div>
            <span className="font-m" style={{ marginLeft: "10px" }}>
              Gradient
            </span> */}
            <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label=""
      /> 
      <span className="text">Gradient</span></div>
      
          </div>
          <div className="toggle-button">
            {/* <div onClick={handleGradientToggle}className="flex-align-center">
              {isGradientToggleOn ? <FaToggleOn /> : <FaToggleOff />}
            </div>
            <span className="font-m" style={{ marginLeft: "10px" }}>
              Gradient
            </span> */}
            <div>
            <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label=""
      /> 
      <span className="text">Transarent</span></div>
          </div>
        </div>
        <div className="demo-container">
         <input
            type="text"
            value={isGradientToggleOn ? color : (isTransparentToggleOn ? 'Transparent':  hexValue)}
            readOnly
            className="color-demo"
          />
      <ColorDemo color={color} onClick={handleDemoClick}  className='color-demo'/>

      </div>
        </div>
        

      </div>
    </div>
  );
};

export default GradientColorPicker;