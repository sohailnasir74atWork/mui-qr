import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { parseLinearGradient } from "./gradientParser";
import qrPlaceHolder from "../Assets/qrPlaceHolder.svg";
import { Button } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const QrGenerator = ({ prop }) => {
  const {  qrCodeSettings } = prop;
  const [qrCode, setQrCode] = useState(null);
  const gradientBackground = parseLinearGradient(qrCodeSettings.backgroundColor);
  const gradientBorder = parseLinearGradient(qrCodeSettings.borderColor);
  //   const gradientQR = parseLinearGradient(qrCodeSettings.qrColor);

  const gradientQR = parseLinearGradient(qrCodeSettings.qrColor);
  const gradientCenter = parseLinearGradient(qrCodeSettings.centerColor);


  const canvasRef = useRef(null);
  const data = qrCodeSettings.inputData.url
  console.log(data)
  function handleDownloadClick(typeOfImg) {
    if (qrCode && qrCode.download) {
      qrCode
        .download({
          name: "MyQRCode",
          extension: typeOfImg,
        })
        .then(() => { })
        .catch((error) => { });
    } else {
      console.error("Download function not available in QRCodeStyling.");
    }
  }

  useEffect(() => {
    if (data !== null) {
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
          ...(qrCodeSettings.solidColorQR
            ? { color: qrCodeSettings.qrColor }
            : {
              gradient: {
                colorStops: gradientQR,
              },
            }),
        },
        backgroundOptions: {
          ...(qrCodeSettings.solidColorBackground
            ? { color: qrCodeSettings.backgroundColor }
            : {
              gradient: {
                colorStops: gradientBackground,
              },
            }),
        },
        cornersSquareOptions: {
          ...(qrCodeSettings.solidBorderColor
            ? { color: qrCodeSettings.borderColor }
            : {
              gradient: {
                colorStops: gradientBorder,
              },
            }),
        },
        cornersDotOptions: {
          ...(qrCodeSettings.solidCenterColor
            ? { color: qrCodeSettings.centerColor }
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

      setQrCode(newQrCode);
      newQrCode.append(canvasElement);
    }
  }, [data, canvasRef, qrCodeSettings.backgroundColor, qrCodeSettings.qrColor, qrCodeSettings.borderColor, qrCodeSettings.centerColor]);

  return (
    <div className="qr-home-container">
      <div ref={canvasRef}></div>
      {!data && <img
        src={qrPlaceHolder}
        alt="qrSvgPlaceHolder"
        className="opacity-3"
      />}
      <div className="button-home-container">
        <Button
          variant="contained" color="success"
          disabled={!data}
          onClick={() => handleDownloadClick("png")}
        >
          Download   PNG
        </Button>

        <Button
          variant="contained" color="secondary"
          disabled={!data}
          onClick={() => handleDownloadClick("webp")}
        >
          Download  WEBP
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