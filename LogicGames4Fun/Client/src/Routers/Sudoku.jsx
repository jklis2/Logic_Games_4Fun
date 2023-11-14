import React from "react";
import { SudokuGame } from "../Component/Games/Sudoku/SudokuGame";
import { InternalNavbar } from "../Component/InternalNavbar/InternalNavbar";
import Footer from '../Component/Dashboard/DashboardFooter'

export const Sudoku = () => {
  return (
    <>
      <InternalNavbar/>
      <SudokuGame />
      <Footer/>
    </>
  );
};
