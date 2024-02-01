import React, { useEffect, useState } from "react";
import MiniDrawer from "./components/ToolBar";
import VerticalTabs from "./components/Tabs";
import QrGenerator from "./components/QrGenerator.jsx";
import { Container } from "@mui/material";
import ImageCarousel from "./components/Options/ImageSlider.jsx";
const backgroundPurple = '#BEADFA'

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
    <Container>
      <div className="home-container">


        {/* Inputs and Data Type */}
        <div className="w-100" style={{background:backgroundPurple}}>
          <VerticalTabs
            prop={{ setQrCodeSettings, qrCodeSettings, setActiveTool }}
          />
        </div>
        <div className="block-center">
          <div className="center">
            <div>



              {/* QR GENERATOR TOOL */}
              <QrGenerator
                prop={{ setQrCodeSettings, qrCodeSettings, setActiveTool }}
              />
              <div style={{background:backgroundPurple}}>
                <ImageCarousel/>
                </div>
            </div>
            {/* <Test/> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
