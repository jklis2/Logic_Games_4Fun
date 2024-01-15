import React from "react";
import { userAvatars } from "./userAvatars";
import Modal from "react-bootstrap/Modal";
import { updateProfile } from "../../Redux/thunks/updateProfile";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export const AvatarForm = ({ selectedAvatar, setSelectedAvatar, setShow }) => {
  const dispatch = useDispatch();
  const [t] = useTranslation(["translation", "profile"]);

  const handleAvatarClick = (avatarId) => setSelectedAvatar(avatarId);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Select an avatar</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-wrap justify-content-center ">
        {userAvatars.map((avatar) => (
          <div
            key={avatar.id}
            className={
              selectedAvatar === avatar.src ? "profile__avatar-selected" : ""
            }
            onClick={() => handleAvatarClick(avatar.src)}
          >
            <img className="w-100" src={avatar.src} alt={avatar.alt} />
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          {t("profile.closeButton")}
        </button>
        <button
          className="button-light"
          onClick={() => {
            dispatch(updateProfile({path: selectedAvatar}))
              .then(dispatch(fetchUserData()))
              .then(() => setShow(false));
          }}
        >
          {t("profile.saveButton")}
        </button>
      </Modal.Footer>
    </>
  );
};
