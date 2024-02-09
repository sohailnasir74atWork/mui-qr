import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import QrGenerator from "./QrGenerator";
import { Helmet } from "react-helmet";

const Home = ({ prop }) => {
  const [activeTool, setActiveTool] = useState("Link");
  const [showError, setShowError] = useState(false);
  const { isMobile } = prop
  console.log('home', isMobile)
  const [qrCodeSettings, setQrCodeSettings] = useState({
    qrName:'My QR',
    size:{height:'300', width: '300'},
    inputData: { url: null },
      colors: {
      background: { isSolid: true, color: "#FFFFFF"},
      dots: { isSolid: true, color: "#000000" },
      square: { isSolid: true, color: "#000000" },
      cornerDots: { isSolid: true, color: "#000000" },
    },
    clearInput: false,
  });

  return (
    <div>
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
        <SideBar
        prop={{ qrCodeSettings, setQrCodeSettings, activeTool, setActiveTool, isMobile }}
      />
    </div>
  );
};

export default Home;