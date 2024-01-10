import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const SudokuTipsPop = () => {
  const [t] = useTranslation(["translation", "sudokuTipsPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("sudokuTipsPop.header")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("sudokuTipsPop.tip1")}</li>
          <li>{t("sudokuTipsPop.tip2")}</li>
          <li>{t("sudokuTipsPop.tip3")}</li>
          <li>{t("sudokuTipsPop.tip4")}</li>
        </ol>

        <strong>{t("sudokuTipsPop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
