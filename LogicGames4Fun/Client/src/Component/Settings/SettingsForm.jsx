import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { muteMusic, playMusic } from "../../Redux/music-slice";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export const SettingsForm = () => {
  const dispatch = useDispatch();

  const [t] = useTranslation(["translation", "settings"]);
  const [language, setLanguage] = useState("English");
  const { song, enabled } = useSelector((state) => state.music);

  //Usuń ten stan później, wykorzystaj selektor...
  const [isMusicEnabled, setIsMusicEnabled] = useState(enabled);
  const [selectedSong, setSelectedSong] = useState(song);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) setLanguage(savedLanguage);
  }, [dispatch]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const handleSongChange = (e) => setSelectedSong(e.target.value);

  const handleMusicToggle = (event) => {
    const enabled = event.target.checked;
    setIsMusicEnabled(enabled);
  };

  const handleSaveChanges = () => {
    if (isMusicEnabled) {
      dispatch(playMusic({ song: selectedSong, enabled: isMusicEnabled }));
    } else {
      dispatch(muteMusic());
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="difficulty-card bg-light w-50">
        <h1 className="text-center">{t("settings.settingsTitle")}</h1>
        <div className="mx-3 my-5">
          <div className="difficulty-card__text">
            {t("settings.playerID")} <span>A123B456</span>
          </div>

          <label className="difficulty-card__label" htmlFor="language">
            {t("settings.languageLabel")}
          </label>
          <select
            id="language"
            className="difficulty-card__select mt-2"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">{t("settings.languageEnglish")}</option>
            <option value="pl">{t("settings.languagePolish")}</option>
          </select>

          <div className="d-flex align-items-center mt-2">
            <label
              className="difficulty-card__label"
              htmlFor="flexSwitchCheckDefault"
            >
              {t("settings.musicInGames")}
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
                {t("settings.selectASong")}
              </label>
              <select
                id="song"
                className="difficulty-card__select mt-2"
                value={selectedSong}
                onChange={handleSongChange}
              >
                <option value="AsianEthnicJapaneseWorldSweetMedia">
                  Asian Ethnic Japanese World - Sweet Media
                </option>
                <option value="CillCityBopperBeats">
                  Cill City - Bopper Beats
                </option>
                <option value="AlohaFatimaMhedden">
                  Aloha - Fatima Mhedden
                </option>
                <option value="HappyEncounterChristianPetermann">
                  Happy Encounter - Christian Petermann
                </option>
                <option value="XmasShoppinMikeFranklyn">
                  Xmas Shoppin - Mike Franklyn
                </option>
              </select>
            </div>
          )}

          <div className="d-flex align-items-center justify-content-around fs-3 mx-4">
            <Link to="/Dashboard">
              <button className="mt-3 mb-5 button-light">
                {t("settings.backToDashboardButton")}
              </button>
            </Link>
            <button
              className="mt-3 mb-5 button-light"
              onClick={handleSaveChanges}
            >
              {t("settings.saveChangesButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};