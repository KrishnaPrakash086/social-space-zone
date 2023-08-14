import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import PostInputModal from "./PostInputModal";
import { selectUser } from "../slice/features/user/userSlice";

function Header() {
  const user = useSelector(selectUser);
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          {/* <Row className="d-flex flex-direction-col justify-content-center"> */}
          <Navbar.Brand href="#">Social Site</Navbar.Brand>
          <Nav>
            <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className=""
                style={{ width: "400px", paddingLeft: "40px" }}
              />
              <AiOutlineSearch
                className="position-absolute start-0 ms-4 top-50 translate-middle"
                size={20}
              />
            </Form>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className="ms-auto">
              <NavDropdown
                title={user.name}
                align="end"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* </Row> */}
        </Container>
      </Navbar>

      <PostInputModal />
    </header>
  );
}

export default Header;
