import { Box } from "@mui/material";
import Header from "@/components/Header/Header";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header />
      {children}
    </Box>
  );
};

export default layout;
