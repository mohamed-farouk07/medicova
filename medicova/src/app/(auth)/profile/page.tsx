"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";

const ProfilePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Vertically center all child elements
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar
            src="/path/to/logo.png" // Replace with the actual logo path
            sx={{
              width: 100,
              height: 100,
              borderRadius: "1px", // Square avatar
            }}
          />
          {/* Edit Icon */}
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              bottom: -10,
              right: 0,
              backgroundColor: "#fff",
              width: 25,
              height: 25,
              boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
        {/* Avatar and Text Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Ensures vertical alignment
            gap: 2,
          }}
        >
          {/* Avatar with Edit Icon */}

          {/* Centered Typographies */}
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Modicova Medical Community
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
              Healthcare: Medical Services and Education healthcare
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Hospital
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Egypt, Cairo
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                11-50 employees
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            size="small"
            sx={{
              border: 1,
              borderColor: "grey.300",
              borderRadius: 0,
              color: "rgba(46, 174, 125, 1)",
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              border: 1,
              borderColor: "grey.300",
              borderRadius: 0,
              color: "rgba(46, 174, 125, 1)",
            }}
          >
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Left + Center Sections */}
        <Grid container item xs={12} md={10} spacing={3}>
          {/* Left Section */}
          <Grid item xs={12}>
            <Card sx={{ padding: "16px" }}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                About Company :
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                A healthcare company refers to any business or organization that
                provides products or services related to the maintenance,
                improvement, or management of health.
              </Typography>
            </Card>
          </Grid>

          {/* Center Section */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Company Main Information
                </Typography>

                {/* Form Fields */}
                <Box sx={{ marginBottom: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Company Sector</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="Healthcare">Healthcare</MenuItem>
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Company Type</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="Hospital">Hospital</MenuItem>
                      <MenuItem value="Clinic">Clinic</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <FormControl component="fieldset">
                    <RadioGroup row defaultValue="private">
                      <FormControlLabel
                        value="private"
                        control={<Radio />}
                        label="Private"
                      />
                      <FormControlLabel
                        value="governmental"
                        control={<Radio />}
                        label="Governmental"
                      />
                      <FormControlLabel
                        value="profit"
                        control={<Radio />}
                        label="Profit Org"
                      />
                      <FormControlLabel
                        value="non-profit"
                        control={<Radio />}
                        label="Non-Profit Org"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <TextField fullWidth label="Country" defaultValue="Egypt" />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <TextField fullWidth label="City" defaultValue="Cairo" />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Company Size</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="1-10">1-10 employees</MenuItem>
                      <MenuItem value="11-50">11-50 employees</MenuItem>
                      <MenuItem value="51-200">51-200 employees</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <TextField fullWidth label="Email" defaultValue="" />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    fullWidth
                    label="Year Founded"
                    defaultValue="2016"
                  />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    fullWidth
                    label="Company Phone Number"
                    defaultValue="+20"
                  />
                </Box>

                {/* Centered Save Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 4,
                  }}
                >
                  <Button
                    sx={{
                      width: "204.16px",
                      height: "46px",
                      background: "linear-gradient(180deg, #2EAE7D, #134834)",
                      color: "#fff",
                      textTransform: "capitalize",
                      fontWeight: "600",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={2}>
          <Card sx={{ padding: "16px", marginBottom: 3 }}>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              To find better candidates, make your job description detailed, use
              relevant keywords, and add screening questions to your job post.
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Post a job for free
            </Button>
          </Card>
          <Card sx={{ padding: "16px" }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Social Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                startIcon={<InstagramIcon />}
                sx={{ justifyContent: "flex-start" }}
              >
                Instagram
              </Button>
              <Button
                startIcon={<TwitterIcon />}
                sx={{ justifyContent: "flex-start" }}
              >
                Twitter
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
