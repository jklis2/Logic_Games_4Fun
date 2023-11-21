import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const SettingsForm = () => {
  const [language, setLanguage] = useState("English");
  const [selectedSong, setSelectedSong] = useState("AsianEthnicJapaneseWorldSweetMedia");
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const savedSong = localStorage.getItem("selectedSong");
    const savedMusicEnabled = localStorage.getItem("isMusicEnabled");

    if (savedLanguage) setLanguage(savedLanguage);
    if (savedSong) setSelectedSong(savedSong);
    if (savedMusicEnabled !== null) setIsMusicEnabled(JSON.parse(savedMusicEnabled));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => audioRef.current.pause();
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSongChange = (event) => {
    const songValue = event.target.value;
    setSelectedSong(songValue);

    audioRef.current.src = `/Songs/${songValue}.m4a`;
    audioRef.current.play();

    setTimeout(() => {
      audioRef.current.pause();
    }, 10000);
  };

  const handleMusicToggle = (event) => {
    setIsMusicEnabled(event.target.checked);
  };

  const handleSaveChanges = () => {
    localStorage.setItem("language", language);
    localStorage.setItem("selectedSong", selectedSong);
    localStorage.setItem("isMusicEnabled", JSON.stringify(isMusicEnabled));
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
            <label
              className="difficulty-card__label"
              htmlFor="flexSwitchCheckDefault"
            >
              Music in games:
            </label>
            <div className="difficulty-card__check form-check form-switch ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={isMusicEnabled}
                onChange={handleMusicToggle}
              />
            </div>
          </div>

          {isMusicEnabled && (
            <div className="song-list">
              <label className="difficulty-card__label" htmlFor="song">
                Select a song:
              </label>
              <select
                id="song"
                className="difficulty-card__select mt-2"
                value={selectedSong}
                onChange={handleSongChange}
              >
                <option value="AsianEthnicJapaneseWorldSweetMedia">Asian Ethnic Japanese World - Sweet Media</option>
                <option value="CillCityBopperBeats">Cill City - Bopper Beats</option>
                <option value="AlohaFatimaMhedden">Aloha - Fatima Mhedden</option>
                <option value="HappyEncounterChristianPetermann">Happy Encounter - Christian Petermann</option>
                <option value="XmasShoppinMikeFranklyn">Xmas Shoppin - Mike Franklyn</option>
              </select>
            </div>
          )}

          <div className="d-flex align-items-center justify-content-around fs-3 mx-4">
            <Link to="/Dashboard">
              <button className="mt-3 mb-5 button-light">
                Back to dashboard
              </button>
            </Link>
            <button
              className="mt-3 mb-5 button-light"
              onClick={handleSaveChanges}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
