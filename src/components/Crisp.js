import React from "react"

class Crisp extends React.Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "d47c0d8e-d5f8-43b3-bc05-2dc81db4abfc"
    ;(function() {
      var d = document
      var s = d.createElement("script")

      s.src = "https://client.crisp.chat/l.js"
      s.async = 1
      d.getElementsByTagName("head")[0].appendChild(s)
    })()
  }

  render() {
    return null
  }
}

export default Crisp
