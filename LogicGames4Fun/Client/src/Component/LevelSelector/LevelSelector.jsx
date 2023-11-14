import React from "react";

function LevelSelector({ options, selectedLevel, onLevelChange }) {
  return (
    <select
      value={selectedLevel}
      onChange={(e) => onLevelChange(e.target.value)}
      className="d-block mb-4 difficulty-card__select w-100 fs-4 mt-2"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default LevelSelector;
