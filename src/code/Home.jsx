import React, { useEffect, useState } from "react";
import MiniDrawer from "./components/ToolBar";
import VerticalTabs from "./components/Tabs";
import QrGenerator from "./components/QrGenerator.jsx";
import { Container } from "@mui/material";

const Home = () => {
  const [activeTool, setActiveTool] = useState("link");
  const [showError, setShowError] = useState(false);
  const [qrCodeSettings, setQrCodeSettings] = useState({
    inputData: { url: null },
    backgroundColor: '#ffffff',
    qrColor: '#000000',
    solidColorQR:true,
    solidColorBackground:true,
    clearInput:false
  });
    
  return (
    <Container>
    <div className="home-container">
      <div className="w-100">
        <VerticalTabs prop={{setQrCodeSettings, qrCodeSettings, setActiveTool}}/>
      </div>
      <div>
      <div className="center">
          <div className="qr-home-container">
  

            {/* QR GENERATOR TOOL */}
            <QrGenerator prop={{  setQrCodeSettings, qrCodeSettings, setActiveTool }}/>
          </div>
        </div>
      </div>

    
    </div>
    </Container>
  );
};

export default Home;
