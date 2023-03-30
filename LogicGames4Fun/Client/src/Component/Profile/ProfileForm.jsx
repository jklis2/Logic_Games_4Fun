import React, { useEffect, useState } from "react";
import styles from "./ProfileForm.module.scss";
import { EditProfileForm } from "../EditData/EditProfileForm";
import { EditPhotoForm } from "../EditData/EditPhotoForm";
import { EditPasswordForm } from "../EditData/EditPasswordForm";
import ReactDOM from "react-dom";

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
    <div>
      {ReactDOM.createPortal(
        <EditProfileForm
          open={openEditProfile}
          setOpen={setOpenEditProfile}
          handleClickOpen={handleClickOpenEditProfile}
          handleClose={handleCloseEditProfile}
        />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <EditPasswordForm
          open={openEditPassword}
          setOpen={setOpenEditPassword}
          handleClickOpen={handleClickOpenEditPassword}
          handleClose={handleCloseEditPassword}
        />,
        document.getElementById("modal-root")
      )}

      {ReactDOM.createPortal(
        <EditPhotoForm
          open={openEditPhoto}
          setOpen={setOpenEditPhoto}
          handleClickOpen={handleClickOpenEditPhoto}
          handleClose={handleCloseEditPhoto}
        />,
        document.getElementById("modal-root")
      )}

      <div className={styles["myProfile-page-content"]}>
        <div className={styles["myProfile-info"]}>
          <div className={styles["user-avatar"]}>
            <img
              onClick={handleClickOpenEditPhoto}
              src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
              alt="User avatar"
            ></img>
          </div>
          <div className={styles["user-info"]}>
            <span className={styles["user-info__nickname"]}>{user?.login}</span>
            <span className={styles["user-info__primary-info"]}>
              {" "}
              Online | {user?.gender} |{" "}
              {user?.dateOfBirth.toLocaleString("en-US")}{" "}
            </span>
          </div>
          <div className={styles["hr"]}></div>
          <div className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga
            repellendus cupiditate, blanditiis necessitatibus vero provident
            dignissimos, fugit nisi explicabo aut ab deleniti laboriosam
            voluptatum distinctio. Quasi atque blanditiis fugit.
          </div>

          <div className={styles["hr"]}></div>
          <div className={styles["buttons"]}>
            <button onClick={handleClickOpenEditProfile} className={styles["button"]}>
              Edit profile
            </button>
            <button onClick={handleClickOpenEditPassword} className={styles["button"]}>
              Change password
            </button>
            <div className={styles["back-to-dashboard-button"]}>
              <a href="/Dashboard">
                <button className={styles["button"]}>Back to dashboard</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["myProfile-achievements"]}>
          <div className={styles["achievements-title"]}>
            <h1>My achievements</h1>
            <div>Some achievements</div>
          </div>
        </div>
      </div>
    </div>
  );
};
