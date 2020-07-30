import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import BlueButton from "./BlueButton"
import "./EmailField.css"

const InputBorder = styled.div`
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  height: 100%;

  p {
    font-style: bold;
    font-size: 14px;
    margin: 0;
  }

  input {
    border: none;
    width: 100%;
  }

  /* TODO: – REMOVE OUTLINE */
`
export default class EmailField extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <Container>
        <form onSubmit={this._handleSubmit}>
          <Row>
            <Col sm={8}>
              <InputBorder>
                <p>EMAIL ADDRESS</p>
                <input
                  type="email"
                  id="email"
                  onChange={this._handleChange}
                  name="email"
                  placeholder="john.smith@gmail.com"
                ></input>
              </InputBorder>
            </Col>
            <Col sm={4}>
              <BlueButton
                className="EmailFieldButton"
                type="Submit"
                buttonText="Submit"
              />
            </Col>
          </Row>
        </form>
      </Container>
    )
  }
}
