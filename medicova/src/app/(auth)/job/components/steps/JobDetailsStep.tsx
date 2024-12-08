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
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const steps = ["Job Details", "Screening Questions", "Review & Publish"];

const JobDetailsStep: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const [count, setCount] = useState(1); // Set initial count to 1

  const increment = () => setCount(count + 1); // Increase count
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleClick = (label: string) => {
    setSelectedButton(label);
  };

  const focusStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgba(46, 174, 125, 1)",
      },
    },
  };

  return (
    <Box component="form" sx={{ display: "grid", gap: 3 }}>
      {/* Job Title */}
      <Box>
        <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>Job Title *</InputLabel>
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
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>Industry *</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["Healthcare", "Pharmaceutical", "Education"].map((label) => (
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

      {/* Dropdowns */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
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
          {["Full Time", "Part Time", "Freelance", "Volunteer"].map((label) => (
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
          ))}
        </Box>
      </Box>

      {/* Work Place */}
      <Box sx={{ width: "50%" }}>
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>Work Place *</Typography>
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
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>Work Place *</Typography>
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
          <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>Age Min *</InputLabel>
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
          <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>Age Max *</InputLabel>
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
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
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
      {/* Hide Salary Checkbox */}
      <Box sx={{ width: "100%" }}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "rgba(46, 174, 125, 1)",
                "&.Mui-checked": {
                  color: "rgba(46, 174, 125, 1)",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 34,
                },
              }}
            />
          }
          label={
            <Typography sx={{ color: "#515B6F", fontWeight: "700" }}>
              Hide Salary in job post
            </Typography>
          }
        />
      </Box>
      {/* Additional Salary Details */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
            Additional Salary Details *
          </InputLabel>
          <TextField
            fullWidth
            multiline // Enables textarea
            minRows={4}
            placeholder="Bonus Commission"
            sx={{
              backgroundColor: "rgba(214, 221, 235, 0.18)",
              ...focusStyle,
              "& .MuiInputBase-root": {
                height: "auto", // Allow height to adjust based on content
              },
            }}
          />
        </Box>
      </Box>
      {/* Additional Salary Details */}
      <Box
        sx={{
          gap: 2,
          alignItems: "center",
          width: "50%",
        }}
      >
        <Typography sx={{ fontWeight: "bold", mb: 1 }}>
          Number of Vacancies *
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "24px", // Make the text inside button bigger
              color: "rgba(46, 174, 125, 1)",
              borderColor: "rgba(46, 174, 125, 1)",
            }}
            onClick={decrement}
            disabled={count === 1} // Disable the minus button when count is 1
          >
            -
          </Button>
          <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
            {count}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "24px", // Make the text inside button bigger
              color: "rgba(46, 174, 125, 1)",
              borderColor: "rgba(46, 174, 125, 1)",
            }}
            onClick={increment}
          >
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetailsStep;
