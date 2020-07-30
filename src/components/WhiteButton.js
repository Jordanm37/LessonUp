import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: #ffffff;
  border: 3px solid #3040c4;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: bold;
  color: #3040c4;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: #3040c4;
    border: 3px solid #3040c4;
    color: #ffffff;
  }
`

const WhiteButton = props => {
  return (
    <Button
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      {props.buttonText}
    </Button>
  )
}

export default WhiteButton
