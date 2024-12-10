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

const SideBar = ({ isOpen }: { isOpen?: boolean }) => {
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);
  const [openCvSearch, setOpenCvSearch] = useState(false);

  const toggleDashboard = () => setOpenDashboard(!openDashboard);
  const toggleJobs = () => setOpenJobs(!openJobs);
  const toggleCvSearch = () => setOpenCvSearch(!openCvSearch);

  const classMobileOpen =
    "fixed top-[100px] left-0 z-40 h-[calc(100vh-100px)] translate-x-0 bg-[#f7f7fd] overflow-hidden duration-300 w-60 ease-in-out shadow-2xl text-[#7C8493CC]";
  const classNormal =
    "fixed top-[100px] left-0 translate-x-[-100%] md:translate-x-0 z-40 h-[calc(100vh-100px)] bg-[#f7f7fd] overflow-hidden w-14 text-[#7C8493CC] duration-300 ease-in-out hover:w-60 md:block lg:sticky lg:w-60 shadow-2xl";
  return (
    <Box className={isOpen ? classMobileOpen : classNormal}>
      <Box className="lg:mt-0 w-60 overflow-y-auto max-h-[calc(100vh-100px)] overflow-x-hidden pt-5 scroll-bar-hidden">
        <List>
          {/* Dashboard */}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              onClick={toggleDashboard}
            >
              <ListItemIcon>
                <DashboardIcon sx={{ color: "#515B6F", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: "14px",
                    fontWeight: "bold",
                  },
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
                  sx={{
                    pl: 7,
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Overview" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/dashboard/analytics"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/dashboard/reports"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Reports" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Company Profile */}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              component={Link}
              href="/profile"
            >
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
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              onClick={toggleJobs}
            >
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
                  href="/job/manage-jobs"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Manage Jobs" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/job/posted"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Posted Jobs" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/jobs/applications"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Applications" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/jobs/analytics"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Job Analytics" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* CV Search */}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              onClick={toggleCvSearch}
            >
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
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Search Candidates" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/cv-search/saved"
                  sx={{
                    pl: 7,
                    "&:hover": {
                      backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                    },
                  }}
                >
                  <ListItemText primary="Saved Searches" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Other Menu Items */}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              component={Link}
              href="/billing"
            >
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
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              component={Link}
              href="/reports"
            >
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
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              component={Link}
              href="/chat"
            >
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
          sx={{
            ml: 2,
            color: "#9E9E9E",
            fontWeight: 500,
          }}
        >
          SETTINGS
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              component={Link}
              href="/setting"
            >
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
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 240, 235, 1)", // Background color on hover
                },
              }}
              component={Link}
              href="/help"
            >
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
