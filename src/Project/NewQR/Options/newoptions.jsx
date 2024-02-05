import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { darkPink, lightPink } from "../Veriables";
import { options } from "../TypesofQRList";
import CustomizedAccordions from "../Accordion";

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
  const { setQrCodeSettings, qrCodeSettings } = prop
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

  };

  return (
    <div
      className="responsive-flex-recerse tab-height"
    //   style={{backgroundColor:'#ff00a9' }}


    >
      <Tabs
        // variant="scrollable"
        orientation={!isMobile ? 'vertical' : ''}
        value={value}
        onChange={handleToolTypeClick}
        aria-label="Vertical tabs example"
        
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none', // Active tab indicator color
          },
          '& .css-lfwcke-MuiTabs-flexContainer': {
            alignItems:"center"
          },
          
        }}
      >
        {options.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            {...a11yProps(index)}
            sx={{
              backgroundColor: value === index ? darkPink : lightPink, // Active/Inactive tab background color
              color: 'white', // Text color
              margin: '3px',
              borderRadius: '10px',
              boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)', // Customize box shadow for selected tab
              fontSize:'.7rem',
              '& .css-lfwcke-MuiTabs-flexContainer': {
                alignItems:"center"
              },
              '& .MuiTab-iconWrapper': {
                fontSize: '2.5rem', // Adjust the size as needed
              },
              
            
              '&.Mui-selected': { // Additional styles for selected (active) tab
                color: 'white',

              },
            }}
          />
        ))}
      </Tabs>
      <div style={{ width: "360px" }}>
        {options.map((tab, index) => (
          <TabPanel key={index} value={value} index={index} >
            <span className="heading-4" style={{display:'flex', justifyContent:'flex-end', color:darkPink}}           
>COLOR SETTINGS</span>
<br/>
<br/>
           <div>            <CustomizedAccordions prop={{ setQrCodeSettings, qrCodeSettings }} />
</div>
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
