import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { generateMemoryLevels } from "./generateMemoryLevels";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const MemoryModal = (props) => {
  const navigate = useNavigate();
  const [t] = useTranslation(["translation", "memory"]);

  const cos = useSelector((state) => state);
  console.log(cos);

  const nextLevelHandler = () => {
    props.onHide();
    const lvl = localStorage.getItem("memoryLvl");
    const newlvl = +lvl + 1;
    localStorage.setItem("memoryLvl", newlvl.toString());

    //Poślij requesta, że wbito nowy lvl

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
          {t("memory.congratsModalTitle")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="text-center d-flex align-items-center"
        style={{ fontSize: "2.1rem", padding: "2rem 1rem" }}
      >
        <p className="w-100 m-0">{t("memory.completedLevelMessage")}</p>
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
          {t("memory.nextLevelButton")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MemoryModal;
