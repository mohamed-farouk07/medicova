"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PaymentIcon from "@mui/icons-material/Payment";
import ReportIcon from "@mui/icons-material/Assessment";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

const SideBar = () => {
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);
  const [openCvSearch, setOpenCvSearch] = useState(false);

  const toggleDashboard = () => setOpenDashboard(!openDashboard);
  const toggleJobs = () => setOpenJobs(!openJobs);
  const toggleCvSearch = () => setOpenCvSearch(!openCvSearch);

  return (
    <Box
      sx={{
        width: "240px",
        height: "100%",
        backgroundColor: "#F8F9FB",
        boxShadow: "5px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ padding: "16px", color: "rgba(0, 0, 0, 0.5)" }}>
        <List>
          {/* Dashboard */}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDashboard}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Dashboard"
              />
              {openDashboard ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/dashboard/overview"
                  sx={{ pl: 4, fontSize: "16px" }}
                >
                  <ListItemText primary="Overview" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/dashboard/analytics"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/dashboard/reports"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Reports" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Company Profile */}
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/company-profile">
              <ListItemIcon>
                <BusinessIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Company Profile"
              />
            </ListItemButton>
          </ListItem>

          {/* My Jobs */}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleJobs}>
              <ListItemIcon>
                <WorkIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="My Jobs"
              />
              {openJobs ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openJobs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/jobs/posted"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Posted Jobs" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/jobs/applications"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Applications" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/jobs/analytics"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Job Analytics" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* CV Search */}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleCvSearch}>
              <ListItemIcon>
                <SearchIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="CV Search"
              />
              {openCvSearch ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openCvSearch} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/cv-search/candidates"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Search Candidates" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/cv-search/saved"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Saved Searches" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Other Menu Items */}
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/billing">
              <ListItemIcon>
                <PaymentIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Billing & Subscription"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/reports">
              <ListItemIcon>
                <ReportIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Report"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/chat">
              <ListItemIcon>
                <ChatIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Chat"
              />
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
            <ListItemButton component={Link} href="/settings">
              <ListItemIcon>
                <SettingsIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Settings"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/help">
              <ListItemIcon>
                <HelpIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontSize: "14px", fontWeight: "bold" },
                }}
                primary="Help Center"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
