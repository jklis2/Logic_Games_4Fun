import Modal from "react-bootstrap/Modal";
import { AvatarForm } from "./AvatarForm";
import { PasswordForm } from "./PasswordForm";
import { ProfileForm } from "./ProfileForm";

const ProfileModal = ({ show, setShow, type }) => {
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
        {type === "avatar" && <AvatarForm />}
      </Modal.Body>

      <Modal.Footer>
        <button className="button-light" onClick={() => setShow(false)}>
          Close
        </button>
        <button className="button-light" onClick={() => setShow(false)}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
