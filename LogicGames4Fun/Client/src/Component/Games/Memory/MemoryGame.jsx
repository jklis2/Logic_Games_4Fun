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
import MemoryModal from "./MemoryModal";
import Card from "./Card";
import { generateMemoryLevels } from "./generateMemoryLevels";


export const MemoryGame = () => {
  const level = localStorage.getItem('memoryLvl')
  const memLevels = generateMemoryLevels().filter((mem) => mem.lvl === +level);
  const [modalShow, setModalShow] = useState(false);

  const imagesItems = allImages
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, memLevels[0].pairs);

  const [images, setImages] = useState([]);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const chooseCard = (image) => {
    if (!image.matched && !imageOne && !imageTwo) {
      setImageOne(image);
    } else if (!image.matched && imageOne && !imageTwo && image.id !== imageOne.id) {
      setImageTwo(image);
    }
  };

  const initGame = () => {
    const allImages = [...imagesItems, ...imagesItems]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setImages(allImages);
  };

  // eslint-disable-next-line 
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
      <MemoryModal
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