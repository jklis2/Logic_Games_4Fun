import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const TicTacToeHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "ticTacToePop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        {t("ticTacToePop.instructionTitle")}
      </Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("ticTacToePop.step1")}</li>
          <li>{t("ticTacToePop.step2")}</li>
          <li>{t("ticTacToePop.step3")}</li>
          <li>{t("ticTacToePop.step4")}</li>
        </ol>
        <strong>{t("ticTacToePop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
