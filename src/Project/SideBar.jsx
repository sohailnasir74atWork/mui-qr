import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Button,
  Step,
  StepButton,
  Stepper,
  useMediaQuery,
} from "@mui/material";
import TypesOfQR from "./NewQR/TypesOfQR.jsx";
import InputsSection from "./NewQR/InputsSection.jsx";
import { sideBar } from "./NewQR/TypesofQRList.js";
import {
  ArrowBack,
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
  ArrowForward,
} from "@mui/icons-material";
import FixedBottomNavigation from "./NewQR/MobileBottomNav.jsx";
import MyQr from "./MyQr.jsx";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    // borderRight: `100px solid rgba(0, 0, 0, 0.1)`, // Adjust the width and color as needed
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: "0px",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      position: "absolute",
      zIndex: -3,
    },
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const steps = ["Type of QR Code", "Content", "QR Design"];
export default function SideBar({ prop }) {
  const {
    qrCodeSettings,
    setQrCodeSettings,
    activeTool,
    setActiveTool,
    isMobile,
  } = prop;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [showMobileQR, setShowMobileQR] = React.useState(false);

  const handleComplete = ()=>{
    setSelectedIndex(3)
  }
   const handleNext = () => {
        setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
   const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (index) => {
    if (isMobile) {
      setOpen(false);
    }
    setSelectedIndex(index);
    setActiveStep(0);
   };

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return activeStep > 2 ? (
          ""
        ) : (
          <TypesOfQR
            prop={{
              handleNext,
              activeStep,
              qrCodeSettings,
              setQrCodeSettings,
              activeTool,
              setActiveTool,
              isMobile,
              showMobileQR,
              setShowMobileQR,
            }}
          />
        );
      case 1:
        return <Typography paragraph>Bulk QR Generater</Typography>;
      case 2:
        return <Typography paragraph>Templates</Typography>;
      // ... Add cases for other indexes
      default:
        return <MyQr />;
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#FAF9F6" }}>
        <Toolbar>
          {!isMobile && (
            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color="inherit">{!isMobile && label}</StepButton>
              </Step>
            ))}
          </Stepper>
          {isMobile && (
            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                position: "absolute",
                right: "10px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  position: "fixed",
                  right: "20px",
                }}
              >
              
                  {activeStep !== 0 && <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    startIcon={<ArrowBack />}
                    className="button"
                    disabled={activeStep === 0}

                  >
                    Back
                  </Button>}
              
                <Box sx={{ flex: "1 1 auto" }} />

            
                  <Button
                    onClick={activeStep < 2 ? handleNext : handleComplete}
                    variant="contained"
                    color={activeStep === 2 ? "success" : "primary"}
                    endIcon={activeStep === 2 ? "" : <ArrowForward />}
                    className="button"
                    disabled={activeStep < 2}
                  >
                    {activeStep === 2 ? "Finish" : "Next"}
                  </Button>
              
              </Box>
            )}
            {isMobile && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  position: "fixed",
                  right: "50px",
                }}
              >
                {activeStep !== 0 && <IconButton
                  color="primary"
                  variant="outlined"
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  className="button"
                >
                  <ArrowCircleLeftRounded sx={{fontSize : "27px"}}/>
                </IconButton>}
                <Box sx={{ flex: "1 1 auto" }} />
                {activeStep !== 1 && activeStep !== 0 && <IconButton
                      onClick={activeStep < 2 ? handleNext : handleComplete}
                      variant="contained"
                      color={
                        activeStep === 2
                          ? "success"
                          : "primary"
                      }
                      endIcon={
                        activeStep === 2 ? (
                          ""
                        ) : (
                          <ArrowForward />
                        )
                      }
                      className="button"
                    >
                      <ArrowCircleRightRounded sx={{fontSize: "27px"}}/>
                    </IconButton>
                  }
              </Box>
            )}
          </React.Fragment>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ position: isMobile ? "absolute" : "" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBar.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  borderRight:
                    selectedIndex === index
                      ? "3px solid var(--darkgreen-color) !important"
                      : "", // Change background color for selected item
                  color:
                    selectedIndex === index
                      ? "var(--darkgreen-color) !important"
                      : "", // Change
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      selectedIndex === index
                        ? "var(--darkgreen-color) !important"
                        : "", // Change
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.heading}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <div className={isMobile && open ? "overlay-sidebar" : "hide"}></div>
        <DrawerHeader prop={{ isMobile }} />
        {renderContent()}
        {activeStep > 1 && isMobile && (
          <FixedBottomNavigation
            prop={{
              handleNext,
              activeStep,
              qrCodeSettings,
              setQrCodeSettings,
              activeTool,
              setActiveTool,
              isMobile,
              handleBack,
              showMobileQR,
              setShowMobileQR,
              qrCodeSettings,
            }}
          />
        )}
      </Box>
    </Box>
  );
}
