import React from "react";
import Badge from "react-bootstrap/Badge";
import { useState, useEffect } from "react";
import allImages from "./MemoryImages.json";
import MemoryModal from "./MemoryModal";
import Card from "./Card";
import { generateMemoryLevels } from "./generateMemoryLevels";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { useScore } from "../../../Hooks/useScore";

export const MemoryGame = () => {
  const [t] = useTranslation(["translation", "memory"]);
  const { level, setLevel, games, scores } = useScore("Memory", "memoryLvl");
  const [modalShow, setModalShow] = useState(true);
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
  const memLevels =
    level && generateMemoryLevels().filter((mem) => mem.lvl === +level)[0];

  const imagesItems = allImages
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, memLevels && memLevels.pairs);

  const initGame = () => {
    const cards = generateMemoryLevels().filter((mem) => mem.lvl === +level)[0]
      .pairs;

    const allImages = [...imagesItems, ...imagesItems]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards * 2)
      .map((item) => ({ ...item, id: Math.random() }));

    setImages(allImages);
  };

  useEffect(() => {
    if (level) {
      initGame();
    }
    // eslint-disable-next-line
  }, [level]);

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
    memLevels && (
      <>
        {ReactDOM.createPortal(
          <MemoryModal
            initGame={initGame}
            setNoOfMatched={setNoOfMatched}
            show={modalShow}
            setLevel={setLevel}
            onHide={() => setModalShow(false)}
            level={level}
            games={games}
            scores={scores}
          />,
          document.getElementById("modal-root")
        )}
        <div className="memory min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="memory__board bg-white p-2">
            {images.length > 0 ? (
              <div
                style={{
                  gridTemplateColumns: `repeat(${memLevels.cols}, 1fr)`,
                }}
                className="memory__grid p-3"
              >
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
          <div className="d-flex  justify-content-center mt-5">
            <Badge className="px-5 p-3" bg="">
              {t("memory.level")} {level}
            </Badge>
          </div>
        </div>
      </>
    )
  );
};
