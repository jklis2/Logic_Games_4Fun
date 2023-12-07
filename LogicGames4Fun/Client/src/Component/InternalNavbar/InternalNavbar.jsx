import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "../UI/Button/Button.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const InternalNavbar = () => {
  const [t] = useTranslation(["translation", "navbar"]);
  const { user } = useSelector((state) => state.auth);

  const settings = [
    {
      label: t("navbar.profile"),
      path: "/profile",
      allowedForLoggedInUser: true,
    },
    {
      label: t("navbar.dashboard"),
      path: "/dashboard",
    },
    {
      label: t("navbar.favouriteGames"),
      path: "/favouritegames",
      allowedForLoggedInUser: true,
    },
    {
      label: t("navbar.achievements"),
      path: "/achievements",
      allowedForLoggedInUser: true,
    },
    {
      label: t("navbar.settings"),
      path: "/settings",
    },
    {
      label: t("navbar.logout"),
      path: "/logout",
      allowedForLoggedInUser: true,
    },
  ];

  return (
    <Navbar expand="lg" className="internal-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="home__logo d-flex">
            <img
              src={`${process.env.PUBLIC_URL}/Images/NavbarLogo.png`}
              alt="Logic Games 4Fun Logo"
            ></img>
            <p className="internal-navbar__title d-flex align-items-center mx-2">
              Logic Games 4Fun{" "}
            </p>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="d-none" aria-controls="basic-navbar-nav" />
        <Nav className="ms-auto">
          <Dropdown>
            <Dropdown.Toggle
              variant="transparent"
              className="dropdown-toggle-no-caret"
              id="dropdown-basic"
            >
              <div className="internal-navbar__icon">
                <img
                  src={`${process.env.PUBLIC_URL}${
                    user ? user.path : "/UserAvatars/UserPlaceholder.png"
                  }`}
                  alt=""
                  className="w-100"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {settings.map((setting) => {
                if (!user && setting.allowedForLoggedInUser) {
                  return null;
                }
                return (
                  <Dropdown.Item as="div" key={setting.path}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={setting.path}
                    >
                      {setting.label}
                    </Link>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
