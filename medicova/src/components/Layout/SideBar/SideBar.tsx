import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import PaymentIcon from "@mui/icons-material/Payment";
import ReportIcon from "@mui/icons-material/Assessment";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "240px",
        height: "100%",
        backgroundColor: "#F8F9FB",
        color: "#515B6F",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ padding: "16px" }}>
        {/* Main Menu */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Company profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="My Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="CV Search" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaymentIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Billing & Subscription" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReportIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
        </List>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Settings */}
        <Typography
          variant="caption"
          sx={{ ml: 2, color: "#9E9E9E", fontWeight: 500 }}
        >
          SETTINGS
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpIcon sx={{ color: "#515B6F" }} />
              </ListItemIcon>
              <ListItemText primary="Help Center" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
