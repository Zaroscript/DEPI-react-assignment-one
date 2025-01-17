import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faPlus,
  faSun,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
    this.navbarRef = React.createRef();
  }

  handleCartCount = () => {
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + 1,
    }));
  };

  handleNavClose = () => {
    const collapse = this.navbarRef.current;
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  render() {
    const { cartCount } = this.state;

    return (
      <Navbar expand="lg" className="bg-white border-bottom py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#" className="order-1">
            <img
              alt="Logo"
              src="/public/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top d-none d-sm-inline-block"
            />{" "}
            Finder
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="order-0 border-0 toggle-button"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="order-2 side-nav"
            ref={this.navbarRef}
          >
            <div className="mb-4 d-flex align-items-baseline justify-content-between d-lg-none">
              <h2>Menu</h2>
              <FontAwesomeIcon
                icon={faXmark}
                className="clickable"
                onClick={this.handleNavClose}
              />
            </div>
            <Nav className="gap-1">
              <Nav.Link
                href="#"
                className="py-2 px-3 nav-link active rounded-3"
              >
                Home
                <FontAwesomeIcon
                  icon={faAngleDown}
                  fontSize={12}
                  className="ms-1"
                />
              </Nav.Link>
              <Nav.Link href="#" className="py-2 px-3 rounded-3">
                Listings
                <FontAwesomeIcon
                  icon={faAngleDown}
                  fontSize={12}
                  className="ms-1"
                />
              </Nav.Link>
              <Nav.Link href="#" className="py-2 px-3 rounded-3">
                Account
                <FontAwesomeIcon
                  icon={faAngleDown}
                  fontSize={12}
                  className="ms-1"
                />
              </Nav.Link>
              <Nav.Link href="#" className="py-2 px-3 rounded-3">
                Pages
                <FontAwesomeIcon
                  icon={faAngleDown}
                  fontSize={12}
                  className="ms-1"
                />
              </Nav.Link>
              <Nav.Link href="#" className="py-2 px-3 rounded-3">
                Docs
              </Nav.Link>
              <Nav.Link href="#" className="py-2 px-3 rounded-3">
                Components
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="order-3 d-flex gap-4 align-items-center primary-text clickable">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faUser} />

            <Button className="btn-bg">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add
              <span className="d-none d-xl-inline ms-1">Property</span>
            </Button>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon
                icon={faPlus}
                className="rounded btn-bg p-2 text-white"
                onClick={this.handleCartCount}
              />
              <span className="position-relative">
                <span className={`cartCount ${cartCount > 0 ? "" : "d-none"}`}>
                  {cartCount}
                </span>

                <FontAwesomeIcon icon={faCartShopping} className="fs-4" />
              </span>
            </div>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
