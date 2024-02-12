import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import qrPlaceHolder from "../../Assets/qrPlaceHolder.svg";
import { Button } from "@mui/material";
import { parseLinearGradient } from "../gradientParser";

const QrGenerator = ({ prop }) => {
  const { qrCodeSettings, liveDemo } = prop;
  const [qrCode, setQrCode] = useState(null);
  const canvasRef = useRef(null);
  const img = qrCodeSettings.logo;
  let qrData = '';
    if (qrCodeSettings.inputData.url.value) {
      qrData = qrCodeSettings.inputData.url.value;
    } else if (qrCodeSettings.inputData.text.value) {
      qrData = qrCodeSettings.inputData.text.value;
    } else if (qrCodeSettings.inputData.mail.email && qrCodeSettings.inputData.mail.message) {
      qrData = `mailto:${qrCodeSettings.inputData.mail.email}?body=${encodeURIComponent(qrCodeSettings.inputData.mail.message)}`;
    }
  useEffect(() => {
    // Dynamically determine the data for the QR code based on the available input data
    
    if (qrData && canvasRef.current) {
      const canvasElement = canvasRef.current;
      // Clear the existing QR code canvas before appending a new one
      while (canvasElement.firstChild) {
        canvasElement.removeChild(canvasElement.firstChild);
      }

      // Parsing gradient colors
      const gradientBackground = parseLinearGradient(qrCodeSettings.colors.background.color);
      const gradientBorder = parseLinearGradient(qrCodeSettings.colors.square.color);
      const gradientQR = parseLinearGradient(qrCodeSettings.colors.dots.color);
      const gradientCenter = parseLinearGradient(qrCodeSettings.colors.cornerDots.color);

      // Generate a new QR code
      const newQrCode = new QRCodeStyling({
        width: qrCodeSettings.size.width,
        height: qrCodeSettings.size.height,
        data: qrData,
        image: img,
        dotsOptions: {
          ...(qrCodeSettings.colors.dots.isSolid
            ? { color: qrCodeSettings.colors.dots.color }
            : {
                gradient: {
                  colorStops: gradientQR,
                },
              }),
          type: qrCodeSettings.types.dots.type,
        },
        backgroundOptions: {
          ...(qrCodeSettings.colors.background.isSolid
            ? { color: qrCodeSettings.colors.background.color }
            : {
                gradient: {
                  colorStops: gradientBackground,
                },
              }),
        },
        cornersSquareOptions: {
          ...(qrCodeSettings.colors.square.isSolid
            ? { color: qrCodeSettings.colors.square.color }
            : {
                gradient: {
                  colorStops: gradientBorder,
                },
              }),
          type: qrCodeSettings.types.corner.type,
        },
        cornersDotOptions: {
          ...(qrCodeSettings.colors.cornerDots.isSolid
            ? { color: qrCodeSettings.colors.cornerDots.color }
            : {
                gradient: {
                  colorStops: gradientCenter,
                },
              }),
          type: qrCodeSettings.types.cornerDots.type,
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: qrCodeSettings.logoSetting.margin,
          hideBackgroundDots: qrCodeSettings.logoSetting.backgrounddots,
        },
      });

      setQrCode(newQrCode);
      newQrCode.append(canvasElement);
    }
  }, [qrCodeSettings, canvasRef]); // Dependencies include qrCodeSettings and canvasRef to re-run the effect appropriately

  function handleDownloadClick(typeOfImg, qrName) {
    if (qrCode && qrCode.download) {
      qrCode
        .download({
          name: qrName,
          extension: typeOfImg,
        })
        .then(() => {})
        .catch((error) => {
          console.error("Error downloading QR code:", error);
        });
    }
  }

  return (
    <div className={liveDemo ? "live-demo" : "qr-home-container"}>
      {qrData ? (
        <div ref={canvasRef} className={liveDemo ? "qr-code-container-mobile" : "qr-code-container"}></div>
      ) : (
        <div className="qr-box-home">
          <img src={qrPlaceHolder} alt="QR Placeholder" className="opacity-3" />
        </div>
      )}
      {!liveDemo && (
        <div className="button-home-container">
          <Button variant="contained" color="primary" disabled={!qrCode} onClick={() => handleDownloadClick("png", qrCodeSettings.qrName)} style={{ color: "white", fontSize: ".8rem" }} className="button">
            Download PNG
          </Button>
          <Button variant="contained" style={{ color: "white", fontSize: ".8rem" }} disabled={!qrCode} onClick={() => handleDownloadClick("webp", qrCodeSettings.qrName)} className="button">
            Download WEBP
          </Button>
        </div>
      )}
    </div>
  );
};

export default QrGenerator;
