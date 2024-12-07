import { Box, Typography } from "@mui/material";
import setPassword from "@/components/images/set-password.svg";
import Image from "next/image";
import Header from "@/components/Header/Header";
import SetForm from "./SetForm";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

const Set = () => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-[url('/images/background.png')]  bg-cover bg-center opacity-20 z-[-1]"></div>
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f8faff",
          padding: 3,
          maxWidth: 600,
          width: "100%",
          margin: "auto",
        }}
      >
        {/* Lock Icon */}
        <Image
          src="/images/set-password.jpg"
          width={270}
          height={240}
          alt="set password"
          className="mix-blend-multiply"
        />

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ marginBottom: 1, color: "#03353C" }}
        >
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

        <SetForm />

        <Link href="/login" passHref className="opacity-60">
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
    </React.Fragment>
  );
};

export default Set;
