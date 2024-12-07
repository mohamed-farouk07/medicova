"use client";

import React, { useState } from "react";
import { Box, TextField, Button, InputLabel } from "@mui/material";

const SetForm: React.FC = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmePassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmePassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmePassword) {
      newErrors.confirmePassword = "Password is required";
    } else if (formData.confirmePassword.length < 6) {
      newErrors.confirmePassword = "Password must be at least 6 characters";
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

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full justify-center items-center flex flex-col py-5"
    >
      <Box className="w-full md:w-[400px]">
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
        <Box sx={{ mb: 2 }}>
          <InputLabel
            sx={{ color: "#515B6F", fontWeight: "600", fontSize: "16px" }}
          >
            Confirme Password
          </InputLabel>
          <TextField
            label="Enter Confirme password"
            type="password"
            fullWidth
            name="confirmePassword"
            value={formData.confirmePassword}
            onChange={handleChange}
            error={!!errors.confirmePassword}
            helperText={errors.confirmePassword}
          />
        </Box>

        {/* Send Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            maxWidth: 400,
            background: "linear-gradient(90deg, #2EAE7D, #185D43)",
            color: "white",
            paddingY: 1.5,
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #185D43,  #2EAE7D)",
            },
          }}
          type="submit"
        >
          Send
        </Button>
      </Box>
    </form>
  );
};

export default SetForm;
