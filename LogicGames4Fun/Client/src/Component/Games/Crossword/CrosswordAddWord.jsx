import React, { useState } from "react";

function CrosswordAddWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-word-container">
      <h2>Add word to crossword</h2>

      <div className="input-group">
        <label>Word:</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Definition:</label>
        <input
          type="text"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />
      </div>

      <div className="buttons-group">
        <button onClick={() => window.location.reload()}>
          Return to Main Menu
        </button>
        <button className="add-button" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CrosswordAddWord;
