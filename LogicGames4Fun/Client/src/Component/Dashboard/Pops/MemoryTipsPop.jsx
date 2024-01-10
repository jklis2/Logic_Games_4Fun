import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const MemoryTipsPop = () => {
  const [t] = useTranslation(["translation", "memoryTipsPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("crosswordTipsPop.header")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("crosswordTipsPop.tip1")}</li>
          <li>{t("crosswordTipsPop.tip2")}</li>
          <li>{t("crosswordTipsPop.tip3")}</li>
          <li>{t("crosswordTipsPop.tip4")}</li>
        </ol>

        <strong>{t("crosswordTipsPop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
