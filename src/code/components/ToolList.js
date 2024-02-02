import WifiIcon from "@mui/icons-material/Wifi";
import AddLinkIcon from "@mui/icons-material/AddLink";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SmsIcon from "@mui/icons-material/Sms";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ColorLensIcon from "@mui/icons-material/ColorLens"; // Corrected
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"; // Corrected
import Face4Icon from "@mui/icons-material/Face"; // Corrected
import CropOriginalIcon from "@mui/icons-material/CropOriginal"; // Corrected
import { lime, orange, pink, purple } from "@mui/material/colors";

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

export const options2 = [
  { label: "colors", icon: <ColorLensIcon /> },
  { label: "shapes", icon: <DashboardCustomizeIcon /> },
  { label: "log", icon: <Face4Icon /> }, // Note: Face4Icon may not exist in Material UI Icons. Please verify.
  { label: "frams", icon: <CropOriginalIcon /> },
];
