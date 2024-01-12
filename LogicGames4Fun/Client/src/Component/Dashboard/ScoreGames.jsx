import React, { useRef } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { scoreGamesList } from "./scoreGamesList";

export const ScoreGames = () => {
  const [t] = useTranslation(["translation", "dashboard"]);
  const navigate = useNavigate();
  const ref = useRef(null);

  return scoreGamesList.map((game) => (
    <div key={game.id} className="col-md-4 mt-5">
      <div className="d-flex flex-center justify-content-center" ref={ref}>
        <div className="game-card">
          <div className="game-card__overlay d-flex justify-content-center align-items-center flex-column">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={game.pop}
              container={ref}
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
  ));
};
