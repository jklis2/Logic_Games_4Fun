import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AboutUsForm = () => {
  const [t] = useTranslation(["translation", "aboutUs"]);

  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="about__box bg-light w-75">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
              alt="Logic Games 4Fun Logo"
            ></img>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <h2>{t("aboutUs.welcomeMessage")}</h2>
          </div>
        </div>
        <p className="fs-4 mt-5 px-5">{t("aboutUs.introduction")}</p>
        <div className="fs-4 mx-5">
          <Link to="/Home">
            <button className="mt-3 mb-5 button-light">
              {t("aboutUs.backToHomeButton")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
