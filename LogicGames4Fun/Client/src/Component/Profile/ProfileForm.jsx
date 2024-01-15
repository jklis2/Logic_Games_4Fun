import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Redux/thunks/updateProfile";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";

export const ProfileForm = ({ setShow }) => {
  const dispatch = useDispatch();
  const [t] = useTranslation(["translation", "profile"]);

  const { dateOfBirth, email, description } = useSelector(
    (state) => state.auth.user
  );

  const [profileData, setProfileData] = useState({
    dateOfBirth,
    email,
    description,
  });

  const submitChanges = () => {
    dispatch(updateProfile(profileData))
      .then(dispatch(fetchUserData()))
      .then(() => setShow(false));
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit profile</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-wrap justify-content-center ">
        <form className="form d-flex flex-column w-100 px-3">
          <label htmlFor="dateOfBirth" className="form__label">
            {t("profile.dateOfBirthLabel")}
          </label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            className="form__input"
            value={profileData.dateOfBirth.slice(0, 10)}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                dateOfBirth: e.target.value,
              })
            }
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
            value={profileData.email}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                email: e.target.value,
              })
            }
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
            value={profileData.description}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                description: e.target.value,
              })
            }
          ></textarea>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          {t("profile.closeButton")}
        </button>
        <button className="button-light" onClick={submitChanges}>
          {t("profile.saveButton")}
        </button>
      </Modal.Footer>
    </>
  );
};
