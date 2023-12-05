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
        <Dialog maxWidth= "xl" open={props.open} onClose={props.handleClose}>
          <DialogTitle sx={{display: "flex", justifyContent: "center", overflow: "hidden", fontWeight: "bold" }}>Change avatar</DialogTitle>
          <DialogContent sx={{textAlign: "center", width: "700px"}}>
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
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar11.png`}
              alt="User avatar 11"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar12.png`}
              alt="User avatar 12"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar13.png`}
              alt="User avatar 13"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar14.png`}
              alt="User avatar 14"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar15.png`}
              alt="User avatar 15"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar16.png`}
              alt="User avatar 16"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar17.png`}
              alt="User avatar 17"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar18.png`}
              alt="User avatar 18"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar19.png`}
              alt="User avatar 19"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar20.png`}
              alt="User avatar 20"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar21.png`}
              alt="User avatar 21"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar22.png`}
              alt="User avatar 22"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar23.png`}
              alt="User avatar 23"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar24.png`}
              alt="User avatar 24"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar25.png`}
              alt="User avatar 25"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar26.png`}
              alt="User avatar 26"
            ></img>
          </DialogContent>
          <DialogActions sx={{display: "flex", justifyContent: "center"}}>
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={props.handleClose}>Save changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
