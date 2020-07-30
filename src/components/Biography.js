import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Biography.css"

const Biography = props => (
  <Container>
    <Row className="Biography">
      <Col sm={3} className="ProfileImage">
        <img src={props.image} alt={props.name} />
      </Col>
      <Col sm={9} className="ProfileInfo">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </Col>
    </Row>
  </Container>
)

export default Biography
