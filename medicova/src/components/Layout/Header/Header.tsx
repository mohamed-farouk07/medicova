import React from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import logo from "@/components/images/logo.svg";
import Image from "next/image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        height: "100px",
        width: "100%",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
      }}
    >
      {/* Left Section: Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Image
          src={logo}
          alt="Company Logo"
          style={{
            height: "150px", // Increased logo size
            width: "150px",  // Increased logo size
            marginRight: "8px",
          }}
        />
      </Box>

      {/* Center Section: 5 Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: "100%",
          gap: 2,
        }}
      >
        {["Dashboard", "My Jobs", "CV Search", "Report", "Billing"].map(
          (text, index) => (
            <Typography
              key={index}
              sx={{
                marginX: { sm: "14px", xs: "0" },
                fontWeight: 600,
                color: index === 0 ? "#185D43" : "#000",
                cursor: "pointer",
                "&:hover": {
                  color: "#185D43",
                },
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              {text}
            </Typography>
          )
        )}
      </Box>

      {/* Right Section: Button, IconButton, and Avatar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          marginTop: { xs: 2, sm: 0 },
        }}
      >
        <Button
          sx={{
            marginRight: "16px",
            color: "#fff",
            background: "linear-gradient(180deg, #2EAE7D, #134834)",
            border: "none",
            borderRadius: "0",
            fontWeight: "bold",
            fontSize: { xs: "12px", sm: "14px" },
            padding: { xs: "8px 16px", sm: "10px 20px" },
          }}
        >
          Add New Post
        </Button>
        <IconButton sx={{ marginRight: "16px" }}>
          <NotificationsNoneIcon sx={{ color: "#515B6F" }} />
        </IconButton>
        <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
      </Box>
    </Box>
  );
};

export default Header;
