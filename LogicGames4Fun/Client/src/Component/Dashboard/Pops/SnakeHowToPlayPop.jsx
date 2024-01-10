import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const SnakeHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "snakePop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("snakePop.instructionTitle")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("snakePop.step1")}</li>
          <li>{t("snakePop.step2")}</li>
          <li>{t("snakePop.step3")}</li>
          <li>{t("snakePop.step4")}</li>
          <li>{t("snakePop.step5")}</li>
        </ol>
        <strong>{t("snakePop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
