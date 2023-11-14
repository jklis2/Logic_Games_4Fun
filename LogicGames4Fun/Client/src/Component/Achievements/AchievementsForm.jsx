import React from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";
import { achievementList } from "./achievementList";

export const AchievementsForm = () => {
  return (
    <>
      <InternalNavbar />
      <h1 className="h1 text-center my-5">Achievements</h1>
      <div className="container">
        <div className="row">
          {achievementList.map((achievement) => (
            <div key={achievement.id} className="col-md-3 p-5">
              <div className="bg-light achievement-card row">
                <div className="col-4 p-4 d-flex align-items-center">
                  <img
                    src={achievement.img}
                    alt={achievement.alt}
                    className="w-100"
                  ></img>
                </div>
                <div className="col-8 d-flex justify-content-center flex-column">
                  <p className="fs-3">{achievement.name}</p>
                  <ProgressBarValue />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};