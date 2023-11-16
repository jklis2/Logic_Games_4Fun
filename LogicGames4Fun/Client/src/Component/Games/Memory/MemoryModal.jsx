import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { generateMemoryLevels } from "./generateMemoryLevels";

const MemoryModal = (props) => {
  const navigate = useNavigate();

  const nextLevelHandler = () => {
    props.onHide();
    const lvl = localStorage.getItem("memoryLvl");
    const newlvl = +lvl + 1;
    localStorage.setItem("memoryLvl", newlvl.toString());
    props.setNoOfMatched(0);
    props.setLevel(newlvl);
    props.setMemLevels(generateMemoryLevels().filter((mem) => mem.lvl === +newlvl));
    props.initGame();
    navigate("/games/memory");
  };

    return (
      <Modal
        {...props}
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
  }
export default MemoryModal;