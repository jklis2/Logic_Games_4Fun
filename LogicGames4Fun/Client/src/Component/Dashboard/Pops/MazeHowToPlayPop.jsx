import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const MazeHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "mazePop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("mazePop.instructionTitle")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("mazePop.step1")}</li>
          <li>{t("mazePop.step2")}</li>
          <li>{t("mazePop.step3")}</li>
        </ol>
        <strong>{t("mazePop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
