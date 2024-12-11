import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { DevIconGoogle } from "@/components/icons/icons";

const GOOGLE_LOGIN_URL =
  "http://34.31.113.2.nip.io/users/api/v1.0/employer-users/login/google";

const GoogleButton = ({ children }: { children: React.ReactNode }) => {
  const handleGoogleLogin = async () => {
    try {
      // Initiate the login process
      const response = await axios.get(GOOGLE_LOGIN_URL, {
        withCredentials: true, // Include cookies for cross-domain requests
      });

      // Handle the successful response
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        // Redirect or perform further actions as needed
        window.location.href = response.data.redirect_url;
      }
    } catch (error) {
      // Handle errors
      console.error("Google login failed:", error);
    }
  };

  return (
    <Button className="w-full" variant="outlined" onClick={handleGoogleLogin}>
      <DevIconGoogle className="w-6 h-6 m-2" />
      {children}
    </Button>
  );
};

export default GoogleButton;
