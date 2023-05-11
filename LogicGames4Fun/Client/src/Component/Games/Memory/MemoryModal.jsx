import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const MemoryModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            🎉 Congrats! 🎉
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have just successfully completed level! 🥳</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "rgba(29, 125, 189, 0.753)",
              border: " 1px solid rgba(29, 125, 189, 0.753)",
            }}
            onClick={props.onHide}
          >
            Next level ➡️
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default MemoryModal;