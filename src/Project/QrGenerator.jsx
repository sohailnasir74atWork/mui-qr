import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import qrPlaceHolder from "../Assets/qrPlaceHolder.svg";
import { Button } from "@mui/material";
import { parseLinearGradient } from "./gradientParser";

const QrGenerator = ({ prop }) => {
  const { qrCodeSettings, liveDemo } = prop;
  const [qrCode, setQrCode] = useState(null);
  const [qrImageUrl, setQrImageUrl] = useState("");
  const gradientBackground = parseLinearGradient(
    qrCodeSettings.colors.background.color
  );
  const gradientBorder = parseLinearGradient(
    qrCodeSettings.colors.square.color
  );
  const gradientQR = parseLinearGradient(qrCodeSettings.colors.dots.color);
  const gradientCenter = parseLinearGradient(
    qrCodeSettings.colors.cornerDots.color
  );

  const canvasRef = useRef(null);
  const data = qrCodeSettings.inputData.url;

  console.log(qrCodeSettings);
  function handleDownloadClick(typeOfImg, qrName) {
    if (qrCode && qrCode.download) {
      qrCode
        .download({
          name: qrName,
          extension: typeOfImg,
        })
        .then(() => {})
        .catch((error) => {});
    } else {
      console.error("Download function not available in QRCodeStyling.");
    }
  }

  useEffect(() => {
    if (data !== null && data !== "") {
      const canvasElement = canvasRef.current;
      while (canvasElement.firstChild) {
        canvasElement.removeChild(canvasElement.firstChild);
      }

      const newQrCode = new QRCodeStyling({
        width: qrCodeSettings.size.width,
        height: qrCodeSettings.size.height,
        data: data,
        // image: img,
        dotsOptions: {
          ...(qrCodeSettings.colors.dots.isSolid
            ? { color: qrCodeSettings.colors.dots.color }
            : {
                gradient: {
                  colorStops: gradientQR,
                },
              }),
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
        },
        cornersDotOptions: {
          ...(qrCodeSettings.colors.cornerDots.isSolid
            ? { color: qrCodeSettings.colors.cornerDots.color }
            : {
                gradient: {
                  colorStops: gradientCenter,
                },
              }),
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
        },
      });
      setTimeout(() => {
        setQrImageUrl(
          canvasElement.querySelector("canvas").toDataURL("image/png")
        );
      }, 1);

      setQrCode(newQrCode);
      newQrCode.append(canvasElement);
    }
  }, [data, canvasRef, qrCodeSettings]);

  return (
    <div className={liveDemo ? "live-demo" : "qr-home-container"}>
      <div ref={canvasRef} style={{ display: "none" }}></div>
      {data && qrImageUrl && (
        <div className={liveDemo ? "qr-box-home-live-demo" :"qr-box-home"}>
          <img src={qrImageUrl} alt="QR Code" className="opacity-1" />
        </div>
      )}{" "}
      {!data && (
        <div className="qr-box-home">
          <img
            src={qrPlaceHolder}
            alt="qrSvgPlaceHolder"
            className="opacity-3"
          />
        </div>
      )}
     { !liveDemo && <div className="button-home-container">
        <Button
          variant="contained"
          color="primary"
          disabled={!data}
          onClick={() => handleDownloadClick("png", qrCodeSettings.qrName)}
          style={{ color: "white", fontSize: ".8rem" }}
          className="button"
        >
          Download PNG
        </Button>

        <Button
          variant="contained"
          style={{ color: "white", fontSize: ".8rem" }}
          disabled={!data}
          onClick={() => handleDownloadClick("webp", qrCodeSettings.qrName)}
          className="button"
        >
          Download WEBP
        </Button>
      </div>}
    </div>
  );
};

export default QrGenerator;
