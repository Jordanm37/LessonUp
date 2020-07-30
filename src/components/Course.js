import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import WhiteButton from "./WhiteButton"
import { navigate } from "@reach/router"
import "./Course.css"

const Course = props => {
  function handleClick() {
    navigate("/online-courses#notify")
  }

  return (
    <Container>
      <Row className="Course">
        <Col className="CourseTitle" sm={6}>
          {props.title}
        </Col>
        <Col sm={6}>
          <WhiteButton
            onClick={handleClick}
            className="CourseButton"
            buttonText="Notify Me"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Course
