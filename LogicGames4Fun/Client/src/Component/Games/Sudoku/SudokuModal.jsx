import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const SudokuModal = ({ show, resetArr, onHide, setTime, children }) => {
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          🎉 Congrats! 🎉
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have just successfully completed level! 🥳</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "rgba(29, 125, 189, 0.753)",
            border: " 1px solid rgba(29, 125, 189, 0.753)",
          }}
          onClick={nextLevelHandler}
        >
          Next level ➡️
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SudokuModal;
