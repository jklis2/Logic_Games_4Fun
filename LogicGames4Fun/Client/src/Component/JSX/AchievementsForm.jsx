import React from "react";
import "../CSS/AchievementsForm.css";
import { Navbar } from "../Navbar/Navbar"

export const AchievementsForm = () => {
  return (
    <>
      <div className="achievements-page-content">
        <Navbar/>
        <div className="achievements-title">
          <h1>Achievements</h1>
        </div>
      </div>
    </>
  );
};
