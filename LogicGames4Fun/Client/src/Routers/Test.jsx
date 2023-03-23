import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Test.module.scss";

export function Test() {
  return (
    <div className={styles['home-container']}>
      <div className={`container-xxl w-75 bg-light ${styles['home-box']}`}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className={styles['home-logo']}>
              <img
                src={`${process.env.PUBLIC_URL}/Images/LogicGames4FunLogo.png`}
                alt="Logic Games 4Fun Logo"
              ></img>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="#link">Dashboard</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <div className={styles["home-content"]}>
        <div className="w-50">
          <div className="p-3">
            <h2>Logic Games 4Fun</h2>
            <p style={{ textAlign: "justify" }}>
              We're a startup that wants to show people that browser games don't
              have to be violent, addictive or pointless. Logic Games 4Fun is
              created to encourage people to practice their mind. Our logic
              games will be adapted to people of all ages, through different
              levels of difficulty.
            </p>
            <a href="/Login">
              <button>Get started</button>
            </a>
          </div>
        </div>

        <div className="d-flex flex-center justify-content-center align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Brain.png`}
            alt="Brain icon"
          ></img>
        </div>
      </div>

      {/* facts */}
      <div className={styles["home-facts"]}>
        <div className={`${styles['home-fact']} d-flex flex-center align-items-center`}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Bulb.png`}
            alt="Bulb icon"
          ></img>
          <p style={{ textAlign: "justify" }}>
            Logical games help in developing mathematical cunning, teach
            predicting the effects of one's own decisions and strategic
            planning.
          </p>
        </div>
        <div className={`${styles['home-fact']} d-flex flex-center align-items-center`}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Bulb.png`}
            alt="Bulb icon"
          ></img>
          <p style={{ textAlign: "justify" }}>
            Logical games support analysis and synthesis, teach how to read
            facts, force you to think and look for the best solutions.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Test;
