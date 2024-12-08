import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const ScreeningQuestionsStep: React.FC = () => (
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
);

export default ScreeningQuestionsStep;
