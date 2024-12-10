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
  Backdrop,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import logo from "@/components/images/logo.svg";
import Image from "next/image";
import SideBar from "@/components/Layout/SideBar/SideBar";
import { HamburgerIcon } from "@/components/icons/icons";

const pages = ["Dashboard", "My Jobs", "CV Search", "Report", "Billing"];
const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const pathname = usePathname(); // Get the current path

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              className="group"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <HamburgerIcon />
            </IconButton>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: 35,
                mt: "100px",
              }}
              open={isMenuOpen}
              onClick={() => setMenuOpen(false)}
            >
              <SideBar isOpen={isMenuOpen} />
            </Backdrop>
          </Box>
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
                height: "100px",
                width: "150px",
                marginRight: "8px",
              }}
            />
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
                    sx={{
                      fontWeight: 600,
                      color: isActive ? "#185D43" : "#000",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#185D43",
                      },
                      fontSize: { xs: "14px", sm: "14px" },
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
            }}
          >
            <Button
              sx={{
                marginRight: "16px",
                color: "#fff",
                background: "linear-gradient(180deg, #2EAE7D, #134834)",
                border: "none",
                display: { xs: "none", md: "block" },
                borderRadius: "0",
                fontWeight: "bold",
                fontSize: { xs: "12px", sm: "14px" },
                padding: { xs: "8px 16px", sm: "10px 10px" },
              }}
            >
              Add New Post
            </Button>
            <IconButton className="relative">
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full border border-white bg-red-500" />
              <NotificationsNoneIcon sx={{ color: "#515B6F" }} />
            </IconButton>
            <Avatar
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              alt="User Avatar"
              src="/images/company-avatar.jpg"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
