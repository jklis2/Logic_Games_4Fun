import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

export const MemoryHowToPlayPop = React.forwardRef(({...props}, ref) => {
  const [t] = useTranslation(["translation", "memoryHowToPlayPop"]);
  return (
    <Popover id="popover-basic" ref={ref} {...props}>
      <Popover.Header as="h3">{t("memoryHowToPlayPop.header")}</Popover.Header>
      <Popover.Body>
        <ol>
          <li>{t("memoryHowToPlayPop.step1")}</li>
          <li>{t("memoryHowToPlayPop.step2")}</li>
          <li>{t("memoryHowToPlayPop.step3")}</li>
          <li>{t("memoryHowToPlayPop.step4")}</li>
          <li>{t("memoryHowToPlayPop.step5")}</li>
        </ol>
      </Popover.Body>
    </Popover>
  );
});
