import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SudokuModal = ({ show, resetArr, onHide, setTime }) => {
  const navigate = useNavigate();

  const [t] = useTranslation(["translation", "sudoku"]);

  const nextLevelHandler = () => {
    onHide();
    const lvl = localStorage.getItem("sudokuLvl");
    const newlvl = +lvl + 1;
    localStorage.setItem("sudokuLvl", newlvl.toString());
    resetArr([]);
    setTime(0);
    navigate("/games/sudoku");
  };

  return (
    <Modal
      show={show}
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
          {t("sudoku.congratsModalTitle")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="text-center d-flex align-items-center"
        style={{ fontSize: "2.1rem", padding: "2rem 1rem" }}
      >
        <p className="w-100 m-0">{t("sudoku.completedLevelMessage")}</p>
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
          {t("sudoku.nextLevelButton")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SudokuModal;
