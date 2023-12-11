import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const SudokuModal = ({ show, resetArr, onHide, setTime }) => {
  const navigate = useNavigate();

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
          🎉 Congrats! 🎉
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="text-center d-flex align-items-center"
        style={{ fontSize: "2.1rem", padding: "2rem 1rem" }}
      >
        <p className="w-100 m-0">
          You have just successfully completed the level! 🥳
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
          Next level
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SudokuModal;
