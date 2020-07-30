import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../layouts/default"
import SEO from "../components/SEO"
import NumberList from "../components/NumberList"
import PriceCard from "../components/PriceCard"
import CallToAction from "../components/CallToAction"

const Circle = styled.img`
  position: relative;
  left: 15%;
  width: 85%;

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

const SectionTitle = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin-top: 98px;
  text-align: center;
  margin-top: -2.5rem;

  @media (max-width: 1600px) {
    margin-top: 3rem;
  }
`

const Tutoring = () => (
  <Layout>
    <SEO title="Tutoring" />
    <div className="TutoringGroup" style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={12} sm={7} style={{ margin: "auto 0" }}>
          <div className="MissionGroup">
            <div className="MissionHeader">
              The <br />
              <span>Mathematics & Physics</span> <br />
              Specialists
            </div>
            <div className="MissionText">
              <p>
                Our team has an extensive tutoring experience in mathematics and
                physics, helping students at all levels of proficiencies take
                charge of their learning strategies and improve their grades.
              </p>
              <p>
                With years of experience, we’ve developed a dynamic and adpative
                approach to teaching and guiding students towards more
                independent and insightful learning.{" "}
              </p>
              <p>
                We can tutor from <b>highschool to university</b> level subjects
                & topics.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={5} style={{ paddingRight: 0, margin: "auto 0" }}>
          <Circle src={require("../images/lessonup-tutoring.png")} />
        </Col>
      </Row>
    </div>
    <SectionTitle>What makes us different?</SectionTitle>
    <Container>
      <NumberList
        number="1"
        description={
          <div>
            LessonUP tutoring programs incorporate <i>research-based</i>{" "}
            elements.
          </div>
        }
      />
      <NumberList
        number="2"
        description={
          <div>
            Each student's progress is <i>monitored and assessed</i> regularly.
          </div>
        }
      />
      <NumberList
        number="3"
        description={
          <div>
            <i>Individualisation</i> of lessons by conducting ongoing
            assessment.
          </div>
        }
      />
      <NumberList
        number="4"
        description={
          <div>
            Sessions are <i>structured</i> with clear, specific, and measurable
            objectives.
          </div>
        }
      />
      <NumberList
        number="5"
        description={
          <div>
            <i>Instructional supports</i> are provided initially, then gradually
            removed as students gain.
          </div>
        }
      />
      <div className="TutoringCitations">
        Sources & citations for our methods: <br /> Boekaerts, M., & Corno, L.
        (2005). Self‐regulation in the classroom: A perspective on assessment
        and intervention. Applied Psychology, 54(2), 199-231. Pintrich, P. R.
        (2004). A conceptual framework for assessing motivation and
        self-regulated learning in college students. Educational Psychology
        Review, 16(4), 385-407. Zimmerman, B. J., & Schunk, D. H. (1989).
        Self-regulated learning and academic achievement: Springer Science &
        Business Media. Zimmerman, B. J. (2002). Becoming a self-regulated
        learner: An overview. Theory into practice, 41(2), 64-70.
      </div>
    </Container>
    <Container>
      <div className="PricingGroup">
        <div className="OfferGroup">
          <Row>
            <Col md={5} className="OfferHeading">
              What do we offer?
            </Col>
            <Col md={7}>
              <ul>
                <li>Maths Tutoring: Yr10 / VCE / University</li>
                <hr />
                <li>Physics Tutoring: VCE / University</li>
                <hr />
                <li>
                  Pre-VCE Science for Enquiring Minds <br />
                  (Physical science introduction to better prepare for VCE Chem
                  and Physics)
                </li>
                <hr />
                <li>24/7 Question Availability</li>
                <hr />
                <li>Available in person or online.</li>
              </ul>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={6} style={{ margin: "auto 0" }}>
            <PriceCard price="$70" timeframe="per hour" service="Tutoring" />
          </Col>
          <Col md={6} style={{ margin: "auto 0" }}>
            <CallToAction
              heading={
                <div>
                  Need <u>more</u> than just tutoring?
                </div>
              }
              description="LessonUP also provides study support programs alongside tutoring to develop a skillset on how to studyeffeciently & effectively."
              service="/study-support/"
            />
          </Col>
        </Row>
      </div>
    </Container>
  </Layout>
)

export default Tutoring
