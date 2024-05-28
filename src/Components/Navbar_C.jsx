import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Navbar_C = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleShow = () => {
    if (show) {
      handleClose();
    } else {
      handleShow();
    }
  };

  return (
    <>
      <div className="sideup">
      <Nav.Link href="#home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          fill="currentColor"
          class="bi bi-caret-up-fill"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
        </Nav.Link>
      </div>
      <Navbar
        expand="lg"
        sticky="top"
        className="pt-lg-5  pb-5 shadow-lg bg-light"
      >
        <Container className="">
          <Navbar.Brand href="#home">
            <img
              src="https://www.vebbox.com/assets/img/LOGO.png"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Service</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#contact">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Button
                    as="input"
                    type="submit"
                    value="Get Started"
                    className="custom-button p-2 px-4"
                  />
                </Form.Group>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link href="#service" onClick={handleClose}>
              Service
            </Nav.Link>
            <Nav.Link href="#products" onClick={handleClose}>
              Products
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleClose}>
              About us
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleClose}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Button
                  as="input"
                  type="submit"
                  value="Get Started"
                  className="custom-button p-2 px-4"
                />
              </Form.Group>
            </Nav.Link>
          </Nav>
        </Modal.Body>
      </Modal>
    </>
  );
};
