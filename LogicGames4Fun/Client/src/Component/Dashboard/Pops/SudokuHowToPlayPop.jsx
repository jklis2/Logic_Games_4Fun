import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const SudokuHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "sudokuHowToPlayPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("crosswordTipsPop.header")}</Popover.Header>
      <Popover.Body>{t("crosswordTipsPop.instructions")}</Popover.Body>
    </Popover>
  );
};
