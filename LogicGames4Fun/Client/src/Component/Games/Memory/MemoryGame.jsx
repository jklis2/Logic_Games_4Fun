import React from "react";
import styles from "./MemoryGame.module.scss";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { memoryHowToPlayPop } from "./memoryHowToPlayPop";
import { memoryTipsPop } from "./memoryTipsPop";
import allImages from "./MemoryImages.json";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
// import "../../UI/Button/Button.scss";

const generateLevels = () => {
  let levelsWithDifficulty = [];
  let pairs = 2;
  for (let lvl = 1; lvl <= 75; lvl++) {
    lvl % 4 === 0 ? lvl > 50 ? (pairs += 1) : (pairs += 2) : <></>;
    levelsWithDifficulty.push({ lvl, pairs });
  }
  return levelsWithDifficulty;
};

function Card({ image, flipped, chooseCard, modalShow, setModalShow }) {
  const cardClickHandle = (e) => {
    chooseCard(image);

    const cards = document.querySelectorAll(`.${styles.card}`);
    const cardsMatched = document.querySelectorAll(`.${styles.matched}`);

    if (cardsMatched.length === cards.length) {
      setModalShow(true);
    }
  };

  return (
    <div
      className={`${styles.card} ${flipped ? `${styles.matched}` : ""}`}
      onClick={cardClickHandle}
    >
      <img
        style={{ transform: "rotateY(180deg)" }}
        src={image.src}
        alt="text"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
        <line x1="12" y1="19" x2="12" y2="19.01"></line>
      </svg>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
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
        <p>
          You have just successfully completed level! 🥳
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{backgroundColor: "rgba(29, 125, 189, 0.753)", border: " 1px solid rgba(29, 125, 189, 0.753)"}} onClick={props.onHide}>Next level ➡️</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const MemoryGame = () => {
  const level = useSelector((state) => state.memory.memoryLvl);
  const memLevels = generateLevels().filter((mem) => mem.lvl === +level);

  const [modalShow, setModalShow] = useState(true);

  const imagesItems = allImages
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, memLevels[0].pairs);

  const [images, setImages] = useState([]);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const chooseCard = (image) => {
    imageOne ? setImageTwo(image) : setImageOne(image);
  };

  const initGame = () => {
    const allImages = [...imagesItems, ...imagesItems]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setImages(allImages);
  };

  useEffect(() => initGame(), []);

  useEffect(() => {
    if (imageOne && imageTwo) {
      if (imageOne.src === imageTwo.src) {
        setImages((prevImages) => {
          return prevImages.map((item) => {
            if (item.src === imageOne.src) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
      }

      setTimeout(() => {
        setImageOne(null);
        setImageTwo(null);
      }, 500);
    }
  }, [imageOne, imageTwo]);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className={styles["game-container"]}>
        <div className={styles["game-internal-container"]}>
          <div className={styles["memory-actions"]}>
            <div>
              <Link to={`/Dashboard`} className={styles["back-link"]}>
                <HiArrowLongLeft /> Back to games
              </Link>
            </div>

            <div>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={memoryHowToPlayPop}
              >
                <Button>How to play?</Button>
              </OverlayTrigger>
            </div>
            <div>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={memoryTipsPop}
              >
                <Button>Tips</Button>
              </OverlayTrigger>
            </div>
          </div>

          <div className={styles["memory-board-container"]}>
            <div className={styles["memory-board"]}>
              <div className={styles["grid-cells"]}>
                {images.length ? (
                  <>
                    <div className={styles["game-block"]}>
                      {images.map((image, key) => {
                        return (
                          <Card
                            key={key}
                            chooseCard={chooseCard}
                            modalShow={modalShow}
                            setModalShow={setModalShow}
                            flipped={
                              image === imageOne ||
                              image === imageTwo ||
                              image.matched
                            }
                            image={image}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={styles["memory-game-info"]}>
            <Box
              sx={{
                backgroundColor: "rgba(29, 125, 189, 0.753)",
                color: "white",
                borderRadius: "7px",
                padding: "0.5rem",
                fontWeight: "bold",
                width: "200px",
              }}
            >
              Level: {level}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
