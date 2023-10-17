import React from "react";
import { SnakeGame } from "../Component/Games/Snake/SnakeGame";
import { Navbar } from "../Component/Navbar/Navbar";
import Footer from "../Component/Dashboard/DashboardFooter";

export const Snake = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <Navbar />
      <SnakeGame />
      <Footer />
    </div>
  );
};
