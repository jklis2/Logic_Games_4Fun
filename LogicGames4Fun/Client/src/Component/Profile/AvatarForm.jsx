import React from "react";
import { userAvatars } from "./userAvatars";

export const AvatarForm = ({ selectedAvatar, setSelectedAvatar }) => {
  const handleAvatarClick = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  return userAvatars.map((avatar) => (
    <div
      key={avatar.id}
      className={selectedAvatar === avatar.src ? "profile__avatar-selected" : ""}
      onClick={() => handleAvatarClick(avatar.src)}
    >
      <img className="w-100" src={avatar.src} alt={avatar.alt} />
    </div>
  ));
};
