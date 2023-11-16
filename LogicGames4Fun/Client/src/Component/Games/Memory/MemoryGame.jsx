import React from "react";
import styles from "./MemoryGame.module.scss";
import Badge from "react-bootstrap/Badge";
import { useState, useEffect } from "react";
import allImages from "./MemoryImages.json";
import MemoryModal from "./MemoryModal";
import Card from "./Card";
import { generateMemoryLevels } from "./generateMemoryLevels";
import ReactDOM from "react-dom";

export const MemoryGame = () => {
  const [level, setLevel] = useState(
    Number(localStorage.getItem("memoryLvl")) || 1
  );
  const [memLevels, setMemLevels] = useState(
    generateMemoryLevels().filter((mem) => mem.lvl === +level)
  );
  const [modalShow, setModalShow] = useState(false);

  const imagesItems = allImages
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, memLevels[0].pairs);

  const [images, setImages] = useState([]);

  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [noOfMatched, setNoOfMatched] = useState(0);

  const chooseCard = (image) => {
    if (!image.matched && !imageOne && !imageTwo) {
      setImageOne(image);
    } else if (
      !image.matched &&
      imageOne &&
      !imageTwo &&
      image.id !== imageOne.id
    ) {
      setImageTwo(image);
    }
  };

  const initGame = () => {
    console.log(memLevels[0]);

    const cards = memLevels[0].pairs;
    const allImages = [...imagesItems, ...imagesItems]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards * 2)
      .map((item) => ({ ...item, id: Math.random() }));

    setImages(allImages);
  };

  // eslint-disable-next-line
  useEffect(() => initGame(), [level]);

  useEffect(() => {
    if (noOfMatched === imagesItems.length) {
      setModalShow(true);
    }

    if (imageOne && imageTwo) {
      if (imageOne.src === imageTwo.src) {
        setNoOfMatched((no) => (no += 1));
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
    // eslint-disable-next-line
  }, [imageOne, imageTwo]);

  return (
    <>
      {ReactDOM.createPortal(
        <MemoryModal
          setMemLevels={setMemLevels}
          initGame={initGame}
          setNoOfMatched={setNoOfMatched}
          show={modalShow}
          setLevel={setLevel}
          onHide={() => setModalShow(false)}
        />,
        document.getElementById("modal-root")
      )}
      <div className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className={styles["memory-board"]}>
          <div className={styles["grid-cells"]}>
            {images.length ? (
              <div className={styles["game-block"]}>
                {images.map((image, key) => {
                  return (
                    <Card
                      key={key}
                      chooseCard={chooseCard}
                      modalShow={modalShow}
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
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="d-flex  justify-content-center mt-5">
          <Badge className="px-5 p-3" bg="">
            Level: {level}
          </Badge>
        </div>
      </div>
    </>
  );
};
