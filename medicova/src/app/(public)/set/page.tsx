"use client";

import { Box, Typography, Button, TextField } from "@mui/material";
import setPassword from "@/components/images/set-password.svg";
import Image from "next/image";
import Header from "@/components/Header/Header";
import SetForm from "./SetForm";

const Set = () => {
  const handleSubmit = (formData: {
    password: string;
    confirmePassword: string;
  }) => {
    console.log("Form Data Submitted:", formData);
    // Add logic to handle the form submission (e.g., API call)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          backgroundColor: "#f8faff", // Background color for the page
          padding: 3,
          maxWidth: 600, // Adjust the width of the box as needed
          width: "100%", // Ensures it takes full width until maxWidth is reached
          margin: "auto", // Centers the box horizontally
        }}
      >
        {/* Lock Icon */}
        <Image
          src={setPassword}
          alt="Lock Icon"
          style={{ width: "250px", height: "auto", marginBottom: 3 }}
        />

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 1 }}>
          Set a new password
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{ color: "#00000080", marginBottom: 1, textAlign: "center" }}
        >
          Must be at least 8 characts.
        </Typography>

        {/* Email Input */}

        <SetForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};

export default Set;
