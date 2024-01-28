import WifiIcon from "@mui/icons-material/Wifi";
import AddLinkIcon from "@mui/icons-material/AddLink";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SmsIcon from "@mui/icons-material/Sms";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


export const qrTypes = [
  { label: "url", icon: <AddLinkIcon /> },
  { label: "text", icon: <TextFieldsIcon /> },
  { label: "wifi", icon: <WifiIcon /> },
  { label: "email", icon: <AttachEmailIcon /> },
  { label: "sms", icon: <SmsIcon /> },
  { label: "call", icon: <AddIcCallIcon /> },
  { label: "v-card", icon: <CreditCardIcon /> },
  { label: "whatsapp", icon: <WhatsAppIcon /> },
];

// export const options = [
//   { label: "Generate QR", icon: <QrCodeIcon sx={{ color: teal[800] }}/> },
//   { label: "colors", icon: <ColorLensIcon sx={{ color: pink[500] }}/> },
//   { label: "shapes", icon: <DashboardCustomizeIcon sx={{ color: purple[500] }}/> },
//   { label: "log", icon: <Face4Icon sx={{ color: orange[500] }}/> },
//   { label: "frams", icon: <CropOriginalIcon sx={{ color: lime[900] }}/> },
//   ];

