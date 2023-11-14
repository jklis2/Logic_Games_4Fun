import React from "react";
import { MemoryGame } from "../Component/Games/Memory/MemoryGame";
import { InternalNavbar } from "../Component/InternalNavbar/InternalNavbar";
import Footer from "../Component/Dashboard/DashboardFooter";

export const Memory = () => {
  return (
    <>
      <InternalNavbar />
      <MemoryGame />
      <Footer />
    </>
  );
};
