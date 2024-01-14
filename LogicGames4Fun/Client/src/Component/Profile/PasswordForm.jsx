import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";

export const PasswordForm = ({ setShow }) => {
  const [t] = useTranslation(["translation", "profile"]);
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit profile</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-wrap justify-content-center ">
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
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          {t("profile.closeButton")}
        </button>
        <button
          className="button-light"
          onClick={() => {
            console.log(1);
          }}
        >
          {t("profile.saveButton")}
        </button>
      </Modal.Footer>
    </>
  );
};
