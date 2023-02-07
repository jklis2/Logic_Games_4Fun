import React from "react";
import "../CSS/ProfileForm.css";
import { EditProfileForm } from "../EditData/EditProfileForm";
import { EditPhotoForm } from "../EditData/EditPhotoForm";
import { EditPasswordForm } from "../EditData/EditPasswordForm";

export const ProfileForm = () => {
  // Edit profile
  const [openEditProfile, setOpenEditProfile] = React.useState(false);

  const handleClickOpenEditProfile = () => {
    setOpenEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setOpenEditProfile(false);
  };

  // Edit password
  const [openEditPassword, setOpenEditPassword] = React.useState(false);

  const handleClickOpenEditPassword = () => {
    setOpenEditPassword(true);
  };

  const handleCloseEditPassword = () => {
    setOpenEditPassword(false);
  };

  // Edit photo
  const [openEditPhoto, setOpenEditPhoto] = React.useState(false);

  const handleClickOpenEditPhoto = () => {
    setOpenEditPhoto(true);
  };

  const handleCloseEditPhoto = () => {
    setOpenEditPhoto(false);
  };

  return (
    <>
      <EditProfileForm open={openEditProfile} setOpen={setOpenEditProfile} handleClickOpen={handleClickOpenEditProfile} handleClose={handleCloseEditProfile}/>
      <EditPasswordForm open={openEditPassword} setOpen={setOpenEditPassword} handleClickOpen={handleClickOpenEditPassword} handleClose={handleCloseEditPassword}/>
      <EditPhotoForm open={openEditPhoto} setOpen={setOpenEditPhoto} handleClickOpen={handleClickOpenEditPhoto} handleClose={handleCloseEditPhoto}/>
      <div className="myProfile-page-content">
        <div id="myProfile-info">
          <div className="user-avatar">
            <img onClick={handleClickOpenEditPhoto}
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
              alt="User avatar"
            ></img>
          </div>
          <div className="user-nickname">
            <h1>Nickname</h1>
          </div>
          <div className="user-information">
            <div className="name-and-surname">
              <p1 id="name">Name</p1>
              <p1>Surname</p1>
            </div>
            <div className="gender-and-birthDate">
              <p1 id="gender">Gender</p1>
              <p1>Date of birth</p1>
            </div>
            <div className="email">
              <p1>Email</p1>
            </div>
          </div>
          <div className="myProfile-buttons">
            <div className="change-data-buttons">
              <button onClick={handleClickOpenEditProfile} id="button">Edit profile</button>
              <button onClick={handleClickOpenEditPassword} id="button">Change password</button>
            </div>
            <div className="back-to-dashboard-button">
              <a href="/Dashboard">
                <button id="button">Back to dashboard</button>
              </a>
            </div>
          </div>
        </div>
        <div id="myProfile-achievements">
          <div className="achievements-title">
            <h1>My achievements</h1>
          </div>
        </div>
      </div>
    </>
  );
};
