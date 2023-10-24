import React from "react";
import CrosswordGame from "../Component/Games/Crossword/CrosswordGame";
import { Navbar } from "../Component/Navbar/Navbar";
import Footer from "../Component/Dashboard/DashboardFooter";

export const Crossword = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <Navbar />
      <CrosswordGame />
      <Footer />
    </div>
  );
};
