"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Divider,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import cover from "@/components/images/login.svg";
import network from "@/components/images/network.svg";
import Image from "next/image";
import Header from "@/components/Header/Header";
import LoginForm from "./LoginForm";

const Login = () => {
  const handleSubmit = (formData: { email: string; password: string; rememberMe: boolean }) => {
    console.log("Form Data Submitted:", formData);
    // Add logic to handle the form submission (e.g., API call)
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          py: 5,
        }}
      >
        {/* Left Section: Photo */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Enables overlay positioning
            paddingX: { xs: 2, md: 3 },
          }}
        >
          {/* Main Background Image */}
          <Image
            src={cover}
            alt="Login Cover"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />

          {/* Overlaid Text */}
          <Typography
            sx={{
              position: "absolute",
              top: "18%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              color: "#000",
              background: "rgb(242, 242, 242)",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: "700",
              textAlign: "center",
              width: { xs: "90%", sm: "300px" },
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Reach more than 100K+
            <Typography
              component="span"
              sx={{
                display: "block", // Ensures it appears on a new line
                color: "#03353C",
                marginTop: "5px", // Optional spacing
              }}
            >
              Healthcare Professional
            </Typography>
          </Typography>

          {/* Additional Image */}
          <Box
            sx={{
              position: "absolute",
              top: "0", // Adjust positioning relative to the parent Box
              left: "10%", // Adjust positioning relative to the parent Box
            }}
          >
            <Image
              src={network}
              alt="Additional Image"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
        </Box>

        {/* Right Section: Login Form */}
        <LoginForm onSubmit={handleSubmit} />
      </Container>
    </Box>
  );
};

export default Login;
