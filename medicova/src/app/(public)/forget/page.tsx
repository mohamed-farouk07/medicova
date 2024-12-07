"use client";

import { Box, Typography } from "@mui/material";
import lock from "@/components/images/lock.svg";
import Image from "next/image";
import Header from "@/components/Header/Header";
import ForgetForm from "./ForgetForm";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

const Forget = () => {
  const handleSubmit = (formData: { email: string }) => {
    console.log("Form Data Submitted:", formData);
    // Add logic to handle the form submission (e.g., API call)
  };

  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-[url('/images/background.png')]  bg-cover bg-center opacity-20 z-[-1]"></div>
      {/* Main Content */}
      <Box className="min-h-[calc(100vh-100px)] p-5 w-full flex justify-center items-center flex-col">
        <Box className="w-full flex justify-center items-center flex-col bg-[#f8faff]/80 p-10 max-w-[600px] shadow-xl">
          {/* Lock Icon */}
          <Image
            src="/images/forget-password.jpg"
            width={270}
            height={240}
            alt="forget password"
            className="w-1/2 md:w-auto mix-blend-multiply object-contain"
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
        {/* Stages */}
        <div className="flex gap-5 max-w-[600px] px-10 my-10 justify-center w-full items-center h-1">
          <div className="flex-1 h-full bg-[#2EAE7DBF] rounded"></div>
          <div className="flex-1 h-full bg-[#CDD3D1] rounded"></div>
          <div className="flex-1 h-full bg-[#CDD3D1] rounded"></div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Forget;
