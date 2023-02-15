import React, {useEffect, useState} from "react";
import "./ProfileForm.css";
import { EditProfileForm } from "../EditData/EditProfileForm";
import { EditPhotoForm } from "../EditData/EditPhotoForm";
import { EditPasswordForm } from "../EditData/EditPasswordForm";

export const ProfileForm = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userFromAPI = localStorage.getItem('user');
    userFromAPI && setUser(JSON.parse(userFromAPI))
  }, [])

  // Edit profile
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const handleClickOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);

  // Edit password
  const [openEditPassword, setOpenEditPassword] = useState(false);
  const handleClickOpenEditPassword = () => setOpenEditPassword(true);
  const handleCloseEditPassword = () => setOpenEditPassword(false);

  // Edit photo
  const [openEditPhoto, setOpenEditPhoto] = useState(false);
  const handleClickOpenEditPhoto = () => setOpenEditPhoto(true);
  const handleCloseEditPhoto = () => setOpenEditPhoto(false);

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
            <h1>{user?.login}</h1>
          </div>
          <div className="user-information">
            <div className="name-and-surname">
              <p id="name">Name: {user?.name}</p>
              <p>Surname {user?.surname} </p>
            </div>
            <div className="gender-and-birthDate">
              <p id="gender">Gender: {user?.gender} </p>
              <p>Date of birth {user?.dateOfBirth.toLocaleString("en-US")}</p>
            </div>
            <div className="email">
              <p>Email: {user?.email}</p>
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