"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
  AppBar,
  Container,
  Toolbar,
  MenuItem,
  Menu,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/components/images/logo.svg";
import Image from "next/image";

const pages = ["Dashboard", "My Jobs", "CV Search", "Report", "Billing"];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const pathname = usePathname(); // Get the current path

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Image
              src={logo}
              alt="Company Logo"
              style={{
                height: "110px",
                width: "150px",
                marginRight: "8px",
              }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                const href = `/${page.toLowerCase().replace(" ", "-")}`;
                const isActive = pathname === href;
                return (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: isActive ? "#185D43" : "#000",
                    }}
                  >
                    <Link href={href} style={{ textDecoration: "none" }}>
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 2,
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => {
              const href = `/${page.toLowerCase().replace(" ", "-")}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={page}
                  href={href}
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      marginX: { sm: "14px", xs: "0" },
                      fontWeight: 600,
                      color: isActive ? "#185D43" : "#000",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#185D43",
                      },
                      fontSize: { xs: "14px", sm: "16px" },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginTop: { xs: 2, sm: 0 },
            }}
          >
            <Button
              sx={{
                marginRight: "16px",
                color: "#fff",
                background: "linear-gradient(180deg, #2EAE7D, #134834)",
                border: "none",
                borderRadius: "0",
                fontWeight: "bold",
                fontSize: { xs: "12px", sm: "14px" },
                padding: { xs: "8px 16px", sm: "10px 10px" },
              }}
            >
              Add New Post
            </Button>
            <IconButton sx={{ marginRight: "16px" }}>
              <NotificationsNoneIcon sx={{ color: "#515B6F" }} />
            </IconButton>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
