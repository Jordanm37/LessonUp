import React from "react"
import BlueButton from "./BlueButton"
import { Link } from "gatsby"
import "./CallToAction.css"

const CallToAction = props => (
  <div className="CTA">
    <h3 className="CTAHeading">{props.heading}</h3>
    <p className="CTADescription">{props.description}</p>
    <Link to={props.service}>
      <BlueButton className="CTAButton" buttonText="Learn more" />
    </Link>
  </div>
)

export default CallToAction
