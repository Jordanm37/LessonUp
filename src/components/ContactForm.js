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
  message: Yup.string().required("Required"),
})

export default class ContactForm extends React.Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            subject: "General Question",
            message: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values)
            axios({
              method: "POST",
              url: "https://getform.io/f/b8ab3b57-a441-4ca6-9127-8757780cfa91",
              data: values,
            })
              .then(response => {
                navigate("/thank-you/")
              })
              .catch(error => {
                console.log("Form Submission Error")
              })
            console.log(values)
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
                    <p>PHONE NUMBER</p>
                    <Field
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="0431415926"
                    ></Field>
                  </InputBorder>
                </Col>
                <Col sm={12}>
                  <InputBorder>
                    <p>SUBJECT</p>
                    <Field
                      as="select"
                      component="select"
                      placeholder="Select enquiry topic"
                      id="subject"
                      name="subject"
                      style={{
                        width: "100%",
                        border: "none",
                        background: "#ffffff",
                      }}
                    >
                      <option value="General Question">General Question</option>
                      <option value="Study Support">Study Support</option>
                      <option value="Tutoring">Tutoring</option>
                      <option value="Online Courses">Online Courses</option>
                    </Field>
                  </InputBorder>
                </Col>
                <Col sm={12}>
                  <InputBorder>
                    <p>
                      MESSAGE <span style={{ color: "red" }}>*</span>
                    </p>
                    <Field
                      name="message"
                      id="message"
                      placeholder="I want to know more about ..."
                      style={{ width: "100%", border: "none" }}
                      as="textarea"
                    ></Field>
                  </InputBorder>
                </Col>
                <Col sm={12}>
                  <BlueButton
                    className="EmailFieldButton"
                    type="submit"
                    buttonText="Submit"
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    )
  }
}
