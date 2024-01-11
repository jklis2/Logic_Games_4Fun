import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const SudokuHowToPlayPop = React.forwardRef((ref) => {
  const [t] = useTranslation(["translation", "sudokuHowToPlayPop"]);
  return (
    <Popover ref={ref} id="popover-basic">
      <Popover.Header as="h3">{t("sudokuHowToPlayPop.header")}</Popover.Header>
      <Popover.Body>{t("sudokuHowToPlayPop.instructions")}</Popover.Body>
    </Popover>
  );
});
