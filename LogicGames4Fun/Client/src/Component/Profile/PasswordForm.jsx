import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import { updateProfile } from "../../Redux/thunks/updateProfile";

export const PasswordForm = ({ setShow }) => {
  const [t] = useTranslation(["translation", "profile"]);
  const dispatch = useDispatch();

  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
    error: "",
  });

  const SubmitChanges = () => {
    if (passwordData.password !== passwordData.confirmPassword) {
      setPasswordData({
        ...passwordData,
        error: "Passwords don't match",
      });
    } else {
      const { password } = passwordData;
      dispatch(updateProfile({ password }))
        .then(dispatch(fetchUserData()))
        .then(() => setShow(false));
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit profile</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-wrap justify-content-center ">
        <form action="#" className="form py-3 w-100 px-3">
          <div className="d-flex flex-column">
            <label className="form__label mb-2" id="newPassword">
              {t("profile.newPasswordLabel")}
            </label>
            <input
              type="password"
              name=""
              id="newPassword"
              className="form__input"
              value={passwordData.password}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  password: e.target.value,
                })
              }
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
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  confirmPassword: e.target.value,
                })
              }
            />
            {passwordData.error.length > 0 && (
              <p className="fs-3 text-danger mt-3">{passwordData.error}</p>
            )}
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          {t("profile.closeButton")}
        </button>
        <button className="button-light" onClick={SubmitChanges}>
          {t("profile.saveButton")}
        </button>
      </Modal.Footer>
    </>
  );
};
