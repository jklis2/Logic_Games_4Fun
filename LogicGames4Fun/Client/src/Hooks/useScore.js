import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const useScore = (gameName, localStorageName) => {
  const { games } = useSelector((state) => state.game);
  const { user } = useSelector((state) => state.auth) || {};
  const { scores } = useSelector((state) => state.auth.user) || [];

  const currentGame =
    games && games.filter((game) => game.name.includes(gameName))[0];

  const [level, setLevel] = useState(null);

  useEffect(() => {
    const getLevel =
      scores?.filter((score) => score.game === currentGame?._id)[0] || {};

    if (user) {
      setLevel(getLevel.result );
    } else {
      setLevel(Number(localStorage.getItem("memoryLvl")) || 1);
    }
  }, [scores, currentGame, user]);


  return { games, scores, currentGame, level, setLevel };
};
