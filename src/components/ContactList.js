import React from "react"
import { Row, Col } from "react-bootstrap"
import "./ContactList.css"

const ContactList = props => (
  <Row className="ContactListGroup">
    <Col xs={2} lg={1}>
      <div className="ContactListSymbol" style={{ margin: "auto 0" }}>
        {props.symbol}
      </div>
    </Col>
    <Col
      xs={10}
      lg={11}
      style={{ margin: "auto 0" }}
      className="ContactListInfo"
    >
      {props.description}
    </Col>
  </Row>
)

export default ContactList
