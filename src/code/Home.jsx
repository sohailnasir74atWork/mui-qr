import React, { useEffect, useState } from "react";
import VerticalTabs from "./components/Tabs";
import QrGenerator from "./components/QrGenerator.jsx";
import { Container } from "@mui/material";
import ImageCarousel from "./components/Options/ImageSlider.jsx";
import { lightPurple, darkPurple, backgroundPurple } from "./components/Veriables.js";
import MiniDrawer from "./components/Options/newoptions.jsx";

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
        <div className="block-center qr-bg-holder">
          <div className="center">
            <div className="">



              {/* QR GENERATOR TOOL */}
              <QrGenerator
                prop={{ setQrCodeSettings, qrCodeSettings, setActiveTool }}
              />
              <div>
                <ImageCarousel/>
                </div>
            </div>
            {/* <Test/> */}
          </div>
        </div>
        <div>
          <MiniDrawer prop={{ setQrCodeSettings, qrCodeSettings, setActiveTool }}/>
        </div>
      </div>
    </Container>
  );
};

export default Home;
