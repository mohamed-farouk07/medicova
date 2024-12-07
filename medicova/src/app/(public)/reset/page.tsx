import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import ResetForm from "./ResetForm";

const user = { email: "alaahassan@gmail.com" };

const Set = () => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-[url('/images/background.png')]  bg-cover bg-center opacity-20 z-[-1]"></div>
      <Box className="min-h-[calc(100vh-100px)] p-5 w-full flex justify-center items-center flex-col">
        <Box className="w-full flex justify-center items-center flex-col bg-[#f8faff] p-10 max-w-[600px] shadow-md">
          {/* Lock Icon */}
          <Image
            src="/images/reset-password.jpg"
            width={270}
            height={240}
            alt="reset password"
            className="mix-blend-multiply"
          />

          {/* Title */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ marginBottom: 1, color: "#03353C" }}
          >
            Password Reset
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            className="font-semibold t text-black/50 text-lg mb-1 text-center"
          >
            We send a Code to{" "}
            <span className="text-[#2EAE7D94]">{user.email}</span>
          </Typography>

          {/* Email Input */}

          <ResetForm />

          <Link href="/login" passHref className="opacity-60 flex items-center">
            <ArrowBackIcon
              sx={{
                fontSize: "20px", // Size of the icon
                color: "#2EAE7DBF",
                marginRight: "8px", // Spacing between icon and text
              }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                color: "#2EAE7DBF",
                fontWeight: "600",
              }}
            >
              Back to login
            </Typography>
          </Link>
        </Box>
        {/* Stages */}
        <div className="flex gap-5 max-w-[600px] px-10 my-10 justify-center w-full items-center h-1">
          <div className="flex-1 h-full bg-[#CDD3D1] rounded"></div>
          <div className="flex-1 h-full bg-[#2EAE7DBF] rounded"></div>
          <div className="flex-1 h-full bg-[#CDD3D1] rounded"></div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Set;
