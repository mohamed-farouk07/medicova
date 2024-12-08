"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";

// Define the custom theme
const theme = createTheme({
  typography: {
    // Apply the font globally to all typography variants
    fontFamily: "'Epilogue', sans-serif",
    fontSize: 14,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2EAE7D", // Focused border color
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red", // Error border color
          },
        },
      },
    },
  },
});

export default function ThemeProviderClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
