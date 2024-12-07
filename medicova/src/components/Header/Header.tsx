import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "@/components/images/logo.svg"; // Adjust the import path based on your project structure
import Image from "next/image";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={logo}
          alt="Company Logo"
          style={{
            height: "100px",
            width: "139px",
            marginRight: "8px",
          }}
        />
      </Box>
      <Button className="bg-[#E9EBFD] py-2 px-3  font-semibold text-[#03353C] normal-case">
        Create an account
      </Button>
    </Box>
  );
};

export default Header;
