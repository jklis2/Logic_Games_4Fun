import React, { useState } from "react";

function StartScreen2048({ onStart }) {
  const [selectedLevel, setSelectedLevel] = useState("easy");

  return (
    <div className="start-screen">
      <h1>2048</h1>
      <h2>Wybierz poziom trudności:</h2>
      <select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
      >
        <option value="easy">Łatwy</option>
        <option value="medium">Średni</option>
        <option value="hard">Trudny</option>
        <option value="extreme">Ekstremalny</option>
        <option value="impossible">Niemożliwy</option>
      </select>
      <button onClick={() => onStart(selectedLevel)}>Start</button>
    </div>
  );
}

export default StartScreen2048;
