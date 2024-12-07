"use client";

import { Box, Typography, Container, AvatarGroup, Avatar } from "@mui/material";
import RegisterForm from "./RegisterForm";
import React from "react";

const Register = () => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-[url('/images/background.png')]  bg-cover bg-center opacity-20 z-[-1]"></div>
      <Box className="min-h-[calc(100vh-100px)] p-5 w-full flex justify-center items-center flex-col">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Lock Icon */}

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
            {/* Right Section: Register Form */}
            <RegisterForm />

            {/* Left Section: Photo */}
            <Box
              sx={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                paddingX: { xs: 1, md: 3 },
                width: { xs: "100%", sm: "300px" }, // Responsive width
                height: { xs: "auto", md: "400px" }, // Responsive height
              }}
            >
              {/* Title above the boxes */}

              {/* First Box */}
              <Box
                sx={{
                  width: "80%",
                  height: "100%",
                  backgroundColor: "#2EAE7D",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              ></Box>

              {/* Second Box */}
              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  right: "60px",
                  width: "80%",
                  height: "100%",
                  backgroundColor: "#2EAE7D",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              ></Box>

              {/* Responsive Typography */}
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translate(-50%)",
                  color: "#fff",
                  fontWeight: "bold",
                  width: "80%",
                  fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
                }}
              >
                Find new pathways to{" "}
                <Typography
                  sx={{
                    fontWeight: "700",
                    display: "inline",
                    background: "linear-gradient(180deg, #2EAE7D, #134834)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "inherit",
                  }}
                >
                  Healthcare Professionals
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  bottom: "50%",
                  left: "50%",
                  transform: "translate(-50%)",
                  color: "#fff",
                  fontWeight: "light",
                  width: "80%",
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                  textAlign: "center",
                }}
              >
                “Search for healthcare professionals from more than 300000 CVs.
                Use 35+ robust filters and shortlist candidates faster. Hire top
                talent faster and smarter. “
              </Typography>
              <Box
                sx={{
                  width: { xs: "70%", md: "50%" },
                  position: "absolute",
                  bottom: "-40px",
                  left: { xs: "50%", md: "160px" }, // Adjust positioning
                  transform: { xs: "translateX(-50%)", md: "none" },
                  height: "45%",
                  backgroundColor: "#fff",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              ></Box>

              {/* Second Box */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-10px",
                  left: { xs: "10%", md: "100px" }, // Adjust for smaller screens
                  width: "50%",
                  height: "50%",
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#03353C",
                    fontWeight: "700",
                    textAlign: "start",
                    fontSize: { xs: "16px", md: "20px" }, // Responsive font size
                  }}
                >
                  Trusted by 12,000 organizations, including:
                </Typography>

                <Typography
                  sx={{
                    color: "#03353C",
                    fontWeight: "light",
                    textAlign: "start",
                    fontSize: { xs: "14px", md: "17px" }, // Responsive font size
                    paddingTop: "10px",
                    width: "80%",
                  }}
                >
                  Saudi German Hospital ,DAF Hospital Alsalam International
                  Hospital
                </Typography>
                <AvatarGroup max={5}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar sx={{ backgroundColor: "#03353C", color: "white" }}>
                    +2
                  </Avatar>
                </AvatarGroup>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Register;
