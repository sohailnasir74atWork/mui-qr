import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { options } from './ToolList';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Face4Icon from '@mui/icons-material/Face4';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { blue, green, lime, orange, pink, purple, teal } from '@mui/material/colors';
import Links from './InputComponents/Links';
import ColorHandling from './Options/ColorHandling';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddRoundedIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({

  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({prop}) {
    const [expanded, setExpanded] = React.useState('panel1');
    const {setQrCodeSettings, qrCodeSettings } = prop
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <QrCodeIcon sx={{ color: blue[800] }}/>
            <Typography style={{ paddingLeft: '10px' }}>Generate QR</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Links prop={{setQrCodeSettings, qrCodeSettings}}/>
          </AccordionDetails>
        </Accordion>
  
        {/* Repeat for each option, changing the panel number, icon, and label as needed */}
        {/* Example for the second panel */}
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <ColorLensIcon sx={{ color: pink[500] }}/>
            <Typography style={{ paddingLeft: '10px' }}>Colors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ColorHandling prop={{setQrCodeSettings, qrCodeSettings  }}/>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <DashboardCustomizeIcon sx={{ color: purple[800] }}/>
            <Typography style={{ paddingLeft: '10px' }}>Shape & Forms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <ColorHandling prop={{ setBackgroundColor, backgroundColor, qrColor, setQrColor, setSolidColorBackground, solidColorBackground, setSolidColorQR, solidColorQR }}/> */}
            COMMING SOON
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <ColorLensIcon sx={{ color: pink[500] }}/>
            <Typography style={{ paddingLeft: '10px' }}>LOGO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <ColorHandling prop={{ setBackgroundColor, backgroundColor, qrColor, setQrColor, setSolidColorBackground, solidColorBackground, setSolidColorQR, solidColorQR }}/> */}
            COMMING SOON
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <ColorLensIcon sx={{ color: pink[500] }}/>
            <Typography style={{ paddingLeft: '10px' }}>Frames</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <ColorHandling prop={{ setBackgroundColor, backgroundColor, qrColor, setQrColor, setSolidColorBackground, solidColorBackground, setSolidColorQR, solidColorQR }}/> */}
            COMMING SOON
          </AccordionDetails>
        </Accordion>
        {/* Continue this pattern for panels 3, 4, and 5 */}
      </>
    );
  }