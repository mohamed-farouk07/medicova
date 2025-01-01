import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SetForm from "./SetForm";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

const Set = () => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 z-[-1] bg-[url('/images/background.png')] bg-cover bg-center opacity-20"></div>
      {/* Main Content */}
      <Box className="flex min-h-[calc(100vh-100px)] w-full flex-col items-center justify-center">
        <Box className="flex w-full max-w-[600px] flex-col items-center justify-center bg-[#f8faff]/80 shadow-xl">
          {/* Lock Icon */}
          <Image
            src="/images/set-password.jpg"
            width={200}
            height={170}
            alt="set password"
            className="mt-5 object-contain mix-blend-multiply"
          />

          {/* Title */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#03353C" }}>
            Set a new password
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{ color: "#00000080", textAlign: "center" }}
          >
            Must be at least 8 character.
          </Typography>

          {/* Email Input */}

          <SetForm />

          <Link
            href="/login"
            passHref
            className="text-secondary mb-4 flex items-center gap-2 hover:underline"
          >
            <ArrowBackIcon
              sx={{
                fontSize: "20px", // Size of the icon
              }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Back to login
            </Typography>
          </Link>
        </Box>
        {/* Stages */}
        <div className="my-10 flex h-1 w-full max-w-[600px] items-center justify-center gap-5 px-10">
          <div className="h-full flex-1 rounded bg-[#CDD3D1]"></div>
          <div className="h-full flex-1 rounded bg-[#CDD3D1]"></div>
          <div className="bg-light-primary h-full flex-1 rounded"></div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Set;
