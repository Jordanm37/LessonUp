import React from "react"
import { Link } from "gatsby"
import BlueButton from "../components/BlueButton"
import Layout from "../layouts/default"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Error!" />
    <div className="SectionTitle First">Thank You!</div>
    <div className="SectionText" style={{ textAlign: "center" }}>
      Oops, we don't know what happened there!
      <Link to="/" style={{ textDecoration: "none" }}>
        <BlueButton
          style={{ display: "block", margin: "1rem auto", padding: "1rem" }}
          buttonText="Return Home"
        />
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
