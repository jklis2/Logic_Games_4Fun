import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateMusicSettings,
  playMusic,
  initializeMusic,
} from "../../Redux/music-slice";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export const SettingsForm = () => {
  const [t] = useTranslation(["translation", "settings"]);
  const dispatch = useDispatch();
  const musicSettings = useSelector((state) => state.music);

  const [language, setLanguage] = useState("English");
  const [selectedSong, setSelectedSong] = useState(musicSettings.song);
  const [isMusicEnabled, setIsMusicEnabled] = useState(musicSettings.enabled);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const savedSong = localStorage.getItem("selectedSong");
    const savedMusicEnabled = localStorage.getItem("isMusicEnabled");

    if (savedLanguage) setLanguage(savedLanguage);
    if (savedSong) setSelectedSong(savedSong);
    if (savedMusicEnabled !== null)
      setIsMusicEnabled(JSON.parse(savedMusicEnabled));

    dispatch(
      updateMusicSettings({
        song: savedSong,
        enabled: JSON.parse(savedMusicEnabled),
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (isMusicEnabled && selectedSong) {
      audioRef.current.src = `/Songs/${selectedSong}.m4a`;
      audioRef.current.play();
      audioRef.current.loop = true;
    } else {
      audioRef.current.pause();
    }
  }, [selectedSong, isMusicEnabled]);

  useEffect(() => {
    dispatch(initializeMusic());
  }, [dispatch]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const handleSongChange = (event) => {
    audioRef.current.pause();
    setSelectedSong(event.target.value);
  };

  const handleMusicToggle = (event) => {
    const enabled = event.target.checked;
    setIsMusicEnabled(enabled);

    if (enabled && selectedSong) {
      audioRef.current.src = `/Songs/${selectedSong}.m4a`;
      audioRef.current.play();
      localStorage.setItem("musicInitialized", "true");
    } else {
      audioRef.current.pause();
      localStorage.removeItem("musicInitialized");
    }

    localStorage.setItem("isMusicEnabled", JSON.stringify(enabled));
  };

  const handleSaveChanges = () => {
    localStorage.setItem("language", language);
    localStorage.setItem("selectedSong", selectedSong);
    localStorage.setItem("isMusicEnabled", JSON.stringify(isMusicEnabled));

    dispatch(
      updateMusicSettings({ song: selectedSong, enabled: isMusicEnabled })
    );
    dispatch(playMusic({ song: selectedSong, enabled: isMusicEnabled }));

    setIsAlertVisible(true);

    setTimeout(() => setIsAlertVisible(false), 3000);
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
          {isAlertVisible && (
            <div
              className="alert alert-success fs-3 fixed-top w-50 mx-auto d-flex justify-content-between"
              role="alert"
            >
              {t("settings.saveInfo")}
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
      </div>
    </div>
  );
};
