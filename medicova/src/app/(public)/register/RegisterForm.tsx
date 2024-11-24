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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface RegisterFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phone: "", // Add phone to the errors state
  });

  const [phone, setPhone] = useState<string | undefined>(""); // Add phone state

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

    if (!phone) {
      newErrors.phone = "Phone number is required";
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
          fontSize: "29px",
        }}
        gutterBottom
      >
        Signup as a recruiter on{" "}
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
          Or Registration with email
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
            mb: 2,
            "& .PhoneInput": {
              display: "flex",
              paddingY: "10px",
              gap: "5px",
            },
            "& .PhoneInputInput": {
              border: "1px solid #ccc",
              padding: "15px",
              fontSize: "14px",
              width: "100%",
              "&::placeholder": {
                color: "#000", // Set placeholder color to black
                opacity: 0.7, // Ensure full opacity
              },
            },
            "& .PhoneInputCountrySelect": {
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "5px",
              fontSize: "14px",
              height: "35px",
              backgroundColor: "#f9f9f9",
            },
            "& .PhoneInputCountrySelect:hover": {
              backgroundColor: "#eaeaea",
            },
            "& .PhoneInputCountrySelect:focus": {
              outline: "none",
              borderColor: "#2EAE7D",
            },
            "& .PhoneInputCountrySelectDropdown": {
              maxHeight: "150px",
              overflowY: "auto",
            },
            "& .PhoneInputCountrySelectDropdownItem": {
              padding: "6px 10px",
            },
          }}
        >
          <InputLabel
            sx={{ fontSize: "16px", fontWeight: 600, color: "#515B6F" }}
          >
            Phone Number
          </InputLabel>
          <PhoneInput
            defaultCountry="EG"
            value={phone}
            onChange={setPhone}
            placeholder="Enter phone number"
          />
          {errors.phone && (
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.phone}
            </Typography>
          )}
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
          Sign Up
        </Button>
        <Typography
          component="span"
          sx={{
            fontSize: "14px",
            color: "#202430",
            fontWeight: "400",
          }}
        >
          Aleardy on MEDICOVA ?{" "}
        </Typography>
        <Link href="/login" passHref>
          <Typography
            component="span"
            sx={{
              fontSize: "16px",
              color: "#2EAE7DBF",
              fontWeight: "600",
            }}
          >
            Login
          </Typography>
        </Link>
      </form>
    </Box>
  );
};

export default RegisterForm;
