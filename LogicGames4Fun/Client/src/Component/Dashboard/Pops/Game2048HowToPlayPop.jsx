import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const Game2048HowToPlayPop = () => {
  const [t] = useTranslation(["translation", "game2048Pop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("game2048Pop.welcomeMessage")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("game2048Pop.selectDifficulty")}</li>
          <li>{t("game2048Pop.useArrows")}</li>
          <li>{t("game2048Pop.combineTiles")}</li>
          <li>{t("game2048Pop.newTile")}</li>
          <li>{t("game2048Pop.winGame")}</li>
          <li>{t("game2048Pop.loseGame")}</li>
        </ol>
        <strong>{t("game2048Pop.enjoyPlaying")}</strong>
      </Popover.Body>
    </Popover>
  );
};
