import React from "react";
import { achievementList } from "../Achievements/achievementList";

export const ProfileAchievements = () => {
  return (
    <div className="text-center">
      <h1>My achievements</h1>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {achievementList.map((achievement) => (
          <div className="profile__achievement" key={achievement.id}>
            <img src={achievement.images.brown} alt={achievement.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
