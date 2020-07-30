import React from "react"
import { Service } from "../modules/Service"
import { Router as MyRouter } from "@reach/router"

export default class StudySupport extends React.Component {
  render() {
    return (
      <MyRouter>
        <Service path="/booking/service/:service" />
      </MyRouter>
    )
  }
}
