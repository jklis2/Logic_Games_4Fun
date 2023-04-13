import React from "react";
import { SudokuGame } from "../Component/Games/Sudoku/SudokuGame";
import { Navbar } from "../Component/Navbar/Navbar";
import Footer from '../Component/Dashboard/DashboardFooter'

export const Sudoku = () => {
  return (
    <>
      <Navbar/>
      <SudokuGame />
      <Footer/>
    </>
  );
};
