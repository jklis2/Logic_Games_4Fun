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

const imagesItems = [
  {
      "src": "/MemoryGameIcons/Airplane.png",
      "matched": false
  },
  {
      "src": "/MemoryGameIcons/Anubis.png",
      "matched": false
  },
  {
      "src": "/MemoryGameIcons/Beer.png",
      "matched": false
  },
  {
      "src": "/MemoryGameIcons/BigBen.png",
      "matched": false
  },
  {
      "src": "/MemoryGameIcons/Bull.png",
      "matched": false
  },
  {
      "src": "/MemoryGameIcons/Hydra.png",
      "matched": false
  }
]

function Card({ image, flipped, chooseCard }) {
  const cardClickHandle = (e) => {
    chooseCard(image);
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

export const MemoryGame = () => {
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
                    <div className={styles['game-block']}>
                      {images.map((image, key) => {
                        return (
                          <Card
                            key={key}
                            chooseCard={chooseCard}
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
                ) : <></>
                }
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
              Level: 123
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};