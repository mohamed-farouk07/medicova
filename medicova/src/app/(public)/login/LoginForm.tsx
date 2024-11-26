"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value ?? checked, // Handle both input types (text and checkbox)
    });
  };

  const validateForm = () => {
    const newErrors: any = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    // Initialize state post-hydration
    setActiveLink("employer");
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };


  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "500px",
        width: "100%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginBottom: 3,
        }}
      >
        {activeLink && (
          <>
            <Link href="/#" passHref>
              <Typography
                component="a"
                onClick={() => handleLinkClick("jobSeeker")}
                sx={{
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontWeight: "600",
                  color: activeLink === "jobSeeker" ? "#000" : "#6CC6A3",
                  backgroundColor:
                    activeLink === "jobSeeker" ? "#E9EBFD" : "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                Job Seeker
              </Typography>
            </Link>

            <Link href="/#" passHref>
              <Typography
                component="a"
                onClick={() => handleLinkClick("employer")}
                sx={{
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontWeight: "600",
                  color: activeLink === "employer" ? "#000" : "#6CC6A3",
                  backgroundColor:
                    activeLink === "employer" ? "#E9EBFD" : "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                Employer
              </Typography>
            </Link>
          </>
        )}
      </Box>

      <Typography
        sx={{
          fontWeight: "bold",
          color: "#03353C",
        }}
        variant="h4"
        gutterBottom
      >
        Welcome Back, in{" "}
        <Typography
          component="span"
          sx={{
            display: "inline",
            fontWeight: "bold",
            background: "linear-gradient(180deg, #2EAE7D, #134834)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "inherit",
          }}
        >
          Medicova
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginY: 2,
        }}
      >
        <Divider sx={{ flex: 1 }} />
        <Typography
          sx={{
            marginX: 2,
            fontWeight: "medium",
            color: "gray",
          }}
        >
          Or login with email
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>

      <form className="w-full" onSubmit={handleSubmit} noValidate>
        <Box sx={{ mb: 2 }}>
          <InputLabel
            sx={{ color: "#515B6F", fontWeight: "600", fontSize: "16px" }}
          >
            Email Address
          </InputLabel>
          <TextField
            label="Enter email address"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <InputLabel
            sx={{ color: "#515B6F", fontWeight: "600", fontSize: "16px" }}
          >
            Password
          </InputLabel>
          <TextField
            label="Enter password"
            type="password"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mb: 2,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                sx={{
                  "&.Mui-checked": {
                    color: "#2EAE7D",
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "#515B6F", fontWeight: "400" }}>
                Remember me
              </Typography>
            }
          />
          <Link href="/forgot-password" passHref>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#515B6F",
                fontWeight: "600",
              }}
            >
              Forgot Password?
            </Typography>
          </Link>
        </Box>
        <Button
          sx={{
            background: "linear-gradient(180deg, #2EAE7D, #185D43)",
            height: "50px",
            fontWeight: "700",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
        <Typography
          component="span"
          sx={{
            fontSize: "14px",
            color: "#202430",
            fontWeight: "400",
          }}
        >
          Don’t have an account?{" "}
        </Typography>
        <Link href="/register" passHref>
          <Typography
            component="span"
            sx={{
              fontSize: "16px",
              color: "#2EAE7DBF",
              fontWeight: "600",
            }}
          >
            Sign Up
          </Typography>
        </Link>
      </form>
    </Box>
  );
};

export default LoginForm;
