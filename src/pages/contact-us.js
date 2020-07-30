import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../layouts/default"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"

export default class ContactUs extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Us" />
        <div className="SectionTitle First">Contact Us</div>
        <Container>
          <ContactList symbol="" description="0407 145 612" />
          <ContactList symbol="" description="hello@lessonup.com.au" />
          <ContactList
            symbol=""
            description="All of Metropolitan Melbourne!"
          />
        </Container>
        <Container>
          <Row>
            <Col sm={12}>
              <div className="ContactFormTitle">Or send us a message!</div>
            </Col>
          </Row>
        </Container>
        <ContactForm />
      </Layout>
    )
  }
}
