import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
export const useScore = (gameName) => {
  const { games } = useSelector((state) => state.game);
  const { user } = useSelector((state) => state.auth);
  const { scores } = useSelector((state) => state.auth.user) || [];

  const currentGame =
    games && games.filter((game) => game.name.includes(gameName))[0];

  const [getLevel] = useState(
    React.useMemo(() => {
      return scores?.filter((score) => score.game === currentGame._id)[0] || {};
    }, [scores, currentGame])
  );

  const [level, setLevel] = useState(
    getLevel.result || Number(localStorage.getItem("memoryLvl")) || null
  );

  useEffect(() => {
    if (getLevel.result !== undefined) {
      setLevel(getLevel.result);
    }
  }, [getLevel]);


  return { games, scores, currentGame, level, setLevel };
};
