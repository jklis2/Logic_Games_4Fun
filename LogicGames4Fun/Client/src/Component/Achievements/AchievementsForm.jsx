import React, { useEffect, useState } from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";
import { achievementList } from "./achievementList";
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

  console.log(achievements && divideArray(achievements))

  const initialAchievementLevels = achievementList.reduce(
    (acc, achievement) => {
      acc[achievement.id] = "brown";
      return acc;
    },
    {}
  );

  const [achievementLevels, setAchievementLevels] = useState(
    initialAchievementLevels
  );

  const changeAchievementLevel = (achievementId, direction) => {
    const levels = ["brown", "silver", "gold", "diamond"];
    let currentIndex = levels.indexOf(achievementLevels[achievementId]);
    if (direction === "right") {
      currentIndex = (currentIndex + 1) % levels.length;
    } else {
      currentIndex = (currentIndex - 1 + levels.length) % levels.length;
    }
    setAchievementLevels({
      ...achievementLevels,
      [achievementId]: levels[currentIndex],
    });
  };

  return (
    <>
      <InternalNavbar />
      <h1 className="h1 text-center my-5">{t("achievementsTitle")}</h1>
      <div className="container">
        <div className="row">
          {achievementList.map((achievement) => {
            const currentLevel = achievementLevels[achievement.id];
            const achievementImage = achievement.images[currentLevel];
            const achievementLevelText = t(
              `achievementList.${achievement.id}.levels.${currentLevel}`
            );
            const achievementAltText = t(
              `achievementList.${achievement.id}.alt`
            );

            return (
              <div key={achievement.id} className="col-md-3 p-4">
                <div className="bg-light h-100 d-flex flex-column justify-content-around achievement-card p-5 text-center">
                  <div
                    className={`d-flex ${
                      currentLevel === "brown"
                        ? "justify-content-end"
                        : currentLevel === "diamond"
                        ? "justify-content-start"
                        : "justify-content-between"
                    } align-items-center w-100`}
                  >
                    {currentLevel !== "brown" && (
                      <FaArrowLeft
                        style={{ fontSize: "2rem" }}
                        onClick={() =>
                          changeAchievementLevel(achievement.id, "left")
                        }
                      />
                    )}
                    {currentLevel !== "diamond" && (
                      <FaArrowRight
                        style={{ fontSize: "2rem" }}
                        onClick={() =>
                          changeAchievementLevel(achievement.id, "right")
                        }
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <img
                      src={achievementImage}
                      alt={achievementAltText}
                      className="w-100"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="fs-3">{achievementLevelText}</p>
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
