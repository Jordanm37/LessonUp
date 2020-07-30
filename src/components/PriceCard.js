import React from "react"
import { Link } from "gatsby"
import WhiteButton from "./WhiteButton.js"
import "./PriceCard.css"

const PriceCard = props => {
  const service = props.service
  const url_dir = service.split(" ").join("%20")
  const url = `/booking/service/${url_dir}`

  return (
    <div className="PriceCard">
      <h3 className="PriceCardPrice">{props.price}</h3>
      <p className="PriceCardTime">{props.timeframe}</p>
      <p className="PriceCardService">{props.service}</p>
      <p className="PriceCardDescription">{props.description}</p>
      <Link to={url} state={{ service: props.service }}>
        <WhiteButton className="PriceCardButton" buttonText="Start Now" />
      </Link>
    </div>
  )
}

export default PriceCard
