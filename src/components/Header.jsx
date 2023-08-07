import React, { useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import PostInputModal from "./PostInputModal";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/features/user/userSlice";

// Dummy list of cities for demonstration purposes which should come from google without writing it manually
const cities = [
  "Mumbai",
  "Delhi",
  "Chennai",
  // ... List of other cities ...
  "Guwahati",
  "Warangal",
  "Kochi",
  "Udaipur",
  "Chandigarh",
  "Hyderabad",
  "Bengaluru",
  // Add more cities as needed
];

const Header = () => {
  const user = useSelector(selectUser);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCityList, setShowCityList] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCitySelection = (city) => {
    setSearchQuery(city);
    setShowCityList(false);
  };

  const toggleCityList = () => {
    setShowCityList((prev) => !prev);
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Social Space Zone</Navbar.Brand>
          <Nav>
            <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search City"
                aria-label="Search"
                style={{ width: "400px", paddingLeft: "40px" }}
                value={searchQuery}
                onChange={handleSearch}
                onClick={() => setShowCityList(true)}
              />
              <AiOutlineSearch
                className="position-absolute start-0 ms-4 top-50 translate-middle"
                size={20}
              />
              <AiOutlineDown
                className="position-absolute end-0 me-2 top-50 translate-middle"
                size={20}
                onClick={toggleCityList}
              />
              {showCityList && (
                <div
                  className="position-absolute mt-2 bg-white border rounded"
                  style={{ width: "400px", zIndex: "1", top: "100%" }}
                  onClick={() => setShowCityList(false)}
                >
                  {cities
                    .filter((city) =>
                      city.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((city) => (
                      <div
                        key={city}
                        className="p-2 cursor-pointer"
                        onClick={() => handleCitySelection(city)}
                      >
                        {city}
                      </div>
                    ))}
                </div>
              )}
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
        </Container>
      </Navbar>

      <PostInputModal />
    </header>
  );
};

export default Header;
