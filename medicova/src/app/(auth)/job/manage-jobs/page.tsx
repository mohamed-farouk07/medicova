"use client";
import React from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import JobCard from "@/components/UI/job-card";

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
          <JobCard key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default ManageJobs;
