import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div
      
    >
      <h1 className={styles.text} style={{ margin: 0 }}>
        <Link
          to="/"
          
        >
          PLACE FOR LOGO
        </Link>
      </h1>
      <div className={styles.links}>
      <h3 className={styles.text}> 
        <Link
          to="/"
          
        >
          about
        </Link>
      </h3>           
      <h3 className={styles.text}> <Link
          to="/"
          
        >
          Contact
        </Link>
      </h3>      
      <h3 className={styles.text}>
        <Link
          to="/"
         
        >
          work
        </Link>
      </h3>  
      
      </div>
          
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
