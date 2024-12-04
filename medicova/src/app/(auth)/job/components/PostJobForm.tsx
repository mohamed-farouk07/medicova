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

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setSelectedButton(label);
  };

  const focusStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgba(46, 174, 125, 1)", // Border color on focus
      },
    },
  };

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
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          color: "rgba(24, 93, 67, 1)",
        }}
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
          "& .MuiStepIcon-root": {
            color: "rgba(0, 0, 0, 0.5)",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "rgba(24, 93, 67, 1)",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "rgba(24, 93, 67, 1)",
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
                      ? "rgba(24, 93, 67, 1)"
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
                  Job Title *
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter Job Title"
                  sx={{
                    backgroundColor: "rgba(214, 221, 235, 0.18)",
                    width: "50%",
                    ...focusStyle,
                    "& .MuiInputBase-root": {
                      height: 40, // Adjust the height here
                    },
                  }}
                />
              </Box>

              {/* Industry */}
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Industry *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["Healthcare", "Pharmaceutical", "Education"].map(
                    (label) => (
                      <Button
                        key={label}
                        variant="outlined"
                        onClick={() => handleClick(label)}
                        sx={{
                          textTransform: "capitalize",
                          flex: 1,
                          borderColor:
                            selectedButton === label
                              ? "rgba(46, 174, 125, 1)" // Active button border color
                              : "rgba(214, 221, 235, 1)", // Inactive button border color
                          backgroundColor:
                            selectedButton === label
                              ? "#fff" // Active button border color
                              : "rgba(214, 221, 235, 0.18)", // Inactive button border color
                          color:
                            selectedButton === label
                              ? "rgba(46, 174, 125, 1)" // Active button text color
                              : "inherit", // Default text color
                          "&:hover": {
                            borderColor: "rgba(46, 174, 125, 1)", // Maintain hover border color
                          },
                        }}
                      >
                        {label}
                      </Button>
                    )
                  )}
                </Box>
              </Box>

              {/* Dropdowns */}
              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    sx={{
                      marginBottom: 1,
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Sector *
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      sx={{
                        backgroundColor: "rgba(214, 221, 235, 0.18)",
                        height: "40px",
                        fontSize: "14px",
                        ...focusStyle, // Apply focus styles
                      }}
                    >
                      <MenuItem value="Healthcare professionals">
                        Healthcare professionals
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    sx={{
                      marginBottom: 1,
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Category *
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      sx={{
                        backgroundColor: "rgba(214, 221, 235, 0.18)",
                        height: "40px",
                        fontSize: "14px",
                      }}
                    >
                      <MenuItem value="Doctors">Doctors</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    sx={{
                      marginBottom: 1,
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Speciality *
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      sx={{
                        backgroundColor: "rgba(214, 221, 235, 0.18)",
                        height: "40px",
                        fontSize: "14px",
                      }}
                    >
                      <MenuItem value="Cardiology">Cardiology</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    sx={{
                      marginBottom: 1,
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Career Level *
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      sx={{
                        backgroundColor: "rgba(214, 221, 235, 0.18)",
                        height: "40px",
                        fontSize: "14px",
                      }}
                    >
                      <MenuItem value="Consultant">Consultant</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              {/* Type of Employment */}
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Type of Employment *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["Full Time", "Part Time", "Freelance", "Volunteer"].map(
                    (label) => (
                      <Button
                        key={label}
                        variant="outlined"
                        onClick={() => handleClick(label)}
                        sx={{
                          textTransform: "capitalize",
                          flex: 1,
                          borderColor:
                            selectedButton === label
                              ? "rgba(46, 174, 125, 1)" // Active button border color
                              : "rgba(214, 221, 235, 1)", // Inactive button border color
                          backgroundColor:
                            selectedButton === label
                              ? "#fff" // Active button background color
                              : "rgba(214, 221, 235, 0.18)", // Inactive button background color
                          color:
                            selectedButton === label
                              ? "rgba(46, 174, 125, 1)" // Active button text color
                              : "inherit", // Default text color
                          "&:hover": {
                            borderColor: "rgba(46, 174, 125, 1)", // Maintain hover border color
                          },
                        }}
                      >
                        {label}
                      </Button>
                    )
                  )}
                </Box>
              </Box>

              {/* Work Place */}
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Work Place *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["Onsite", "Remote", "Hybird"].map((label) => (
                    <Button
                      key={label}
                      variant="outlined"
                      onClick={() => handleClick(label)}
                      sx={{
                        textTransform: "capitalize",
                        flex: 1,
                        borderColor:
                          selectedButton === label
                            ? "rgba(46, 174, 125, 1)" // Active button border color
                            : "rgba(214, 221, 235, 1)", // Inactive button border color
                        backgroundColor:
                          selectedButton === label
                            ? "#fff" // Active button border color
                            : "rgba(214, 221, 235, 0.18)", // Inactive button border color
                        color:
                          selectedButton === label
                            ? "rgba(46, 174, 125, 1)" // Active button text color
                            : "inherit", // Default text color
                        "&:hover": {
                          borderColor: "rgba(46, 174, 125, 1)", // Maintain hover border color
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Gender */}
              <Box sx={{ width: "50%" }}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Work Place *
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["Male", "Female"].map((label) => (
                    <Button
                      key={label}
                      variant="outlined"
                      onClick={() => handleClick(label)}
                      sx={{
                        textTransform: "capitalize",
                        flex: 1,
                        borderColor:
                          selectedButton === label
                            ? "rgba(46, 174, 125, 1)" // Active button border color
                            : "rgba(214, 221, 235, 1)", // Inactive button border color
                        backgroundColor:
                          selectedButton === label
                            ? "#fff" // Active button border color
                            : "rgba(214, 221, 235, 0.18)", // Inactive button border color
                        color:
                          selectedButton === label
                            ? "rgba(46, 174, 125, 1)" // Active button text color
                            : "inherit", // Default text color
                        "&:hover": {
                          borderColor: "rgba(46, 174, 125, 1)", // Maintain hover border color
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Age */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
                    Age Min *
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Enter Age Min"
                    sx={{
                      backgroundColor: "rgba(214, 221, 235, 0.18)",
                      ...focusStyle,
                      "& .MuiInputBase-root": {
                        height: 40, // Adjust the height here
                      },
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
                    Age Max *
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Enter Age Max"
                    sx={{
                      backgroundColor: "rgba(214, 221, 235, 0.18)",
                      ...focusStyle,
                      "& .MuiInputBase-root": {
                        height: 40, // Adjust the height here
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Education Level */}
              {/* <FormControl fullWidth>
                <InputLabel>Education Level *</InputLabel>
                <Select>
                  <MenuItem value="Bachelor's">Bachelors</MenuItem>
                </Select>
              </FormControl> */}

              <Box sx={{ width: "100%" }}>
                <InputLabel
                  sx={{
                    marginBottom: 1,
                    fontWeight: 600,
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  Education Level *
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    sx={{
                      backgroundColor: "rgba(214, 221, 235, 0.18)",
                      height: "40px",
                      fontSize: "14px",
                      ...focusStyle, // Apply focus styles
                    }}
                  >
                    <MenuItem value="Bachelors">Bachelors</MenuItem>
                  </Select>
                </FormControl>
              </Box>

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

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
                    Years of Experience Min *
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Enter Age Min"
                    sx={{
                      backgroundColor: "rgba(214, 221, 235, 0.18)",
                      ...focusStyle,
                      "& .MuiInputBase-root": {
                        height: 40, // Adjust the height here
                      },
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
                  Years of Experience Max *
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Enter Years of Experience Max"
                    sx={{
                      backgroundColor: "rgba(214, 221, 235, 0.18)",
                      ...focusStyle,
                      "& .MuiInputBase-root": {
                        height: 40, // Adjust the height here
                      },
                    }}
                  />
                </Box>
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
