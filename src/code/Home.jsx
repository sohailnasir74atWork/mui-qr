import React, { useEffect, useState } from "react";
import MiniDrawer from "./components/ToolBar";
import VerticalTabs from "./components/Tabs";
import QrGenerator from "./components/QrGenerator.jsx";

const Home = () => {
  const [activeTool, setActiveTool] = useState("link");
  const [data, setData] = useState(null);
  const [img, setImg] = useState();
  const [clearInput, setClearInput] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [qrColor, setQrColor] = useState("#000000");
  const [solidColorBackground, setSolidColorBackground] = useState(true);
  const [solidColorQR, setSolidColorQR] = useState(true);
  const [showError, setShowError] = useState(false);

    
  return (
    <div className="home-container">
      <div >
        <VerticalTabs prop={{setData, data, setClearInput, setActiveTool}}/>
      </div>
      <div className='w-60'>
      <div className="center">
          <div className="qr-home-container">
  

            {/* QR GENERATOR TOOL */}
            <QrGenerator prop={{  data, img, backgroundColor, qrColor, setSolidColorBackground, solidColorBackground,solidColorQR, setSolidColorQR }}/>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
