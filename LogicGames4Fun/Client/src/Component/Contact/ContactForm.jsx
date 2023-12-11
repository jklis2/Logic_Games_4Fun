import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const [t] = useTranslation(["translation", "contact"]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 10000);
  };

  return (
    <div className="contact d-flex justify-content-center align-items-center">
      <div className="contact__box bg-light w-75">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="d-flex flex-center justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
              alt="Logic Games 4Fun Logo"
            ></img>
          </div>
          <h2 className="h2 mx-4">{t("contact.header")}</h2>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            className="contact__input"
            type="text"
            placeholder={t("contact.namePlaceholder")}
          ></input>
          <input
            className="contact__input"
            type="email"
            placeholder={t("contact.emailPlaceholder")}
          ></input>
          <textarea
            className="contact__input"
            rows="3"
            placeholder={t("contact.messagePlaceholder")}
          ></textarea>
        </form>
        {showSuccessAlert && (
          <div
            className="alert alert-success fs-3 alert-dismissible fade show fixed-top w-50 d-flex justify-content-between"
            role="alert"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2rem",
            }}
          >
            {t("contact.sendMessageAlert")}
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowSuccessAlert(false)}
            ></button>
          </div>
        )}
        <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
            <Link to="/Home">
              <button as={Link} className="button-light">
                {t("contact.backToHomeButton")}
              </button>
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
            <button
              className="button-light mt-5 mt-md-0"
              onClick={handleSubmit}
            >
              {t("contact.sendMessageButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
