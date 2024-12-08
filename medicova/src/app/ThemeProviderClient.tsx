"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";

// Define the custom theme
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#2EAE7D", // Your primary button color
  //   },
  //   secondary: {
  //     main: "#134834", // Your secondary button color
  //   },
  // },
  typography: {
    // Apply the font globally to all typography variants
    fontFamily: "'Epilogue', sans-serif",
    fontSize: 14,
    // add for h3
    h3: {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
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
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background:
            "linear-gradient(191.67deg, #2EAE7D 8.56%, #134834 91.44%)",
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "0",
          "&:hover": {
            background:
              "linear-gradient(191.67deg, #134834 8.56%, #2EAE7D 91.44%)",
          },
        },
        root: {
          textTransform: "none", // Disable uppercase text
          fontWeight: "bold", // Bold text
          padding: "8px 16px", // Custom padding
        },
        contained: {
          boxShadow: "none", // Remove shadow from contained buttons
          "&:hover": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow on hover
          },
        },
        outlined: {
          borderWidth: "2px", // Thicker border for outlined buttons
          "&:hover": {
            borderColor: "#2EAE7D", // Custom hover border color
          },
        },
        text: {
          fontSize: "20px",
          fontWeight: "bold",
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
