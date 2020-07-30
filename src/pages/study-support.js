import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../layouts/default"
import SEO from "../components/SEO"
import PriceCard from "../components/PriceCard"
import CallToAction from "../components/CallToAction"

const Circle = styled.img`
  position: relative;
  left: 20%;
  width: 110%;

  @media (max-width: 991px) {
    width: 120%;
    left: 5%;
  }

  @media (max-width: 767px) {
    width: 150%;
    left: 0;
  }

  @media (min-width: 575px) and (max-width: 610px) {
    width: 150%;
    left: 0;
  }

  @media (max-width: 575px) {
    display: none;
  }
`

const StudySupport = () => (
  <Layout>
    <SEO title="Study Support" />
    <div className="SSGroup" style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={12} sm={8} style={{ margin: "auto 0" }}>
          <div className="MissionGroup">
            <div className="MissionSubtitle">Introducing...</div>
            <div className="MissionHeader">The Renaissance Method</div>
            <div className="MissionText">
              LessonUp's main study support program is the Reinassance Method
              (RM). RM is a extremely personalised study support program that
              yields academic excellence through measurable daily improvements.
              RM provides students with a free intial assessment which will be
              used to personalise study support program. Since the study program
              is unique to the student, it is maximised for efficiency.
            </div>
          </div>
        </Col>
        <Col sm={4} style={{ paddingRight: 0, margin: "auto 0" }}>
          <Circle src={require("../images/renaissance-circle.png")} />
        </Col>
      </Row>
    </div>
    <hr style={{ border: "1px solid #3040c4" }} />
    <Container className="SSInfo">
      <div className="SectionTitle">What does this achieve?</div>
      <Row style={{ marginTop: "2rem" }}>
        <Col className="SSInfoItem" md={3}>
          <h3>AIM</h3>
        </Col>
        <Col md={9}>
          <p className="SectionText">
            Encourage students to develop systems of evaluation, learn how to
            enquire, and build a repertoire of strategies and skills to select
            the most suitable approach for the learning task at hand, be it
            conjecture, analysis, evaluation, justification, or other form of
            communication.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col className="SSInfoItem" md={3}>
          <h3>SKILLS</h3>
        </Col>
        <Col md={9}>
          <p className="SectionText">
            Encourage students to develop systems of evaluation, learn how to
            enquire, and build a repertoire of strategies and skills to select
            the most suitable approach for the learning task at hand, be it
            conjecture, analysis, evaluation, justification, or other form of
            communication.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col className="SSInfoItem" md={3}>
          <h3>REFLECTION</h3>
        </Col>
        <Col md={9}>
          <p className="SectionText">
            Encourage students to develop systems of evaluation, learn how to
            enquire, and build a repertoire of strategies and skills to select
            the most suitable approach for the learning task at hand, be it
            conjecture, analysis, evaluation, justification, or other form of
            communication.
          </p>
        </Col>
      </Row>
    </Container>
    <Container>
      <div className="PricingGroup">
        <div className="OfferGroup">
          <Row>
            <Col md={5} className="OfferHeading">
              What does RM provide?
            </Col>
            <Col md={7}>
              <ul>
                <li>
                  One on one video study planning session for the week or in
                  preparation for intense assessment periods.
                </li>
                <hr />
                <li>
                  <b>Study AI</b>: Algorithmic study plan for workload
                  management.
                </li>
                <hr />
                <li>How to meet deadlines.</li>
                <hr />
                <li>
                  Custom study, revision plans, and time management plans.
                </li>
                <hr />
                <li>
                  Study coaching to increase efficiency in class and progress
                  ahead of the class.
                </li>
                <hr />
                <li>
                  Develop cognitive skills: Conjecture, analysis, evaluation,
                  justification, and communication.
                </li>
                <hr />
                <li>Available in person or online.</li>
              </ul>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={6} style={{ margin: "auto 0" }}>
            <PriceCard
              price="$70"
              timeframe="per session"
              service="Renaissance Method"
              description={
                <div>
                  <b>1 Hour</b> of Study Support
                  <p>&nbsp;</p>
                </div>
              }
            />
          </Col>
          <Col md={6} style={{ margin: "auto 0" }}>
            <PriceCard
              price="$85"
              timeframe="per session"
              service="Tutoring + RM"
              description={
                <div>
                  <b>1 Hour</b> of Tutoring
                  <br />
                  <b>30 Minutes</b> of Study Support
                </div>
              }
            />
          </Col>
          <Col md={6} style={{ margin: "auto 0" }}>
            <PriceCard
              price="$120"
              timeframe="per two hours"
              service="Tutoring + RM Gold"
              description={
                <div>
                  <b>1 & 1/2 Hours</b> of Tutoring
                  <br />
                  <b>30 Minutes</b> of Study Support
                </div>
              }
            />
          </Col>
          <Col md={6} style={{ margin: "auto 0" }}>
            <CallToAction
              heading="Need just tutoring?"
              description="LessonUP also provides tutoring services from high-school to university level subjects, for Mathematics & Physics."
              service="/tutoring/"
            />
          </Col>
        </Row>
      </div>
    </Container>
  </Layout>
)

export default StudySupport
