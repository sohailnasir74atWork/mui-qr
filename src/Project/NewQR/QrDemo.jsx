import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mobileFrame from "../../Assets/mobileFrame.webp"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ ph: 3 }}>
          <Typography sx={{textAlign:'center', display:'flex'}}>{children}</Typography>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function QrDemo() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <AppBar position="static" sx={{boxShadow:'none'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ bgcolor:'var(--background-color)', '& .MuiTabs-indicator': {
            display: 'none',
          },'& .MuiTab-root': {
            padding:'6px 12px',
            // Adjust padding and font size to make the tabs smaller
            fontSize: '0.7rem', // Reduce font size
            minHeight:'40px'
          }, '& .MuiTabs-flexContainer':{width:'300px', margin:'30px auto 0px'}}}
        >
          <Tab label="Moile Preview" {...a11yProps(0)} sx={{margin:'10px', backgroundColor:'var(--darkgreen-color)', borderRadius:'50px'}}/>
          <Tab label="destop preview" {...a11yProps(1)} sx={{margin:'10px', backgroundColor:'var(--darkgreen-color)', borderRadius:'50px'}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="types-of-qr-mobile-demo">
        <div className="mobile-frame"><img src={mobileFrame} alt="Mobile Frame" style={{width:'100%', height:'100%'}}/><div className="overlay"></div></div>
    
    
    
        
        </div>   
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="types-of-qr-mobile-demo">
        <div className="mobile-frame"><img src={mobileFrame} alt="Mobile Frame" style={{width:'100%', height:'100%'}}/><div className="overlay"></div></div>
    
    
    
        
        </div>   
        </TabPanel>
        </SwipeableViews>
    </Box>
  );
}