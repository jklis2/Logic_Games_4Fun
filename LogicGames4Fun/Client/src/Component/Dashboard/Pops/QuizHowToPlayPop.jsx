import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const QuizHowToPlayPop = () => {
  const [t] = useTranslation(["translation", "quizPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("quizPop.instructionTitle")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("quizPop.step1")}</li>
          <li>{t("quizPop.step2")}</li>
          <li>{t("quizPop.step3")}</li>
          <li>{t("quizPop.step4")}</li>
          <li>{t("quizPop.step5")}</li>
        </ol>
        <strong>{t("quizPop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
