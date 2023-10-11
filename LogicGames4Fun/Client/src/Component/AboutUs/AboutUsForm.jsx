import React from "react";
import { Link } from "react-router-dom";

export const AboutUsForm = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="about__box bg-light w-75">
        <div className="row">
          <div className="col-12 d-flex justify-content-center" >
            <img
              src={`${process.env.PUBLIC_URL}/Images/LogoLogicGames4Fun_smaller.png`}
              alt="Logic Games 4Fun Logo"
            ></img>
          </div>
          <div className="col-12 d-flex justify-content-center" >
            <h2>Nice to meet you!</h2>
          </div>
        </div>
        <p className="fs-4 mt-5 px-5">
          We're Mateusz and Kuba, IT students from Cracow and developers of
          Logic Games 4Fun. Our journey started when both us were trying to come
          up with an idea for an engineering thesis. Our startup that wants to
          show people that browser games don't have to be violent, addictive or
          pointless. Logic Games 4Fun is created to encourage people to practice
          their mind. Our logic games will be adapted to people of all ages,
          through different levels of difficulty. After a friend connected us,
          the rest is history.
        </p>
        <div className="fs-4 mx-5">
          <Link to="/Home">
            <button className="mt-3 mb-5 button-light">Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};