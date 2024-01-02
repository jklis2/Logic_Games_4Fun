import React from "react";
import { achievementList } from "../Achievements/achievementList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const ProfileAchievements = () => {
  const { achievements } = useSelector((state) => state.auth.user);

  const [t] = useTranslation(["translation", "profile"]);
  return (
    <div className="text-center">
      <h1>{t("profile.myAchievements")}</h1>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {achievementList.map((achievement) => {
          const achieved = achievements.find(
            (ach) => ach.id === achievement.id
          );
          return (
            <div
              className={
                achieved
                  ? "profile__achievement-gained"
                  : "profile__achievement"
              }
              key={achievement.id}
            >
              <img
                src={
                  achieved
                    ? achievement.images[`${achieved.level}`]
                    : achievement.images.brown
                }
                alt={achievement.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
