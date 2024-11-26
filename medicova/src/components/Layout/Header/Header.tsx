import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '@/components/images/logo.svg'; // Adjust the import path based on your project structure
import Image from 'next/image';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        height: "100px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src={logo}
          alt="Company Logo"
          style={{
            height: '100px',
            width: '139px',
            marginRight: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
