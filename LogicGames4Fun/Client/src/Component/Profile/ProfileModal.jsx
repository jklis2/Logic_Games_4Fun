import Modal from "react-bootstrap/Modal";
import { AvatarForm } from "./AvatarForm";
import { PasswordForm } from "./PasswordForm";
import { ProfileForm } from "./ProfileForm";
import { useDispatch } from "react-redux";
import { updateProfilePath } from "../../Redux/thunks/updateProfile";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProfileModal = ({ show, setShow, type }) => {
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [t] = useTranslation(["translation", "profile"]);
  return (
    <Modal
      size={type === "avatar" ? "xl" : "md"}
      centered
      className="w-100"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Select an avatar</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-wrap justify-content-center ">
        {type === "profile" && <ProfileForm />}
        {type === "password" && <PasswordForm />}
        {type === "avatar" && (
          <AvatarForm
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
        )}
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          {t("profile.closeButton")}
        </button>
        <button
          className="button-light"
          onClick={() => {
            dispatch(updateProfilePath(selectedAvatar))
              .then(dispatch(fetchUserData()))
              .then(() => setShow(false));
          }}
        >
          {t("profile.saveButton")}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
