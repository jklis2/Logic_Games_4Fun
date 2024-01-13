import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function CrosswordAddWord() {
  const [t] = useTranslation(["translation", "crossword"]);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 10000);
  };

  return (
    <div className="">
      <h2 className="difficulty-card__title text-center">{t("crossword.title")}</h2>

      <div className="form-group">
        <label className="difficulty-card__label mb-2" htmlFor="word">
          {t("crossword.wordLabel")}
        </label>
        <input
          type="text"
          className="difficulty-card__input w-100"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <label className="difficulty-card__label mb-2" htmlFor="definition">
          {t("crossword.definitionLabel")}
        </label>
        <input
          type="text"
          className="difficulty-card__input w-100"
          id="definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />
      </div>

      <div className="mt-4 row">
        <div className="col-md-6">
          <button
            className="button-light fs-4 p-3 w-100"
            onClick={() => window.location.reload()}
          >
            {t("crossword.returnToMainMenu")}
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="button-light fs-4 p-3 w-100"
            onClick={handleSubmit}
          >
            {t("crossword.addButton")}
          </button>
        </div>
      </div>
      {isAlertVisible && (
        <div
          className="alert alert-success fs-3 fixed-top w-50 mx-auto d-flex justify-content-between"
          role="alert"
        >
          {t("crossword.sendWordAlert")}
          <button
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setIsAlertVisible(false)}
          ></button>
        </div>
      )}
    </div>
  );
}

export default CrosswordAddWord;
