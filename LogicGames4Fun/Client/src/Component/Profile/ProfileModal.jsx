import Modal from "react-bootstrap/Modal";
import { userAvatars } from "./userAvatars";
import { useState } from "react";

const ProfileModal = ({ show, setShow }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleAvatarClick = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  return (
    <Modal
      size="xl"
      centered
      className="w-100"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Select an avatar</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-wrap justify-content-center ">
        {userAvatars.map((avatar) => (
          <div
            key={avatar.id}
            className={
              selectedAvatar === avatar.id ? "profile__avatar-selected" : ""
            }
            onClick={() => handleAvatarClick(avatar.id)}
          >
            <img className="w-100" src={avatar.src} alt={avatar.alt} />
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          Close
        </button>
        <button className="button-light" onClick={() => setShow(false)}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
