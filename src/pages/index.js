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
            
              <div className={styles.title}> Full Iron</div>
              <div className={styles.subTitle}>design</div>
              <div className={styles.subTitleAbout}>web. dev. studio</div>
              <div className={styles.subTitleSkills}>React - Node - Graphql - Headless CMS - Identity - UX UI</div>

              <div className="person" id="1"></div>
              <div className="person" id="2"></div>

              {/* <Link to="/page-2/">Go to page 2</Link> */}
            
        </div>

      </Layout>
    );
  }
}


export default (IndexPage)



