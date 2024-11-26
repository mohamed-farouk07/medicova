"use client";

import { Box, Typography } from "@mui/material";
import lock from "@/components/images/lock.svg";
import Image from "next/image";
import Header from "@/components/Header/Header";
import ForgetForm from "./ForgetForm";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Forget = () => {
  const handleSubmit = (formData: { email: string }) => {
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
          src={lock}
          alt="Lock Icon"
          style={{ width: "150px", height: "auto", marginBottom: 3 }}
        />

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ marginBottom: 1, color: "#03353C" }}
        >
          Forgot your password?
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{ color: "#00000080", marginBottom: 1, textAlign: "center" }}
        >
          No worries, well send you reset instructions.
        </Typography>

        {/* Email Input */}

        <ForgetForm onSubmit={handleSubmit} />

        <Link href="/login" passHref className="opacity-50">
          <ArrowBackIcon
            sx={{
              fontSize: "20px", // Size of the icon
              color: "#2EAE7D80",
              marginRight: "8px", // Spacing between icon and text
            }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "16px",
              color: "#2EAE7D80",
              fontWeight: "600",
            }}
          >
            Back to login
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Forget;
