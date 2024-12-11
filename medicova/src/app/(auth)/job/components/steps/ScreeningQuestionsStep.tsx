import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import CloseIcon from "@mui/icons-material/Close";

const ScreeningQuestionsStep: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  // State to track which predefined questions have been added
  const [addedPredefinedQuestions, setAddedPredefinedQuestions] = useState<{
    [key: string]: boolean;
  }>({
    workExperience: false,
    dataFlow: false,
    Prometric: false,
    healthLiscence: false,
    driverLiscence: false,
    language: false,
    location: false,
  });

  const predefinedQuestionLabels: { [key: string]: string } = {
    workExperience: "Work Experience",
    dataFlow: "Data Flow Report",
    prometric: "Prometric Exam",
    healthLiscence: "Health License",
    driverLiscence: "Driver License",
    language: "Language Proficiency",
    location: "Location Preference",
  };

  const predefinedQuestions = {
    workExperience:
      "How many years of [Job Function] experience do you have currently have?",
    dataFlow: "Do you have a valid data flow Report from [Country]?",
    prometric: "Have you passed Prometric Exam from [Country]?",
    healthLiscence: "Do you have a valid Health Liscence from [Country]?",
    driverLiscence: "Do you have a valid Driver Liscence?",
    language: "What is your level of proficiency in [Language]?",
    location: "Are you comfortable communting to this job's [Location]?",
  };

  const formatQuestionText = (text: string) => {
    return text.split(/(\[[^\]]*\])/g).map((part, index) =>
      part.startsWith("[") && part.endsWith("]")
        ? (
            <span key={index} style={{ color: "green" }}>
              {part}
            </span>
          )
        : part
    );
  };
  

  const handleAddOrEditQuestion = () => {
    if (editingIndex !== null) {
      const updatedQuestions = [...questions];
      const originalQuestion = questions[editingIndex];
      updatedQuestions[editingIndex] = newQuestion;
      setQuestions(updatedQuestions);

      const predefinedKey = Object.keys(predefinedQuestions).find(
        (key) =>
          predefinedQuestions[key as keyof typeof predefinedQuestions] ===
          originalQuestion
      );

      if (
        predefinedKey &&
        !updatedQuestions.includes(
          predefinedQuestions[predefinedKey as keyof typeof predefinedQuestions]
        )
      ) {
        setAddedPredefinedQuestions((prev) => ({
          ...prev,
          [predefinedKey]: false,
        }));
      }

      setEditingIndex(null);
      setNewQuestion("");
    } else {
      if (newQuestion.trim() === "") {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
        return;
      }
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  const handleEdit = (index: number) => {
    setNewQuestion(questions[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const questionToDelete = questions[index];
    setQuestions(questions.filter((_, i) => i !== index));

    const predefinedKey = Object.keys(predefinedQuestions).find(
      (key) =>
        predefinedQuestions[key as keyof typeof predefinedQuestions] ===
        questionToDelete
    );
    if (predefinedKey) {
      setAddedPredefinedQuestions((prev) => ({
        ...prev,
        [predefinedKey]: false,
      }));
    }
  };

  const handleAddPredefinedQuestion = (
    key: keyof typeof predefinedQuestions
  ) => {
    if (!addedPredefinedQuestions[key]) {
      setQuestions([...questions, predefinedQuestions[key]]);
      setAddedPredefinedQuestions((prev) => ({
        ...prev,
        [key]: true,
      }));
    }
  };

  return (
    <Box sx={{ backgroundColor: "rgba(214, 221, 235, 0.18)", padding: "20px" }}>
      <Typography sx={{ mb: 1, fontWeight: "bold", color: "rgba(0, 0, 0, 1)" }}>
        Screening Questions
      </Typography>
      <Typography sx={{ mb: 2, color: "rgba(0, 0, 0, 0.64)" }}>
        Add screening questions to get 5 to 10x better results!
      </Typography>

      {showAlert && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          You cannot save an empty value for a question!
        </Alert>
      )}

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1, gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "rgba(46, 174, 125, 1)",
            }}
          >
            <FormatSizeIcon sx={{ color: "white" }} />
          </Box>
          <TextField
            fullWidth
            placeholder="Write a new question here"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
        </Box>
        <IconButton
          onClick={handleAddOrEditQuestion}
          sx={{
            mr: 1,
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px",
            color: "rgba(46, 174, 125, 1)",
          }}
        >
          <AddIcon />
        </IconButton>
        {editingIndex !== null && (
          <IconButton
            onClick={() => {
              setNewQuestion("");
              setEditingIndex(null);
            }}
            sx={{
              mr: 1,
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "5px",
              color: "rgba(46, 174, 125, 1)",
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <List sx={{ mb: 4 }}>
        {questions.map((question, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              mb: 1,
              border: "1px solid #ddd",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "rgba(46, 174, 125, 1)",
                mr: 2,
              }}
            >
              <FormatSizeIcon sx={{ color: "white" }} />
            </Box>
            <ListItemText secondary={formatQuestionText(question)} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => handleEdit(index)}
                sx={{
                  mr: 1,
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  padding: "5px",
                  color: "rgba(46, 174, 125, 1)",
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                onClick={() => handleDelete(index)}
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}

        <Typography
          sx={{
            mb: 2,
            fontWeight: "700",
            color: "rgba(24, 93, 67, 1)",
            fontSize: "23px",
          }}
        >
          Ready Questions
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {(
            Object.keys(predefinedQuestions) as Array<
              keyof typeof predefinedQuestions
            >
          ).map((key) => (
            <Button
              key={key}
              variant="outlined"
              onClick={() => handleAddPredefinedQuestion(key)}
              disabled={addedPredefinedQuestions[key]}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                fontWeight: "600",
                fontSize: "14px",
                borderColor: "#2EAE7D",
                color: addedPredefinedQuestions[key] ? "#ccc" : "#2EAE7D",
                textTransform: "none",
              }}
            >
              {predefinedQuestionLabels[key] ||
                key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </Box>
      </List>

      {/* Job Options */}
      <Typography
        sx={{
          mb: 2,
          fontWeight: "700",
          color: "rgba(24, 93, 67, 1)",
          fontSize: "23px",
        }}
      >
        Job Options
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          p: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Left aligned checkbox and label */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
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
          <Typography sx={{ color: "#515B6F", fontWeight: "700" }}>
            Keep Company Confidential
          </Typography>
        </Box>

        {/* Other elements aligned to the right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ color: "rgba(0, 0, 0, 0.8)", fontWeight: "600" }}>
            Send email notification when there are good candidates:
          </Typography>
          <RadioGroup row defaultValue="yes">
            <FormControlLabel
              value="yes"
              control={
                <Radio
                  sx={{
                    color: "rgba(46, 174, 125, 1)",
                    "&.Mui-checked": {
                      color: "rgba(46, 174, 125, 1)", // Set the color when checked
                    },
                  }}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={
                <Radio
                  sx={{
                    color: "rgba(46, 174, 125, 1)",
                    "&.Mui-checked": {
                      color: "rgba(46, 174, 125, 1)", // Set the color when checked
                    },
                  }}
                />
              }
              label="No"
            />
          </RadioGroup>

          {/* Recipient Email section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "rgba(24, 93, 67, 1)",
                marginRight: 1, // Add some space between the label and the email
              }}
            >
              Recipient Email:
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.8)" }}
            >
              imetacademy@gmail.com
            </Typography>
            <Button variant="text" color="primary" sx={{ marginLeft: 2 }}>
              change email address
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ScreeningQuestionsStep;
