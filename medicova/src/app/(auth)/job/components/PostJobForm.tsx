"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const steps = ["Job Details", "Screening Questions", "Review & Publish"];

const PostJobForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Initialize the step after the component mounts to ensure it renders client-side
  useEffect(() => {
    setActiveStep(0);
  }, []);

  const handleNext = () => {
    if (activeStep !== null && activeStep < steps.length - 1) {
      setActiveStep((prevStep) => (prevStep !== null ? prevStep + 1 : 0));
    }
  };

  const handleBack = () => {
    if (activeStep !== null && activeStep > 0) {
      setActiveStep((prevStep) => (prevStep !== null ? prevStep - 1 : 0));
    }
  };

  if (activeStep === null) {
    // Prevent rendering until `activeStep` is initialized
    return null;
  }

  return (
    <Box
      sx={{
        p: 4,
        margin: "0 auto",
        backgroundColor: "rgba(248, 248, 253, 0.6)",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      {/* Header */}
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        Post Job Now
      </Typography>

      {/* Progress Indicator using Stepper */}
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          mb: 4,
          "& .MuiStepConnector-line": {
            borderColor: (theme) =>
              activeStep > 0 ? "rgba(46, 174, 125, 1)" : theme.palette.divider,
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  fontWeight: activeStep === index ? "bold" : "normal",
                  color:
                    activeStep === index
                      ? "rgba(46, 174, 125, 1)"
                      : "rgba(81, 91, 111, 1)",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Form Section */}
      <Box component="form" sx={{ display: "grid", gap: 3 }}>
        {activeStep === 0 && (
          <>
            <Box component="form" sx={{ display: "grid", gap: 3 }}>
              {/* Job Title */}
              <Box>
                <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
                  Job Title
                </InputLabel>
                <TextField fullWidth placeholder="Enter Job Title" />
              </Box>

              {/* Industry */}
              <Box>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Industry *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Healthcare
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Pharmaceutical
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Education
                  </Button>
                </Box>
              </Box>

              {/* Dropdowns */}
              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Sector *</InputLabel>
                  <Select>
                    <MenuItem value="Healthcare professionals">
                      Healthcare professionals
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Category *</InputLabel>
                  <Select>
                    <MenuItem value="Doctors">Doctors</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Speciality *</InputLabel>
                  <Select>
                    <MenuItem value="Cardiology">Cardiology</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Career Level *</InputLabel>
                  <Select>
                    <MenuItem value="Consultant">Consultant</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Type of Employment */}
              <Box>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Type of Employment *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Full Time
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Part Time
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Freelance
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Volunteer
                  </Button>
                </Box>
              </Box>

              {/* Work Place */}
              <Box>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Work Place *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    On site
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Remote
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Hybrid
                  </Button>
                </Box>
              </Box>

              {/* Gender */}
              <Box>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Gender *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Male
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Female
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "capitalize", flex: 1 }}
                  >
                    Male & Female
                  </Button>
                </Box>
              </Box>

              {/* Age */}
              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <TextField label="Age Min" type="number" fullWidth />
                <TextField label="Age Max" type="number" fullWidth />
              </Box>

              {/* Education Level */}
              <FormControl fullWidth>
                <InputLabel>Education Level *</InputLabel>
                <Select>
                  <MenuItem value="Bachelor's">Bachelors</MenuItem>
                </Select>
              </FormControl>

              {/* Job Location */}
              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Job Location *</InputLabel>
                  <Select>
                    <MenuItem value="Egypt">Egypt</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>City/Area *</InputLabel>
                  <Select>
                    <MenuItem value="Cairo">Cairo</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Years of Experience */}
              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <TextField
                  label="Years of Experience Min"
                  type="number"
                  fullWidth
                />
                <TextField
                  label="Years of Experience Max"
                  type="number"
                  fullWidth
                />
              </Box>
            </Box>
          </>
        )}

        {activeStep === 1 && (
          <Box>
            <Typography sx={{ mb: 1, fontWeight: "bold" }}>
              Screening Questions (Example Placeholder)
            </Typography>
            <TextField
              fullWidth
              placeholder="Add your screening questions here"
              multiline
              rows={4}
            />
          </Box>
        )}

        {activeStep === 2 && (
          <Box>
            <Typography sx={{ mb: 1, fontWeight: "bold" }}>
              Review & Publish
            </Typography>
            <Typography>
              Please review all your information before publishing your job
              post.
            </Typography>
          </Box>
        )}

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(46, 174, 125, 1)",
              "&:hover": { backgroundColor: "rgba(36, 144, 103, 1)" },
            }}
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostJobForm;
