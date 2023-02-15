import React, { useEffect, useState } from "react";
import "./ProfileForm.css";
import { EditProfileForm } from "../EditData/EditProfileForm";
import { EditPhotoForm } from "../EditData/EditPhotoForm";
import { EditPasswordForm } from "../EditData/EditPasswordForm";

export const ProfileForm = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromAPI = localStorage.getItem("user");
    userFromAPI && setUser(JSON.parse(userFromAPI));
  }, []);

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
      <EditProfileForm
        open={openEditProfile}
        setOpen={setOpenEditProfile}
        handleClickOpen={handleClickOpenEditProfile}
        handleClose={handleCloseEditProfile}
      />
      <EditPasswordForm
        open={openEditPassword}
        setOpen={setOpenEditPassword}
        handleClickOpen={handleClickOpenEditPassword}
        handleClose={handleCloseEditPassword}
      />
      <EditPhotoForm
        open={openEditPhoto}
        setOpen={setOpenEditPhoto}
        handleClickOpen={handleClickOpenEditPhoto}
        handleClose={handleCloseEditPhoto}
      />
      <div className="myProfile-page-content">
        <div id="myProfile-info">
          <div className="user-avatar">
            <img
              onClick={handleClickOpenEditPhoto}
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
              alt="User avatar"
            ></img>
          </div>
          <div className="user-info">
            <span className="user-info__nickname">{user?.login}</span>
            <span className="user-info__primary-info">
              {" "}
              Online | {user?.gender} |{" "}
              {user?.dateOfBirth.toLocaleString("en-US")}{" "}
            </span>
          </div>
          <div className="hr"></div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga
            repellendus cupiditate, blanditiis necessitatibus vero provident
            dignissimos, fugit nisi explicabo aut ab deleniti laboriosam
            voluptatum distinctio. Quasi atque blanditiis fugit.
          </div>

          <div className="hr"></div>
          <div className="buttons">
            <button onClick={handleClickOpenEditProfile} id="button">
              Edit profile
            </button>
            <button onClick={handleClickOpenEditPassword} id="button">
              Change password
            </button>
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
