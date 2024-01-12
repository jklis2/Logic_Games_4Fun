import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchAchievements } from "../../Redux/thunks/fetchAchievements";

export const ProfileAchievements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAchievements());
  }, [dispatch]);

  const { achievements: userAchievements } = useSelector(
    (state) => state.auth.user
  );
  const { achievements } = useSelector((state) => state.achievement);

  const divideArray = (arr) => {
    const dividedArrays = [];
    for (let i = 0; i < arr.length; i += 4) {
      dividedArrays.push(arr.slice(i, i + 4));
    }
    return dividedArrays;
  };

  const groupedAchievements = achievements ? divideArray(achievements) : [];

  const bestAchievement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (userAchievements.some((a) => a._id === arr[i]._id)) {
        return (
          <div className="profile__achievement-gained" key={arr[i].id}>
            <img
              src={`${process.env.PUBLIC_URL}${arr[i].imgPath}`}
              alt={arr[i].alt}
            />
          </div>
        );
      }
    }

    return (
      <div className="profile__achievement" key={arr.at(-1).id}>
        <img
          src={`${process.env.PUBLIC_URL}${arr.at(-1).imgPath}`}
          alt={arr.at(-1).alt}
        />
      </div>
    );
  };

  const [t] = useTranslation(["translation", "profile"]);
  return (
    <div className="text-center">
      <h1>{t("profile.myAchievements")}</h1>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {groupedAchievements.map((gameAchievement) =>
          bestAchievement(gameAchievement.reverse())
        )}
      </div>
    </div>
  );
};
