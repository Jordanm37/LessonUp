import React from "react"
import { Row, Col } from "react-bootstrap"
import "./NumberList.css"

const NumberList = props => (
  <Row className="NumberGroup">
    <Col sm={2}>
      <div className="Number">{props.number}</div>
    </Col>
    <Col sm={10} className="NumberDescription">
      {props.description}
    </Col>
  </Row>
)

export default NumberList
