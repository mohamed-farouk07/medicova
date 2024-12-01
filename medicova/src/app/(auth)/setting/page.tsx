"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

const SettingsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Page Header */}
      {/* <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Settings
        </Typography>
        <Button variant="outlined">Back to homepage</Button>
      </Box> */}

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          mb: 4,
          borderBottom: "1px solid #ddd",
          "& .MuiTabs-indicator": {
            backgroundColor: "rgba(24, 93, 67, 1)", // Custom indicator color
          },
        }}
      >
        <Tab
          sx={{
            color: "rgba(124, 132, 147, 1)", // Inactive tab text color
            fontWeight: "600",
            fontSize: "14px",
            "&.Mui-selected": {
              color: "rgba(37, 50, 75, 1)", // Active tab text color
            },
          }}
          label="Login Details"
        />
        <Tab
          sx={{
            color: "rgba(124, 132, 147, 1)", // Inactive tab text color
            fontWeight: "600",
            fontSize: "14px",
            "&.Mui-selected": {
              color: "rgba(37, 50, 75, 1)", // Active tab text color
            },
          }}
          label="Users"
        />
      </Tabs>

      {/* Tab Panels */}
      {tabValue === 0 && (
        <Box>
          {/* Update Email Section */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Basic Information
              </Typography>
              <Typography sx={{ color: "rgba(81, 91, 111, 1)" }}>
                This is login information that you can update anytime.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "#000" }}
              >
                Update Email
              </Typography>
              <Typography sx={{ mb: 2, color: "rgba(81, 91, 111, 1)" }}>
                Update your email address to make sure it is safe
              </Typography>
              <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                jakegyll@email.com
              </Typography>
              <TextField
                fullWidth
                label="Update Email"
                placeholder="Enter your new email"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" sx={{ backgroundColor: "#006400" }}>
                Update Email
              </Button>
            </CardContent>
          </Card>
          {/* New Password Section */}
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "#000" }}
              >
                New Password
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Manage your password to make sure it is safe.
              </Typography>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  label="Old Password"
                  placeholder="Enter your old password"
                  type="password"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="New Password"
                  placeholder="Enter your new password"
                  type="password"
                />
              </Box>
              <Button variant="contained" sx={{ backgroundColor: "#006400" }}>
                Change Password
              </Button>
            </CardContent>
          </Card>
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          <Typography variant="h6">Users Section Content</Typography>
        </Box>
      )}

      {/* Close Account */}
      <Divider sx={{ mt: 4, mb: 2 }} />
      <Button
        sx={{
          color: "#d32f2f",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        Close Account
      </Button>
    </Box>
  );
};

export default SettingsPage;
