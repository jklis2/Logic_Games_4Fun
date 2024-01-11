import React, { useEffect, useState } from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchAchievements } from "../../Redux/thunks/fetchAchievements";

export const AchievementsForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAchievements());
  }, [dispatch]);

  const { achievements } = useSelector((state) => state.achievement);

  const divideArray = (arr) => {
    const dividedArrays = [];
    for (let i = 0; i < arr.length; i += 4) {
      dividedArrays.push(arr.slice(i, i + 4));
    }
    return dividedArrays;
  };

  const [currentIndexArray, setCurrentIndexArray] = useState([]);

  useEffect(() => {
    if (achievements) {
      const initialIndexes = divideArray(achievements).map(() => 0);
      setCurrentIndexArray(initialIndexes);
    }
  }, [achievements]);

  const handlePrevAchievement = (index) => {
    if (currentIndexArray[index] > 0) {
      setCurrentIndexArray((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[index] = newIndexes[index] - 1;
        return newIndexes;
      });
    }
  };

  const handleNextAchievement = (index, achievementCount) => {
    if (currentIndexArray[index] < achievementCount - 1) {
      setCurrentIndexArray((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[index] = newIndexes[index] + 1;
        return newIndexes;
      });
    }
  };

  return (
    <>
      <InternalNavbar />
      <h1 className="h1 text-center my-5">{t("achievementsTitle")}</h1>
      <div className="container">
        <div className="row">
          {achievements &&
            divideArray(achievements).map((arr, index) => {
              const isLeftArrowVisible = currentIndexArray[index] > 0;
              const isRightArrowVisible =
                currentIndexArray[index] < arr.length - 1;

              return (
                <div key={index} className="col-md-3 p-4">
                  <div className="bg-light h-100 d-flex flex-column justify-content-around achievement-card p-5 text-center">
                    <div
                      className={`d-flex w-100 ${
                        !isLeftArrowVisible && "justify-content-end"
                      }
                      ${!isRightArrowVisible && "justify-content-start"}
                      ${
                        isLeftArrowVisible &&
                        isRightArrowVisible &&
                        "justify-content-between"
                      }
                      `}
                    >
                      {isLeftArrowVisible && (
                        <FaArrowLeft
                          className="fs-2"
                          onClick={() => handlePrevAchievement(index)}
                        />
                      )}
                      {isRightArrowVisible && (
                        <FaArrowRight
                          className="fs-2"
                          onClick={() =>
                            handleNextAchievement(index, arr.length)
                          }
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <img
                        src={`${process.env.PUBLIC_URL}${
                          arr[currentIndexArray[index]]?.imgPath
                        }`}
                        alt={arr[currentIndexArray[index]]?.alt}
                        className="w-100"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="fs-3">
                        {arr[currentIndexArray[index]]?.path}
                      </p>
                      <p className="fs-3">
                        {arr[currentIndexArray[index]]?.name}
                      </p>
                      <ProgressBarValue />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
