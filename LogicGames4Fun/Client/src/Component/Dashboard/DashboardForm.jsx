import React from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "./DashboardFooter";
import { useNavigate } from "react-router-dom";
import { SudokuHowToPlayPop } from "./Pops/SudokuHowToPlayPop";
import { SudokuTipsPop } from "./Pops/SudokuTipsPop";
import { MemoryHowToPlayPop } from "./Pops/MemoryHowToPlayPop";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { scoreGames } from "./scoreGames";
import { logicGames } from "./logicGames";
import { useTranslation } from "react-i18next";

export const DashboardForm = () => {
  const [t] = useTranslation(["translation", "dashboard"]);

  const navigate = useNavigate();

  return (
    <div className="dashboard ">
      <InternalNavbar />
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="my-5 py-5 ">
          <h2 className="h2 text-center mb-5">{t("dashboard.logicGames")}</h2>
          <div className="row container-xxl">
            {logicGames.map((game) => (
              <div key={game.id} className="col-md-4 mt-5">
                <div className="d-flex flex-center justify-content-center">
                  <div className="game-card">
                    <div className="game-card__overlay d-flex justify-content-center align-items-center flex-column">
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={SudokuHowToPlayPop}
                      >
                        <button className="button-light my-3">
                          {t("dashboard.howToPlay")}
                        </button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={SudokuTipsPop}
                      >
                        <button className="button-light my-3">
                          {t("dashboard.tips")}
                        </button>
                      </OverlayTrigger>
                      <button
                        className="button-light my-3"
                        onClick={() => navigate(`/games/${game.name}`)}
                      >
                        {t("dashboard.startGame")}
                      </button>
                    </div>
                    <img className="w-100" src={game.img} alt={game.alt}></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-5 py-5 ">
          <h2 className="h2 text-center mb-5">{t("dashboard.scoreGames")}</h2>
          <div className="row container-xxl">
            {scoreGames.map((game) => (
              <div key={game.id} className="col-md-4 mt-5">
                <div className="d-flex flex-center justify-content-center">
                  <div className="game-card">
                    <div className="game-card__overlay d-flex justify-content-center align-items-center flex-column">
                      <OverlayTrigger
                        s
                        trigger="click"
                        placement="bottom"
                        overlay={MemoryHowToPlayPop}
                      >
                        <button className="button-light my-3">
                          {t("dashboard.howToPlay")}
                        </button>
                      </OverlayTrigger>

                      <button
                        className="button-light my-3"
                        onClick={() => navigate(`/games/${game.name}`)}
                      >
                        {t("dashboard.startGame")}
                      </button>
                    </div>
                    <img className="w-100" src={game.img} alt={game.alt}></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};
