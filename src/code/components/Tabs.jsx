import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomizedAccordions from "./Accordion";
import { qrTypes } from "./ToolList";

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


export default function VerticalTabs({prop}) {
  const [value, setValue] = React.useState(0);
  const {setQrCodeSettings, qrCodeSettings, setActiveTool} = prop

  const handleToolTypeClick = (event, newValue) => {
    setValue(newValue);
    setQrCodeSettings((prevSettings) => ({
      ...prevSettings,
      inputData: { ...prevSettings.inputData, url: '' },
      clearInput: true, // Update clearInput separately
    }));
  };
  
    return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        maxHeight: "500px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleToolTypeClick}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {qrTypes.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <div style={{ width: "100%" }}>
        {qrTypes.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <span className="heading-3">Start Customizing</span>
            <br/>
            <CustomizedAccordions prop={{setQrCodeSettings, qrCodeSettings}}/>
          </TabPanel>
        ))}
      </div>
    </Box>
  );
}
