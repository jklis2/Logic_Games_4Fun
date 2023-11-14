import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "../UI/Button/Button.scss";
import { Link } from "react-router-dom";

export const InternalNavbar = () => {
  const settings = [
    "🪪 Profile",
    "🏠 Dashboard",
    "❤️ Favourite games",
    "🏆 Achievements",
    "🐾 Logout",
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
                  src={`${process.env.PUBLIC_URL}/UserAvatars/UserAvatar1.png`}
                  alt=""
                  className="w-100"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {settings.map((setting) => (
                <Dropdown.Item key={setting}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${setting.slice(2).replaceAll(" ", "")}`}
                  >
                    {" "}
                    {setting}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
