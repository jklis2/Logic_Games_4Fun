import Modal from "react-bootstrap/Modal";
import { AvatarForm } from "./AvatarForm";
import { PasswordForm } from "./PasswordForm";
import { ProfileForm } from "./ProfileForm";
import { useState } from "react";

const ProfileModal = ({ show, setShow, type }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  return (
    <Modal
      size={type === "avatar" ? "xl" : "md"}
      centered
      className="w-100 "
      show={show}
      onHide={() => setShow(false)}
    >
      {type === "profile" && <ProfileForm setShow={setShow} />}
      {type === "password" && <PasswordForm setShow={setShow} />}
      {type === "avatar" && (
        <AvatarForm
          setShow={setShow}
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
        />
      )}
    </Modal>
  );
};

export default ProfileModal;
