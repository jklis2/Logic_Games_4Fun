import React from "react";

export const PasswordForm = () => {
  return (
    <form action="#" className="form py-3 w-100 px-3">
      <div className="d-flex flex-column">
        <label className="form__label mb-2" id="curPassword">
          Current password
        </label>
        <input type="password" name="" id="curPassword" className="form__input" />
      </div>
      <div className="d-flex flex-column mt-3">
        <label className="form__label mb-2" id="newPassword">
          New password
        </label>
        <input type="password" name="" id="newPassword" className="form__input" />
      </div>
      <div className="d-flex flex-column mt-3">
        <label className="form__label mb-2" id="confirmNewPassword">
        Confirm password
        </label>
        <input
          type="password"
          name=""
          id="confirmNewPassword"
          className="form__input"
        />
      </div>
    </form>
  );
};
