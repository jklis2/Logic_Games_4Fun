import React from "react";
import { SnakeGame } from "../Component/Games/Snake/SnakeGame";
import { InternalNavbar } from "../Component/InternalNavbar/InternalNavbar";
import Footer from "../Component/Dashboard/DashboardFooter";

export const Snake = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <InternalNavbar />
      <SnakeGame />
      <Footer />
    </div>
  );
};
