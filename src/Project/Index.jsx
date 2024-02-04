import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

const Home = () => {
  const [activeTool, setActiveTool] = useState("link");
  const [showError, setShowError] = useState(false);
  const [qrCodeSettings, setQrCodeSettings] = useState({
    inputData: { url: null },
    backgroundColor: "#ffffff",
    qrColor: "#000000",
    borderColor: "#000000",
    centerColor: "#000000",
    solidColorQR: true,
    solidColorBackground: true,
    solidBorderColor: true,
    solidCenterColor: true,
    clearInput: false,
  });

  return (
    <div>
      <SideBar/>
    </div>
  );
};

export default Home;
