import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../UI/Button/Button.scss";
import { Link } from "react-router-dom";

export const HomeForm = () => {
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
                <Nav.Link as={Link} to="/Home" className="fs-2">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard" className="fs-2">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="fs-2">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus" className="fs-2">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="fs-2">
                  Contact
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
              <p className="mt-4 fs-4">
                We're a startup that wants to show people that browser games
                don't have to be violent, addictive or pointless. Logic Games
                4Fun is created to encourage people to practice their mind. Our
                logic games will be adapted to people of all ages, through
                different levels of difficulty.
              </p>
              <Link to="/Login">
                <button className="button-light">Get started</button>
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
              Logical games help in developing mathematical cunning, teach
              predicting the effects of one's own decisions and strategic
              planning.
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
              Logical games support analysis and synthesis, teach how to read
              facts, force you to think and look for the best solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
