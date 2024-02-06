import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import mobileFrame from "../../Assets/mobileFrame.webp";
import QrGenerator from "../QrGenerator";

export default function QrDemo({ prop }) {
  const { qrCodeSettings } = prop;
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div style={{ width: "340px", position: 'fixed', top: '10px', right:'0', zIndex: '100' }}>
  <div className="types-of-qr-mobile-demo">
    <span className="heading-2 center">Demo</span>
    <div className="mobile-frame">
      <img
        src={mobileFrame}
        alt="Mobile Frame"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="overlay">
        {" "}
        <QrGenerator prop={{ qrCodeSettings }} />
      </div>
    </div>
  </div>
</div>

  );
}
