import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Formik, Form, Field } from "formik"
import { navigate } from "gatsby"
import * as Yup from "yup"
import axios from "axios"
import styled from "styled-components"
import BlueButton from "./BlueButton"
import "./EmailField.css"

const InputBorder = styled.div`
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  margin-bottom: 1rem;

  p {
    font-style: bold;
    font-size: 14px;
    margin: 0;
  }

  input {
    border: none;
    width: 100%;
  }
`

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phone: Yup.string()
    .min(9, "Too Short")
    .max(10, "Too Long"),
})

const BookingForm = props => {
  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          service: props.service,
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values)
          axios({
            method: "POST",
            url: "https://getform.io/f/833497a2-7ac0-484a-9afc-7a357bd5c365",
            data: values,
          })
            .then(response => {
              navigate("/thank-you/")
            })
            .catch(error => {
              console.log("Form Submission Error")
            })
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              <Col sm={12}>
                <InputBorder>
                  <p>
                    NAME <span style={{ color: "red" }}>*</span>
                  </p>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                  ></Field>
                </InputBorder>
              </Col>
              <Col sm={6}>
                <InputBorder>
                  <p>
                    EMAIL ADDRESS <span style={{ color: "red" }}>*</span>
                  </p>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.smith@gmail.com"
                  ></Field>
                </InputBorder>
              </Col>
              <Col sm={6}>
                <InputBorder>
                  <p>
                    PHONE NUMBER <span style={{ color: "red" }}>*</span>
                  </p>
                  <Field
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="0431415926"
                  ></Field>
                </InputBorder>
              </Col>
              <Col sm={12}>
                <BlueButton
                  className="EmailFieldButton"
                  type="submit"
                  buttonText="Start Now"
                />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default BookingForm
