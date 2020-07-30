import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

import "./Header.css"

const MenuButton = styled.button`
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  background-color: #3040c4;
  padding: 15px 30px 15px 30px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin-right: 60px;

  &:hover {
    background-color: white;
    color: #3040c4;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }

  @media (max-width: 575px) {
    margin-right: 0;
    margin-bottom: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    margin-right: 20px;
    padding: 10px 15px 10px 15px;
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
    margin-right: 30px;
    padding: 10px 25px 10px 25px;
  }
`

const CallButton = styled.button`
  border: none;
  display: none;
  height: 50px;
  width: 50px;

  padding: 12.5px 0;
  border-radius: 50%;

  font-family: "BlackTie";
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  background: #3040c4;
  color: #fff;

  @media (max-width: 575px) {
    display: inline;
  }
`

const ToggleButton = styled.button`
  border: none;
  display: none;
  height: 50px;
  width: 50px;

  padding: 12.5px 0;
  border-radius: 50%;

  font-family: "BlackTie";
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  background: #3040c4;
  color: #fff;

  @media (max-width: 575px) {
    display: inline;
  }
`

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" fixed="top">
          <Navbar.Brand href="/">LessonUp</Navbar.Brand>
          <div>
            <a href="tel:+61407145612">
              <CallButton></CallButton>
            </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <ToggleButton></ToggleButton>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="../../study-support">Study Support</Nav.Link>
              <Nav.Link href="../../tutoring">Tutoring</Nav.Link>
              <Nav.Link href="../../online-courses">Online Courses</Nav.Link>
              <Nav.Link href="../../about-us" className="small-hidden">
                About Us
              </Nav.Link>
            </Nav>
            <Nav href="contact-us" className="call-to-action">
              <Link to="contact-us">
                <MenuButton className="calltobutton">Enquire Today!</MenuButton>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
