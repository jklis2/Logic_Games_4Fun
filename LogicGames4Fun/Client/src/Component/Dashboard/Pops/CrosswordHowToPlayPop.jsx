import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const CrosswordHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "crosswordHowPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        {t("crosswordHowPop.instructionTitle")}
      </Popover.Header>
      <Popover.Body>{t("crosswordHowPop.instructions")}</Popover.Body>
    </Popover>
  );
};
