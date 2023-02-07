import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const EditPhotoForm = (props) => {
  return (
    <>
      <div>
        <Dialog open={props.open} onClose={props.handleClose}>
          <DialogTitle>Change avatar</DialogTitle>
          <DialogContent>
          <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
              alt="User avatar 1"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar2.png`}
              alt="User avatar 2"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar3.png`}
              alt="User avatar 3"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar4.png`}
              alt="User avatar 4"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar5.png`}
              alt="User avatar 5"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar6.png`}
              alt="User avatar 6"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar7.png`}
              alt="User avatar 7"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar8.png`}
              alt="User avatar 8"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar9.png`}
              alt="User avatar 9"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar10.png`}
              alt="User avatar 10"
            ></img>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={props.handleClose}>Save changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
