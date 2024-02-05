import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AlarmIcon from '@mui/icons-material/Alarm';
import FaceIcon from '@mui/icons-material/Face';
import BuildIcon from '@mui/icons-material/Build';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ColorLensIcon from "@mui/icons-material/ColorLens"; // Corrected
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"; // Corrected
import Face4Icon from "@mui/icons-material/Face"; // Corrected
import CropOriginalIcon from "@mui/icons-material/CropOriginal"; // Corrected
import call from "../../Assets/icons/call.webp"
export const dymanicTools = [
  { icon: <HomeIcon />, heading: "Links", text: "This is the text for Home" },
  { icon: <SettingsIcon />, heading: "Text", text: "This is the text for Settings" },
  { icon: <AlarmIcon />, heading: "Alarm", text: "This is the text for Alarm" },
  { icon: <FaceIcon />, heading: "Profile", text: "This is the text for Profile" },
  { icon: <BuildIcon />, heading: "Tools", text: "This is the text for Tools" },
  { icon: <WifiIcon />, heading: "WiFi", text: "This is the text for WiFi" },
  { icon: <BatteryChargingFullIcon />, heading: "Battery", text: "This is the text for Battery" },
  { icon: <BluetoothIcon />, heading: "Bluetooth", text: "This is the text for Bluetooth" },
  { icon: <CameraAltIcon />, heading: "Camera", text: "This is the text for Camera" },
  { icon: <DirectionsBikeIcon />, heading: "Bike", text: "This is the text for Bike" }
];

export const staticTools = [
  { icon: <HomeIcon />, heading: "Link", text: "Open a URL" },
  { icon: <SettingsIcon />, heading: "Text", text: "Shows Text" },
  { icon: <AlarmIcon />, heading: "Wi-Fi", text: "Connects to a WiFi" },
  { icon: <FaceIcon />, heading: "Emil", text: "Send an Email with a Pre-Written Message" },
  { icon: <BuildIcon />, heading: "V-Card", text: "Saves your Contect Details" },
  { icon: <WifiIcon />, heading: "WhatsApp", text: "Send a WhatsApp Message" },
  { icon: <img src={call}  alt='call'/>, heading: "Call", text: "Make a Call" },
  { icon: <BluetoothIcon />, heading: "SMS", text: "Send a Text Message" },
  { icon: <CameraAltIcon />, heading: "PayPal", text: "Generate PayPal Transaction" },
];


export const options = [
  { label: "colors", icon: <ColorLensIcon /> },
  { label: "shapes", icon: <DashboardCustomizeIcon /> },
  { label: "log", icon: <Face4Icon /> }, // Note: Face4Icon may not exist in Material UI Icons. Please verify.
  { label: "frams", icon: <CropOriginalIcon /> },
];
