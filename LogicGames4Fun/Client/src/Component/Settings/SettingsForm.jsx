import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SettingsForm = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="about__box bg-light w-50">
        <div className="text-center">
          <h1>Settings</h1>
        </div>
        <div className="mx-3 my-5">
          <div>Player ID:</div>
          <div>
            Language:
            <select
              className="mx-2"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-around fs-3 mx-4">
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
