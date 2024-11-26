import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  InputLabel,
} from "@mui/material";

interface ForgetFormProps {
  onSubmit: (formData: { email: string }) => void;
}

const ForgetForm: React.FC<ForgetFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,4}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData); // Trigger parent's onSubmit handler
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full viewport height
        padding: 3,
      }}
    >
      <form  onSubmit={handleSubmit} noValidate>
        <Box sx={{ minWidth: 400, width: "100%" }}>
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
                background: "linear-gradient(90deg, #2EAE7D, #185D43)",
              },
            }}
            type="submit"
          >
            Send
          </Button>
        </Box>
        
      </form>
    </Box>
  );
};

export default ForgetForm;
