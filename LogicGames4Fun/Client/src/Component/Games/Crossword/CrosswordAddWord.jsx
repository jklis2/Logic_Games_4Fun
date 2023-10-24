import React, { useState } from "react";

function CrosswordAddWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add word to crossword</h2>

      <div className="form-group">
        <label className="fs-3" htmlFor="word">
          Word:
        </label>
        <input
          type="text"
          className="form-control fs-3"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <label className="fs-3" htmlFor="definition">
          Definition:
        </label>
        <input
          type="text"
          className="form-control fs-3"
          id="definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />
      </div>

      <div className="mt-4 row">
        <div className="col-md-6">
          <button
            className="btn btn-primary fs-4 p-3 w-100"
            onClick={() => window.location.reload()}
          >
            Return to Main Menu
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary fs-4 p-3 w-100"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrosswordAddWord;
