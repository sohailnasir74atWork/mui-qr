import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import qrPlaceHolder from "../Assets/qrPlaceHolder.svg";
import { Button } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
// import { darkPink, lightPink } from "./Veriables";
import { parseLinearGradient } from "./gradientParser";

const QrGenerator = ({ prop }) => {
  const { qrCodeSettings } = prop;
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
  function handleDownloadClick(typeOfImg) {
    if (qrCode && qrCode.download) {
      qrCode
        .download({
          name: "MyQRCode",
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
        width: 300,
        height: 300,
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
    <div className="qr-home-container">
      <div ref={canvasRef} style={{ display: "none" }}></div>
      {data && qrImageUrl && (
        <div className="qr-box-home">
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
      <div className="button-home-container">
        <Button
          variant="contained"
          color="primary"
          disabled={!data}
          onClick={() => handleDownloadClick("png")}
          style={{ color: "white", fontSize: ".8rem" }}
          className="button"
        >
          Download PNG
        </Button>

        <Button
          variant="contained"
          style={{ color: "white", fontSize: ".8rem" }}
          disabled={!data}
          onClick={() => handleDownloadClick("webp")}
          className="button"
        >
          Download WEBP
        </Button>
      </div>
      <div className="button-stats-home-container">
        {/* <Button variant="contained" startIcon={<LeaderboardIcon />}    style={{ width: '100%' }}
>
  number of scans
</Button> */}
      </div>
    </div>
  );
};

export default QrGenerator;
