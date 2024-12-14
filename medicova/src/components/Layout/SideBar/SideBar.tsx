import ItemSelector from "@/components/UI/menu-item";
import { sideBarLinks } from "@/constants/side-bar";
import { Box, List } from "@mui/material";

interface SideBarProps {
  isOpen?: boolean;
  close?: () => void;
}

const SideBar = ({ isOpen, close }: SideBarProps) => {
  const classMobileOpen =
    "fixed top-[100px] left-0 z-40 h-[calc(100vh-100px)] translate-x-0 bg-[#f7f7fd] overflow-hidden duration-300 w-60 ease-in-out shadow-2xl text-[#7C8493CC]";
  const classNormal =
    "fixed top-[100px] left-0 translate-x-[-100%] md:translate-x-0 z-40 h-[calc(100vh-100px)] bg-[#f7f7fd] overflow-hidden w-14 text-[#7C8493CC] duration-300 ease-in-out hover:w-60 md:block lg:sticky lg:w-60 shadow-2xl";
  return (
    <Box className={isOpen ? classMobileOpen : classNormal}>
      <Box className="lg:mt-0 w-60 overflow-y-auto max-h-[calc(100vh-100px)] overflow-x-hidden pt-5 scroll-bar-hidden">
        <List>
          {sideBarLinks.map((link, index) => (
            <ItemSelector key={index} link={link} onClick={close} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
