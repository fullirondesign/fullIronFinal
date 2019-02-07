import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styles from "./layoutFullIron.module.css"


console.log("styles from layoutFullIron.module.css", styles)

const Layout = ({ children }, props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
     
      <div className={styles.font}>
        <Header className={styles.header} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            // maxWidth: 1440,
            padding: 0,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
