import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import Layout from "../layouts/index"
import SEO from "../components/SEO"
import ServiceCard from "../components/ServiceCard"
import BlueButton from "../components/BlueButton"

const MissionText = styled.p`
  line-height: 38px;
  margin-left: 60px;
  font-size: 30px;

  @media (max-width: 1086px) {
    font-size: 24px;
  }

  @media (max-width: 991px) {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 575px) {
    text-align: center;
    margin: 0rem 2rem 0 2rem;
  }
`

const MissionDiv = styled.div`
  @media (max-width: 575px) {
    text-align: center;
  }
`

const SectionTitle = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin-top: 98px;
  text-align: center;
  margin-top: 2rem;
`

const Quote = styled.p`
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
  text-align: center;
  margin-top: -10px;
  margin-bottom: -20px;

  @media (max-width: 1200px) {
    margin-bottom: -5px;
  }

  @media (max-width: 430px) {
    background: #3040c4;
    color: #ffffff;
    padding: 10px;
    margin-bottom: 0;
  }

  @media (max-width: 991px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 575px) {
    margin-bottom: 2rem;
  }
`

const Highlight = styled.p`
  display: inline;
  background: #3040c4;
  padding: 10px;
  color: #ffffff;

  @media (max-width: 430px) {
    padding-left: 0;
  }
`

const Circle = styled.img`
  position: relative;
  left: 15%;
  width: 85%;
  margin-top: -30px;

  @media (max-width: 991px) {
    width: 95%;
    left: 5%;
  }

  @media (max-width: 767px) {
    width: 100%;
    left: 0;
  }

  @media (min-width: 575px) and (max-width: 610px) {
    width: 120%;
    left: 0;
  }

  @media (max-width: 575px) {
    display: none;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="SectionTitle">Academic Services</div>
    <Container>
      <Row style={{ marginTop: "3rem" }}>
        <Col sm={12} md={6}>
          <ServiceCard
            image={require("../images/lessonup-stairs.png")}
            title="Study Support"
            text="A tailor-made study program that yields academic excellence through measurable daily improvements."
            link="study-support"
            buttonText="Learn More"
          />
        </Col>
        <Col sm={12} md={6}>
          <ServiceCard
            className="cardSpacing"
            image={require("../images/lessonup-reading.png")}
            title="Tutoring"
            text="Our carefully selected team of high achievers tutor over 200 students privately across Victoria."
            link="tutoring"
            buttonText="Get Tutoring"
          />
        </Col>
      </Row>
    </Container>
    <SectionTitle>Our Mission</SectionTitle>
    <Quote>
      "Give you control <Highlight>your marks."</Highlight>
    </Quote>
    <div style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={12} sm={7} style={{ margin: "auto 0" }}>
          <MissionDiv>
            <MissionText>
              The team at LessonUp treats every student uniquely. We{" "}
              <b>
                <i>strongly </i>
              </b>
              disagree with a one size fits all approach when it comes to
              education. The first session will be an assessment so we
              understand your strengths and weakness. Using the results from our
              assessment we tailor a specific plan for you.
            </MissionText>
            <Link to="./about-us">
              <BlueButton
                className="IndexMission"
                buttonText="Learn More"
                style={{ marginLeft: "60px", padding: "1rem" }}
              />
            </Link>
          </MissionDiv>
        </Col>
        <Col sm={5} style={{ paddingRight: 0 }}>
          <Circle src={require("../images/lessonup-reading-v2.png")} />
        </Col>
      </Row>
    </div>
    <div className="SectionTitle">Online Courses</div>
    <Container>
      <Container>
        <Row className="CourseActionGroup">
          <Col md={6} style={{ margin: "auto 0" }}>
            <img
              src={require("../images/lessonup-error.png")}
              style={{ width: "100%" }}
              alt="Master CAS Online Course"
            />
          </Col>
          <Col md={6} style={{ margin: "auto 0" }} className="CourseActionInfo">
            <h3>Master the CAS</h3>
            <p>
              Save time, become a CAS expert. Learn how to efficiently &
              effectively use your graphing calculator.
            </p>
            <Link to="./online-courses">
              <BlueButton
                className="CourseActionButton"
                buttonText="Learn More"
                style={{ width: "100%", margin: 0 }}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
)

export default IndexPage
