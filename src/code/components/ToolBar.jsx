import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { qrTypes } from "./ToolList";
import { Typography } from "@mui/material";

const drawerWidth = 150;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List disablePadding>
          {qrTypes.map((item, index) => (
            <>
              <ListItem key={item} disablePadding>
                <ListItemButton
                  style={{ display: "block", textAlign: "center" }}
                >
                  <ListItemIcon style={{ minWidth: "0px", fontSize: "40" }}>
                    {item.content[1]}
                  </ListItemIcon>
                  <ListItemText />
                  <Typography style={{ fontSize: "10px" }}>
                    {item.content[0]}
                  </Typography>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}