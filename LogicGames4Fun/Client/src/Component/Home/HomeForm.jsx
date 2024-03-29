import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../UI/Button/Button.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const HomeForm = () => {
  const [t] = useTranslation(["translation", "home"]);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="home__box container-xxl w-75 bg-light">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <div className="home__logo">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/LogicGames4FunLogo.png`}
                  alt="Logic Games 4Fun Logo"
                ></img>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home" className="fs-2">
                  {t("nav.home")}
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard" className="fs-2">
                  {t("nav.dashboard")}
                </Nav.Link>
                {!user && (
                  <Nav.Link as={Link} to="/auth" className="fs-2">
                    {t("nav.login")}
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="/aboutus" className="fs-2">
                  {t("nav.aboutUs")}
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="fs-2">
                  {t("nav.contact")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Content */}
        <div className="home__content row">
          <div className="col-md-12 col-lg-6">
            <div className="p-3">
              <h2 className="h2 mt-5">Logic Games 4Fun</h2>
              <p className="mt-4 fs-4">{t("content.description")}</p>
              <Link to="/Login">
                <button className="button-light">
                  {t("buttons.getStarted")}
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 d-flex justify-content-center">
            <img
              className="w-sm-auto w-auto"
              src={`${process.env.PUBLIC_URL}/Images/Brain.png`}
              alt="Brain icon"
            ></img>
          </div>
        </div>

        <div className="home__facts mt-4 justify-content-start mx-0 mx-md-5 row">
          <div className="fact-card d-flex flex-sm-row flex-column col-md-12 col-lg-6">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Bulb.png`}
              alt="Bulb icon"
            ></img>
            <p
              className="fs-4 mx-4 d-flex align-items-center"
              style={{ textAlign: "justify" }}
            >
              {t("facts.fact1")}
            </p>
          </div>
          <div className="fact-card d-flex flex-sm-row flex-column col-md-12 col-lg-6">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Bulb.png`}
              alt="Bulb icon"
            ></img>
            <p
              className="fs-4 mx-4 d-flex align-items-center"
              style={{ textAlign: "justify" }}
            >
              {t("facts.fact2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
