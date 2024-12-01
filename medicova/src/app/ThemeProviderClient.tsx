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
