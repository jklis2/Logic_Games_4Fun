import React from "react";
import classes from "./SwitchTheme.module.css";

export const SwitchThemeForm = () => {
    return (
      <>
        <label className={classes.switch}>
            <input type="checkbox"/>
            <span className={classes.slider}></span>
        </label>
      </>
    );
  };