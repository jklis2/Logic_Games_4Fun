import React from "react";

function CrosswordClue({ data, number }) {
  return (
    <div className="clue-item">
      <strong>
        {number}. {data.word}
      </strong>
      : {data.definition}
    </div>
  );
}

export default CrosswordClue;
