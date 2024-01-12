import React from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "./DashboardFooter";
import { useTranslation } from "react-i18next";
import { LogicGames } from "./LogicGames";
import { ScoreGames } from "./ScoreGames";

export const GamesPanel = () => {
  const [t] = useTranslation(["translation", "dashboard"]);

  return (
    <div className="dashboard ">
      <InternalNavbar />
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="my-5 py-5 ">
          <h2 className="dashboard__title text-center mb-5">
            {t("dashboard.logicGames")}
          </h2>
          <div className="row container-xxl">
            <LogicGames />
          </div>
        </div>

        <div className="my-5 py-5 ">
          <h2 className="dashboard__title text-center mb-5">
            {t("dashboard.scoreGames")}
          </h2>
          <div className="row container-xxl">
            <ScoreGames />
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};
