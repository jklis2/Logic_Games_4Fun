import React from "react";
import { useTranslation } from "react-i18next";

export const PasswordForm = () => {
  const [t] = useTranslation(["translation", "profile"]);
  return (
    <form action="#" className="form py-3 w-100 px-3">
      <div className="d-flex flex-column">
        <label className="form__label mb-2" id="curPassword">
          {t("profile.currentPasswordLabel")}
        </label>
        <input
          type="password"
          name=""
          id="curPassword"
          className="form__input"
        />
      </div>
      <div className="d-flex flex-column mt-3">
        <label className="form__label mb-2" id="newPassword">
          {t("profile.newPasswordLabel")}
        </label>
        <input
          type="password"
          name=""
          id="newPassword"
          className="form__input"
        />
      </div>
      <div className="d-flex flex-column mt-3">
        <label className="form__label mb-2" id="confirmNewPassword">
          {t("profile.confirmPasswordLabel")}
        </label>
        <input
          type="password"
          name=""
          id="confirmNewPassword"
          className="form__input"
        />
      </div>
    </form>
  );
};
