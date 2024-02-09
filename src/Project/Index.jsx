import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import QrGenerator from "./QrGenerator";
import { Helmet } from "react-helmet";

const Home = ({ prop }) => {
  const [activeTool, setActiveTool] = useState("Link");
  const [showError, setShowError] = useState(false);
  const { isMobile } = prop;
  const [qrCodeSettings, setQrCodeSettings] = useState({
    qrName: 'My QR',
    size: { height: '300', width: '300' },
    inputData: { url: null },
    logo: null,
    colors: {
      background: { isSolid: true, color: "#FFFFFF" },
      dots: { isSolid: true, color: "#000000" },
      square: { isSolid: true, color: "#000000" },
      cornerDots: { isSolid: true, color: "#000000" },
    },
    types: {
      corner: { type: 'square' },
      dots: { type: 'square' },
      square: { isSolid: true, color: "#000000" },
      cornerDots: { type: 'square'},
    },
    clearInput: false,
  });

  useEffect(() => {
    if (isMobile) {
      // Additional styles for mobile browsers
      document.body.style.backgroundColor = "#FFFFFF"; // Set the background color for the body
      // You may need to experiment with other styles for specific mobile browsers
    }
  }, [isMobile]);

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
