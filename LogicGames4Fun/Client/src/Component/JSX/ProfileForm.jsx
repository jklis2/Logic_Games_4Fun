import React from "react";
import "../CSS/ProfileForm.css";

export const ProfileForm = () => {
  return (
    <>
      <div className="myProfile-page-content">
        <div id="myProfile-info">
          <div className="user-avatar">
            <img
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
              <button id="button">Edit profile</button>
              <button id="button">Edit password</button>
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
            <h1>Achievements</h1>
          </div>
        </div>
      </div>
    </>
  );
};
