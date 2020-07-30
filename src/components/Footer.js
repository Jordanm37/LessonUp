import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import "./Footer.css"

const FooterGroup = styled.div`
  background-color: #151a3f;
  margin-top: 4rem;
  color: #ffffff;
  padding-top: 60px;
  padding-bottom: 40px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 40px;
  color: #f9d9eb;
`

const Disclaimer = styled.p`
  font-weight: normal;
  font-size: 12.5px;
  padding-right: 60px;

  @media (max-width: 575px) {
    padding-right: 0;
  }
`

const Heading = styled.p`
  font-weight: bold;
  color: #f9d9eb;
  font-size: 18px;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterGroup>
        <Container className="footer-container">
          <Row>
            <Col sm={12} md={5}>
              <Title>LessonUp</Title>
              <Disclaimer>
                ABN: 58 528 351 486 Copyright © Lesson Up.
              </Disclaimer>
              <Disclaimer>
                All Rights Reserved. The VCAA does not endorse and is not
                affiliated with LessonUP or lessonup.com.au. The VCAA provides
                the only official, up to date versions of VCAA publications and
                information about courses including the VCE. VCE® is a
                registered trademark of the VCAA.
              </Disclaimer>
              <hr
                className="MD-Show"
                style={{
                  color: "#fff",
                  border: "1px solid #fff",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                }}
              />
            </Col>
            <Col sm={6} md={3} className="footer-hidden">
              <Heading>Navigation</Heading>
              <ul>
                <li>
                  <Link to="/study-support">Study Support</Link>
                </li>
                <li>
                  <Link to="/tutoring">Tutoring</Link>
                </li>
                <li>
                  <Link to="/online-courses">Online Courses</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={4}>
              <Heading>Contact Us</Heading>
              <div>
                <p className="contact">
                  <b>Phone:</b> 0407 145 612 <br /> Call us Monday to Friday
                  between 3pm - 6pm or leave us a message and we'll call you
                  back!
                </p>
                <p className="contact">
                  <b>Email:</b> hello@lessonup.com.au
                </p>
                <p className="contact">
                  <b>Address:</b> We'd love to see you too, but we're only
                  online! Our tutors meet students at homes and local libraries.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterGroup>
    )
  }
}

export default Footer
