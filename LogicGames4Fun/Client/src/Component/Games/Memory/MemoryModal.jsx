import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../Redux/thunks/updateProfile";

const MemoryModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [t] = useTranslation(["translation", "memory"]);

  const currentGame =
    props.games &&
    props.games.filter((game) => game.name.includes("Memory"))[0];

  const hasScore = props.scores?.some(
    (score) => score.game === currentGame._id
  );

  const nextLevelHandler = () => {
    props.onHide();
    props.setLevel((lvl) => lvl + 1);

    if (localStorage.getItem("token")) {
      if (hasScore) {
        const updatedScores = props.scores.map((score) =>
          score.game === currentGame._id
            ? { ...score, result: props.level + 1 }
            : score
        );
        dispatch(
          updateProfile({
            scores: updatedScores,
          })
        );
      } else {
        dispatch(
          updateProfile({
            scores: [
              ...props.scores,
              {
                game: currentGame._id,
                level: "none",
                result: +props.level,
              },
            ],
          })
        );
      }
    } else {
      localStorage.setItem("memoryLvl", props.level.toString());
    }

    props.setNoOfMatched(0);
    props.setLevel(props.level + 1);
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
