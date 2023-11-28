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
    props.setMemLevels(
      generateMemoryLevels().filter((mem) => mem.lvl === +newlvl)
    );
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
export default MemoryModal;
