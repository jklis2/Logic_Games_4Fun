import React, { useState } from "react";
import { InternalNavbar } from "../InternalNavbar/InternalNavbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";
import { achievementList } from "./achievementList";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const AchievementsForm = () => {
  const { t } = useTranslation();

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

  const bronzeAchievements = achievementList.filter((achievement) =>
    achievement.img.includes("brown")
  );

  return (
    <>
      <InternalNavbar />
      <h1 className="h1 text-center my-5">
        {t("achievements.achievementTitle")}
      </h1>
      <div className="container">
        <div className="row">
          {bronzeAchievements.map((achievement) => {
            const currentLevel = achievementLevels[achievement.id];
            const isBronze = currentLevel === "brown";
            const isDiamond = currentLevel === "diamond";

            return (
              <div key={achievement.id} className="col-md-3 p-4">
                <div className="bg-light h-100 d-flex flex-column justify-content-around achievement-card p-5 text-center">
                  <div
                    className={`d-flex ${
                      isBronze
                        ? "justify-content-end"
                        : isDiamond
                        ? "justify-content-start"
                        : "justify-content-between"
                    } align-items-center w-100`}
                  >
                    {!isBronze && (
                      <FaArrowLeft
                        style={{ fontSize: "2rem" }}
                        onClick={() =>
                          changeAchievementLevel(achievement.id, "left")
                        }
                      />
                    )}
                    {!isDiamond && (
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
                      src={achievement.img.replace("brown", currentLevel)}
                      alt={achievement.alt}
                      className="w-100"
                    ></img>
                  </div>
                  <div className=" d-flex flex-column">
                    <p className="fs-3">{achievement.name}</p>
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
