import React from "react";

export const ProfileForm = () => {
  return (
    <form className="form d-flex flex-column w-100 px-3">
      <label htmlFor="dateOfBirth" className="form__label">
        Date of birth
      </label>
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        className="form__input"
      />

      <label htmlFor="email" className="form__label mt-3">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        className="form__input"
      />

      <label htmlFor="description" className="form__label mt-3">
        Description
      </label>
      <textarea
        className="form__input"
        name=""
        id="description"
        cols="30"
        rows="10"
      ></textarea>
    </form>
  );
};
