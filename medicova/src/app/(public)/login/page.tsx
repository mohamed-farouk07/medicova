import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import cover from "@/components/images/login.svg"; // Adjust the import path as needed
import Image from "next/image";
import Header from "@/components/Header/Header"; // Adjust the import path

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full height of the viewport
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flex: 1, // Ensure the main content takes the remaining space
        }}
      >
        {/* Left Section: Photo */}
        <Box
          sx={{
            flex: 1, // Take 50% of the space
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            src={cover}
            alt="Login Cover"
            objectFit="cover" // Keeps the aspect ratio
          />
        </Box>

        {/* Right Section: Login Form */}
        <Box
          sx={{
            flex: 1, // Take 50% of the space
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Employer Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
