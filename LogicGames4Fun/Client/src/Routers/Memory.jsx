import React from "react";
import { MemoryGame } from "../Component/Games/Memory/MemoryGame";
import { Navbar } from "../Component/Navbar/Navbar";
import Footer from "../Component/Dashboard/DashboardFooter";

export const Memory = () => {
  return (
    <>
      <Navbar />
      <MemoryGame />
      <Footer />
    </>
  );
};
