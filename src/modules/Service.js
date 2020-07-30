import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import BlueButton from "../components/BlueButton"
import BookingForm from "../components/BookingForm"

import Layout from "../layouts/default"
import SEO from "../components/SEO"

const ServiceBox = styled.div`
  text-align: center;
  padding: 2rem;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 3rem;

  span {
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    margin: 0.5rem 0;
  }
`

export const Service = ({ service }) => {
  const serviceName = service.split("%20").join(" ")
  const title = `${serviceName} Booking`

  const services = [
    "Tutoring",
    "Tutoring + RM",
    "Tutoring + RM Gold",
    "Renaissance Method",
  ]

  if (services.includes(serviceName)) {
    return (
      <Layout>
        <SEO title={title} />
        <div className="SectionTitle First">Almost there...</div>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={6}>
              <ServiceBox>
                You're booking the
                <span style={{ display: "block" }}> {serviceName} </span>
                LessonUP service.
              </ServiceBox>
            </Col>
          </Row>
        </Container>
        <BookingForm service={serviceName} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title={title} />
        <div className="SectionTitle First">Service Doesn't Exist!</div>
        <div className="SectionText" style={{ textAlign: "center" }}>
          We've received your request & we'll be in contact with you shortly.
          <Link to="/" style={{ textDecoration: "none" }}>
            <BlueButton
              style={{ display: "block", margin: "1rem auto", padding: "1rem" }}
              buttonText="Return Home"
            />
          </Link>
        </div>
      </Layout>
    )
  }
}
