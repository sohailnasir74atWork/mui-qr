import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

const Home = () => {
  const [activeTool, setActiveTool] = useState("Links");
  const [showError, setShowError] = useState(false);
  const [qrCodeSettings, setQrCodeSettings] = useState({
    inputData: { url: null },
    colors: {
      background: { isSolid: true, color: "#1f1f1f" },
      dots: { isSolid: true, color: "#000000" },
      square: { isSolid: true, color: "#000000" },
      cornerDots: { isSolid: true, color: "#000000" },
    },
    clearInput: false,
  });

  return (
    <div>
      <SideBar prop={{qrCodeSettings, setQrCodeSettings, activeTool, setActiveTool}}/>
    </div>
  );
};

export default Home;
