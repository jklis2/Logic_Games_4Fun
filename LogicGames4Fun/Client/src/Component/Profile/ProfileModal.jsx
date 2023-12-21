import Modal from "react-bootstrap/Modal";
import { AvatarForm } from "./AvatarForm";
import { PasswordForm } from "./PasswordForm";
import { ProfileForm } from "./ProfileForm";
import { useDispatch } from "react-redux";
import { updateProfilePath } from "../../Redux/thunks/updateProfile";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import { useState } from "react";

const ProfileModal = ({ show, setShow, type }) => {
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

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
          Close
        </button>
        <button
          className="button-light"
          onClick={() => {
            dispatch(updateProfilePath(selectedAvatar))
              .then(dispatch(fetchUserData()))
              .then(() => setShow(false));
          }}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
