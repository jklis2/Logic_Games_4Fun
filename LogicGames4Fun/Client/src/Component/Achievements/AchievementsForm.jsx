import React from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";
import { achievementList } from "./achievementList";
import { useTranslation } from "react-i18next";

export const AchievementsForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <InternalNavbar />
      <h1 className="h1 text-center my-5">
        {t("achievements.achievementTitle")}
      </h1>
      <div className="container">
        <div className="row">
          {achievementList.map((achievement) => (
            <div key={achievement.id} className="col-md-3 p-4">
              <div className="bg-light h-100 d-flex flex-column justify-content-around achievement-card p-5 text-center">
                <div className="p-4">
                  <img
                    src={achievement.img}
                    alt={achievement.alt}
                    className="w-100"
                  ></img>
                </div>
                <div className=" d-flex flex-column">
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
