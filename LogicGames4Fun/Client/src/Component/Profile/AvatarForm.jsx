import React from "react";
import { userAvatars } from "./userAvatars";
import { useState } from "react";

export const AvatarForm = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleAvatarClick = (avatarId) => {
    setSelectedAvatar(avatarId);
  };

  return userAvatars.map((avatar) => (
    <div
      key={avatar.id}
      className={selectedAvatar === avatar.id ? "profile__avatar-selected" : ""}
      onClick={() => handleAvatarClick(avatar.id)}
    >
      <img className="w-100" src={avatar.src} alt={avatar.alt} />
    </div>
  ));
};
