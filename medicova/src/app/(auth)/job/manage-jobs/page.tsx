"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Switch,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import TuneIcon from "@mui/icons-material/Tune";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Controls from "@/components/UI/Controls";

const ManageJobs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ padding: "40px" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search your job by title"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{
            width: "40%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
            },
          }}
        />

        {/* Filter Section */}
        <Box sx={{ display: "flex", gap: 5 }}>
          <TextField
            type="date"
            sx={{
              "& input": { padding: "10px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
            variant="outlined"
          />
          {/* Filter Button with Background Color and Border Radius */}
          <Button
            variant="outlined"
            startIcon={<TuneIcon sx={{ color: "#2EAE7D" }} />}
            sx={{
              textTransform: "none",
              color: "#000",
              backgroundColor: "#eee",
              borderRadius: "25px",
              borderColor: "#ddd",
            }}
          >
            Filter
          </Button>
        </Box>
      </Box>

      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          marginBottom: "20px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#185D43", // Active tab indicator color
          },
          "& .MuiTab-root": {
            textTransform: "none",
            color: "rgba(0, 0, 0, 0.5)",
          },
          "& .Mui-selected": {
            color: "#185D43!important",
            fontWeight: "bold",
          },
        }}
      >
        <Tab label="All (20)" />
        <Tab label="Active (5)" />
        <Tab label="Closed (12)" />
        <Tab label="Expired (1)" />
        <Tab label="Draft (2)" />
      </Tabs>

      {/* Job Listings */}
      <Grid container spacing={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
              }}
            >
              {/* Main Content Area */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                {/* Image Section */}
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="https://via.placeholder.com/100"
                    alt="Consultant"
                    sx={{ width: 100, height: 100, borderRadius: 2 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ marginTop: 1, color: "#00000080" }}
                  >
                    since 6 days
                  </Typography>
                </Box>

                {/* Info Section */}
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h6">Consultant Cardiology</Typography>
                    <IconButton size="small" aria-label="edit">
                      <EditIcon sx={{ fontSize: 18, color: "#185D43" }} />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    Full Time
                    <span
                      style={{
                        color: "#FFAE35",
                        margin: "0 4px",
                      }}
                    >
                      •
                    </span>
                    Onsite
                    <span style={{ color: "#FFAE35", margin: "0 4px" }}>•</span>
                    Master’s Degree
                    <span style={{ color: "#FFAE35", margin: "0 4px" }}>•</span>
                    Cardio-vascular
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Male and Female
                    <span style={{ color: "#FFAE35", margin: "0 4px" }}>•</span>
                    Consultant
                    <span style={{ color: "#FFAE35", margin: "0 4px" }}>•</span>
                    6 Days ago
                    <span style={{ color: "#FFAE35", margin: "0 4px" }}>•</span>
                    20000 EGP
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                    <Chip
                      sx={{ color: "#185D43" }}
                      label="Healthcare"
                      variant="outlined"
                    />
                    <Chip
                      sx={{ color: "#185D43" }}
                      label="Doctors"
                      variant="outlined"
                    />
                    <Chip
                      sx={{ color: "#185D43" }}
                      label="Egypt"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
              {/* Actions Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 2,
                }}
              >
                {/* Switch and Icon Buttons Row */}

                <Controls />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageJobs;
