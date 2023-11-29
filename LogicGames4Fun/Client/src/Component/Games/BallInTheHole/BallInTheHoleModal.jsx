import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const GameOverModal = ({ show, onHide, score, nextLevelHandler }) => {
  const [t] = useTranslation(["translation", "ballInTheHole"]);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ padding: "2rem 1rem" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center"
          style={{ fontSize: "2.1rem" }}
        >
          {t("ballInTheHole.lostMessage")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="text-center d-flex align-items-center"
        style={{ fontSize: "2.1rem", padding: "2rem 1rem" }}
      >
        <p className="w-100 m-0">
          {t("ballInTheHole.lostScore")} {score}
        </p>
      </Modal.Body>
      <Modal.Footer
        className="justify-content-center"
        style={{ padding: "2rem 1rem" }}
      >
        <Button
          className="button-light"
          onClick={nextLevelHandler}
          style={{
            fontSize: "1.4rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            borderRadius: "3rem",
          }}
        >
          {t("ballInTheHole.restartButton")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameOverModal;
