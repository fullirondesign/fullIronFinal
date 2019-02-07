import React, { Component } from "react";
// import { Link } from "gatsby";

import Layout from "../components/layouts/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
// import { AST_ClassExpression } from "terser";
import { withStyles } from '@material-ui/core/styles';
import Logo from "../components/logo";
import styles from "./styles/index.module.css"


console.log("styles :", {styles})



class IndexPage extends Component {
  state = {};

  render() {
    // const { styles } = styles;
    console.log("index.js props", styles)
    
    return (
      <Layout>
        <SEO title="Home" keywords={[`fulliron`, `webdesign`, `ukraine`, `kiev`,]} />
     
        <div className={styles.pageContainer}>
            
            <div className={styles.image}>
              <Logo />
            </div>
            
              <h1 className={styles.title}> Full Iron</h1>
              <h2 className={styles.subTitle}>design</h2>
              <h3 className={styles.subTitleAbout}>web. dev. studio</h3>
              <h4 className={styles.subTitleSkills}>React - Node - Graphql - Headless CMS - Identity - UX UI</h4>

              <div className="person" id="1"></div>
              <div className="person" id="2"></div>

              {/* <Link to="/page-2/">Go to page 2</Link> */}
            
        </div>

      </Layout>
    );
  }
}


export default (IndexPage)



