"use client";

import React, { useState } from "react";
import { Box, TextField, Button, InputLabel, Typography } from "@mui/material";

const ResetForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [newError, setError] = useState("");
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Only allow single digit input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next field if value is entered
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const validateForm = () => {
    let error = "";
    if (otp.some((digit) => !digit)) {
      error = "Enter all digits";
    }
    setError(error);
    return !error;
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", otp.join(""));
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <form noValidate onSubmit={handleSubmit}>
        <Box className="w-full md:min-w-[400px]">
          <div className="flex space-x-2 justify-center w-full max-w-[400px] my-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                required
                className="w-1/4 aspect-[8/6] rounded focus:outline-none border border-[#D2D8E2] text-center text-4xl focus:ring-2  focus:ring-[#2EAE7D]  font-bold  "
                autoFocus={index === 0}
              />
            ))}
          </div>

          {/* Send Button */}
          <Button
            variant="contained"
            fullWidth
            disabled={otp.some((digit) => !digit)}
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
              "&:disabled": {
                opacity: 0.6,
                color: "white",
              },
            }}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </form>
      <Typography className="text-center text-[#2EAE7D]  font-semibold mt-2">
        Don’t receive the email ?{" "}
        <button className="  text-[#134834] underline hover:no-underline ">
          Click here to send again
        </button>
      </Typography>
    </Box>
  );
};

export default ResetForm;
