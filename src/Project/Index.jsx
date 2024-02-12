import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Helmet } from "react-helmet";

const Home = ({ prop }) => {
  const [activeTool, setActiveTool] = useState("");
  const [showError, setShowError] = useState(false);
  const { isMobile } = prop;
  const [qrCodeSettings, setQrCodeSettings] = useState({
    qrName: "My QR",
    size: { height: "300", width: "300" },
    inputData: {
      url: { value: null },
      text: { value: null },
      mail: { email: null, message : null },
      whatsapp: { number: null, message : null },
      message: { number: null, message : null },
      call: { call : null },
      wifi: { networkName : null, networkType : null, password : null, isHide : false },
   },
    logo: null,
    logoSetting: { backgrounddots: true, margin: 10 },
    colors: {
      background: { isSolid: true, color: "#FFFFFF" },
      dots: { isSolid: true, color: "#000000" },
      square: { isSolid: true, color: "#000000" },
      cornerDots: { isSolid: true, color: "#000000" },
    },
    types: {
      corner: { type: "square" },
      dots: { type: "square" },
      square: { isSolid: true, color: "#000000" },
      cornerDots: { type: "square" },
    },
    clearInput: false,
  });

  useEffect(() => {
    if (isMobile) {
      // Additional styles for mobile browsers
      document.body.style.backgroundColor = "#FFFFFF"; // Set the background color for the body
      // You may need to experiment with other styles for specific mobile browsers
    }
    // This is a conceptual example; you'll need to replace `YOUR_API_ENDPOINT` with an actual API URL
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const countryCodes = data.map(country => ({
    code: country.alpha2Code,
    dialCode: country.callingCodes[0], // Assuming the API provides calling codes in an array
    label: country.name
  }));
  console.log(countryCodes);
})
.catch(error => console.error('Error fetching country codes:', error));

  }, [isMobile]);

  return (
    <div>
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <SideBar
        prop={{
          qrCodeSettings,
          setQrCodeSettings,
          activeTool,
          setActiveTool,
          isMobile,
        }}
      />
    </div>
  );
};

export default Home;
