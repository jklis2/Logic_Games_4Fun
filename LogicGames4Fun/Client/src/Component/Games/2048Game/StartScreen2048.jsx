import React, { useState } from "react";

function StartScreen2048({ onStart }) {
  const [selectedLevel, setSelectedLevel] = useState("easy");

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1 className="h1">2048</h1>
      <h2 className="fs-2">Wybierz poziom trudności:</h2>

      <select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="d-block mb-4 difficulty-card__select w-100 fs-4 mt-2" 
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="extreme">Extreme</option>
        <option value="impossible">Impossible</option>
      </select>
      <button className="button-light mt-3" onClick={() => onStart(selectedLevel)}>Start</button>
    </div>
  );
}

export default StartScreen2048;
