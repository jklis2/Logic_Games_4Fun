import React from "react";
import { useTranslation } from "react-i18next";

export const ProfileForm = () => {
  const [t] = useTranslation(["translation", "profile"]);
  return (
    <form className="form d-flex flex-column w-100 px-3">
      <label htmlFor="dateOfBirth" className="form__label">
      {t("profile.dateOfBirthLabel")}
      </label>
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        className="form__input"
      />

      <label htmlFor="email" className="form__label mt-3">
      {t("profile.emailLabel")}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        className="form__input"
      />

      <label htmlFor="description" className="form__label mt-3">
      {t("profile.descriptionLabel")}
      </label>
      <textarea
        className="form__input"
        name=""
        id="description"
        cols="30"
        rows="10"
      ></textarea>
    </form>
  );
};
