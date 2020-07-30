import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../fonts/fonts.css"
import "./default.css"
import Crisp from "../components/Crisp"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query IndexTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Crisp />
      <Banner siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
