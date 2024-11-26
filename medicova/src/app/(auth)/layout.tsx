import React from "react";
import Header from "@/components/Layout/Header/Header";
import SideBar from "@/components/Layout/SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
