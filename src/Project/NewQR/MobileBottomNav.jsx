import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward, CheckCircleOutline } from '@mui/icons-material';

export default function FixedBottomNavigation({ prop }) {
  const [value, setValue] = React.useState(0);
  const { handleComplete, activeStep, completed, completedSteps, totalSteps, handleBack, showMobileQR, setShowMobileQR } = prop;
  const handleQR = ()=>{
    setShowMobileQR(!showMobileQR)
  }

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<Button
                color="primary"
                variant="outlined"
                disabled={activeStep === 0 || completedSteps() === totalSteps()}
                onClick={handleBack}
                sx={{ mr: 1 }}
                startIcon={<ArrowBack />}
                className="button"
              >
                Back
              </Button>} />
          <BottomNavigationAction icon={<QrCodeIcon />} onClick={handleQR}/>

          {/* Custom Button as the third action */}
          <BottomNavigationAction
            icon={
              <Button
                onClick={handleComplete}
                variant="contained"
                color={completedSteps() === totalSteps() - 1 ? 'success' : 'primary'}
                endIcon={completedSteps() === totalSteps() - 1 ? null : <ArrowForward />}
                className="button"
              >
                {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Next'}
              </Button>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
