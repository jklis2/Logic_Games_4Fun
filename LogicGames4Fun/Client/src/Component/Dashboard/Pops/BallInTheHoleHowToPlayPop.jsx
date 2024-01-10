import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const Game2048TipsPop = () => {
  const [t] = useTranslation(["translation", "ballInTheHolePop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        {t("ballInTheHolePop.instructionTitle")}
      </Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("ballInTheHolePop.step1")}</li>
          <li>{t("ballInTheHolePop.step2")}</li>
          <li>{t("ballInTheHolePop.step3")}</li>
          <li>{t("ballInTheHolePop.step4")}</li>
        </ol>
        <strong>{t("ballInTheHolePop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
