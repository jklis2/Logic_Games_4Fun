import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const MinesweeperHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "minesweeperPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("minesweeperPop.instructionTitle")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("minesweeperPop.step1")}</li>
          <li>{t("minesweeperPop.step2")}</li>
          <li>{t("minesweeperPop.step3")}</li>
          <li>{t("minesweeperPop.step4")}</li>
          <li>{t("minesweeperPop.step5")}</li>
          <li>{t("minesweeperPop.step6")}</li>
        </ol>
        <strong>{t("minesweeperPop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
