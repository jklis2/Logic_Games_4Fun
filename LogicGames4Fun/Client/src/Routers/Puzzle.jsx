import React from "react";
import { PuzzleGame } from "../Component/Games/Puzzle/PuzzleGame";
import { Navbar } from "../Component/Navbar/Navbar";
import Footer from "../Component/Dashboard/DashboardFooter";

export const Puzzle = () => {
  return (
    <>
      <Navbar />
      <PuzzleGame />
      <Footer />
    </>
  );
};
