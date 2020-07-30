import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

import Layout from "../layouts/default"
import SEO from "../components/SEO"
import Course from "../components/Course"
import EmailField from "../components/EmailField"

const CallOut = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 17.5px;
  text-align: center;
`

const Subtitle = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 17.5px;
  text-align: center;
`

const OnlineCourses = () => (
  <Layout>
    <SEO title="Online Courses" />
    <div className="SectionTitle First">Online Courses</div>
    <CallOut>
      Our{" "}
      <b>
        <i>master</i>
      </b>{" "}
      online courses are coming soon! <br />
      Click the “Notify Me” button to alerted when they’re avaiable as soon as
      it is released.
    </CallOut>
    <Container>
      <Course title="Master the CAS"></Course>
      <Course title="Master Functions & Plotting"></Course>
      <Course title="Master Calculus: Differentiation"></Course>
      <Course title="Master Calculus: Integration"></Course>
      <Course title="Master Proability: Discrete"></Course>
    </Container>
    <Subtitle style={{ marginTop: "3rem" }}>
      Add your email & we’ll notify you as soon as a course releases! (We don’t
      spam{" "}
      <span role="img" aria-label="Heart emoji">
        ❤️
      </span>
      )
    </Subtitle>
    <Container>
      <div id="#notify" href="#notify"></div>
      <EmailField />
    </Container>
  </Layout>
)

export default OnlineCourses
