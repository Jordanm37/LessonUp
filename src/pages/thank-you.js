import React from "react"
import { Link } from "gatsby"
import BlueButton from "../components/BlueButton"

import Layout from "../layouts/default"
import SEO from "../components/SEO"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You!" />
    <div className="SectionTitle First">Thank You!</div>
    <div className="SectionText" style={{ textAlign: "center" }}>
      We've received your request & we'll be in contact with you shortly.
      <Link to="/" style={{ textDecoration: "none" }}>
        <BlueButton
          style={{ display: "block", margin: "1rem auto", padding: "1rem" }}
          buttonText="Return Home"
        />
      </Link>
    </div>
  </Layout>
)

export default ThankYou
