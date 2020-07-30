import React from "react"
import { Link } from "gatsby"
import WhiteButton from "./WhiteButton"
import "./ServiceCard.css"

const ServiceCard = props => (
  <div className="Card">
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <Link to={props.link}>
      <WhiteButton className="CardButton" buttonText={props.buttonText} />
    </Link>
  </div>
)

export default ServiceCard
