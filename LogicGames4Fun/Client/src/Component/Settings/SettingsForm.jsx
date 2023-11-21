import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SettingsForm = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="difficulty-card bg-light w-50">
        <h1 className="text-center">Settings</h1>
        <div className="mx-3 my-5">
          <div className="difficulty-card__text">
            Player ID: <span>A123B456</span>
          </div>
          <label className="difficulty-card__label" htmlFor="language">
            Language:
          </label>
          <select
            id="language"
            className="difficulty-card__select mt-2"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Polish">Polish</option>
          </select>

        <div className="d-flex align-items-center mt-2">
        <label className="difficulty-card__label" htmlFor="flexSwitchCheckDefault">
            Music in games:
          </label>
          <div className="difficulty-card__check form-check form-switch ms-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        </div>
        <div className="d-flex align-items-center justify-content-around fs-3 mx-4">
          <Link to="/Dashboard">
            <button className="mt-3 mb-5 button-light">
              Back to dashboard
            </button>
          </Link>
          <button className="mt-3 mb-5 button-light">Save changes</button>
        </div>
      </div>
    </div>
  );
};
