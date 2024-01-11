import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const SudokuHowToPlayPop = React.forwardRef(({...props}, ref) => {
  const [t] = useTranslation(["translation", "sudokuHowToPlayPop"]);
  return (
    <Popover ref={ref} id="popover-basic" {...props}>
      <Popover.Header as="h3">{t("sudokuHowToPlayPop.header")}</Popover.Header>
      <Popover.Body>{t("sudokuHowToPlayPop.instructions")}</Popover.Body>
    </Popover>
  );
});
