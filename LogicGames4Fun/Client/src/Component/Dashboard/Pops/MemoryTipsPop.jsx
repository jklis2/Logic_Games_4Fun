import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const MemoryTipsPop = () => {
  const [t] = useTranslation(["translation", "memoryTipsPop"]);
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{t("memoryTipsPop.header")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("memoryTipsPop.tip1")}</li>
          <li>{t("memoryTipsPop.tip2")}</li>
          <li>{t("memoryTipsPop.tip3")}</li>
          <li>{t("memoryTipsPop.tip4")}</li>
        </ol>

        <strong>{t("memoryTipsPop.enjoy")}</strong>
      </Popover.Body>
    </Popover>
  );
};
