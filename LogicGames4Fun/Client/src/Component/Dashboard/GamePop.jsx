import React from "react";
import Popover from "react-bootstrap/Popover";
import { useTranslation } from "react-i18next";

const GamePop = React.forwardRef(
  ({ gameTranslation, header, content, enjoyMessage, ...props }, ref) => {
    const [t] = useTranslation(["translation", gameTranslation]);
    return (
      <Popover ref={ref} id="popover-basic" {...props}>
        <Popover.Header as="h3">{t(`${header}`)}</Popover.Header>

        {Array.isArray(content) ? (
          <Popover.Body as="ol" className="mx-2">
            {content.map((line, i) => (
              <li key={i}>{t(line)}</li>
            ))}

            {enjoyMessage && <p className="mt-3 fw-bold">{t(enjoyMessage)}</p>}
          </Popover.Body>
        ) : (
          <Popover.Body>
            {t(`${content}`)}
            {enjoyMessage && <p>{t(enjoyMessage)}</p>}
          </Popover.Body>
        )}
      </Popover>
    );
  }
);

export default GamePop;
