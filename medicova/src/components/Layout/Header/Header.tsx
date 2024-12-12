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

const links = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "My Jobs",
    link: "/manage-jobs",
  },
  {
    title: "CV Search",
    link: "/cv-search",
    disabled: true,
  },
  {
    title: "Report",
    link: "/report",
    disabled: true,
  },
  {
    title: "Billing",
    link: "/billing",
    disabled: true,
  },
];
const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const close = () => setMenuOpen(false);
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

            <div
              onClick={close}
              aria-hidden="true"
              className={`${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 top-[100px] h-screen w-screen bg-black/30 backdrop-blur-sm duration-700 md:hidden`}
            />

            <SideBar isOpen={isMenuOpen} close={close} />
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
            {links.map((link) => {
              const href = `${link.link.toLowerCase().replace(" ", "-")}`;
              const currentPage = pathname.split("/").pop();
              const isActive = `/${currentPage}` === href;
              return (
                <Link
                  key={link.title}
                  href={href}
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  <Button
                    disabled={link.disabled}
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
                    {link.title}
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
              variant="contained"
              sx={{
                marginRight: "16px",
                display: { xs: "none", md: "block" },
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
            <Link href="/profile" className="hover:scale-105 duration-300">
              <Avatar
                sx={{
                  display: { xs: "none", md: "flex" },
                  cursor: "pointer",
                }}
                alt="User Avatar"
                src="/images/company-avatar.jpg"
              />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
