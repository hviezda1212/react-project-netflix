import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../common/Footer/Footer";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import "./AppLayout.style.css";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    if (keyword.trim() !== "") {
      navigate(`/movies?q=${keyword}`);
    }
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <Link to="/" className="logo">
              <img width={90} src={logoImg} alt="Netfilx logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0 text-white"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link as={Link} to="">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="movies">
                Movies
              </Nav.Link>
            </Nav>
            <Form onSubmit={searchByKeyword}>
              <InputGroup>
                <Form.Control
                  data-bs-theme="dark"
                  type="search"
                  placeholder="Search"
                  className="me-2 search-box"
                  aria-label="Search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button variant="outline-danger" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
