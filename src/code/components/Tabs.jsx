import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomizedAccordions from "./Accordion";
import { qrTypes } from "./ToolList";

const backgroundPurple = '#BEADFA'
const lightPurple = "#B931FC"; // Example light purple color
const darkPurple = "purple"; // Example dark purple color

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}


export default function VerticalTabs({ prop }) {
  const [value, setValue] = React.useState(0);
  const { setQrCodeSettings, qrCodeSettings, setActiveTool } = prop
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    // Detect mobile screen size
    const detectMobileScreen = () => {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const isMobile = screenWidth < 768; // Adjust the threshold as needed
      return isMobile;
    };

    const updateMobileState = () => {
      setIsMobile(detectMobileScreen());
    };

    // Run the detection on component mount
    updateMobileState();

    window.addEventListener('resize', updateMobileState);

    return () => {
      window.removeEventListener('resize', updateMobileState);
    };
  }, []); // The empty dependency array ensures the effect runs only on mount and unmount

  const handleToolTypeClick = (event, newValue) => {
    setValue(newValue);
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      inputData: { ...prevSettings.inputData, url: '' },
      clearInput: true, // Update clearInput separately
    }));
  };

  return (
    <div
      className="responsive-flex tab-height"
      style={{backgroundColor:backgroundPurple }}

    >
      <Tabs
        variant="scrollable"
        orientation={!isMobile ? 'vertical' : ''}
        value={value}
        onChange={handleToolTypeClick}
        aria-label="Vertical tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: darkPurple, // Active tab indicator color
          },
        }}
      >
        {qrTypes.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            {...a11yProps(index)}
            sx={{
              backgroundColor: value === index ? darkPurple : lightPurple, // Active/Inactive tab background color
              color: 'white', // Text color
              '&.Mui-selected': { // Additional styles for selected (active) tab
                color: 'white',
              },
            }}
          />
        ))}
      </Tabs>
      <div style={{ width: "100%" }}>
        {qrTypes.map((tab, index) => (
          <TabPanel key={index} value={value} index={index} style={{paddingTop:'8px'}}
          >
            <CustomizedAccordions prop={{ setQrCodeSettings, qrCodeSettings }} />
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
