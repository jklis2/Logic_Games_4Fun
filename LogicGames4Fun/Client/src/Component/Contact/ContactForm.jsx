import React from "react";
import { Link } from "react-router-dom";

export const ContactForm = () => {
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
          <h2 className="h2">Contact Us</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="">
          <input
            className="contact__input"
            type="text"
            placeholder="Your Name"
          ></input>
          <input
            className="contact__input"
            type="email"
            placeholder="Your Email"
          ></input>
          <textarea
            className="contact__input"
            rows="3"
            placeholder="Your Message"
          ></textarea>
        </form>
        <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
            <Link to="/Home">
              <button as={Link} className="button-light">
                Back to home
              </button>
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
            <button className="button-light mt-5 mt-md-0">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
