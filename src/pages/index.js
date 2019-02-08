import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layouts/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
// import { AST_ClassExpression } from "terser";
import { withStyles } from '@material-ui/core/styles';
import Logo from "../components/logo";
import styles from "./styles/index.module.css"
import classNames from "classnames"

import About from "../images/About.svg"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



console.log("styles :", {styles})



class IndexPage extends Component {
  state = {
    aboutText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad fugit deleniti saepe!",
    transformAbout: '',
  };

  handleTransformAbout = () => { this.setState({ transformAbout:'scale(2 1.5)' }) }

  render() {
    const { aboutText, transformAbout } = this.state
    console.log("index.js props", styles)
    
    return (
      <Layout>
        <SEO title="Home" keywords={[`fulliron`, `webdesign`, `ukraine`, `kiev`,]} />
     
        <div className={styles.pageContainer}>
            
            
            
              <div className={styles.title}> Full Iron</div>
              <div className={styles.subTitle}>design</div>
              <div className={styles.subTitleAbout}>web. dev. studio</div>
              <div className={styles.subTitleSkills}>React - Node - Graphql - Headless CMS - Identity - UX UI</div>
              
              <div className={styles.persons}>
                <div className={classNames([styles.person, styles.person1])}>Illya Fefelov</div>
                <div className={classNames([styles.person, styles.person2])}>Dmytryi Vlasenko</div>

              </div>

              
                <About transform={transformAbout} className={classNames([styles.about, styles.aboutSVG])} />
                <div className={classNames([styles.aboutText, styles.about])}>some text</div>
              
              

              
              
              <div href="#" className = {classNames([styles.LinkCard, styles.stacked])}>
                    <div className={styles.content}>
                     <code className={styles.linkText}>
                      Link Animated
                      </code>
                    </div>
              </div>


              <div className={styles.image}>
                <Link className={styles.imageLink}
                  to="/page-2/">Go to page 2</Link> 
                <Logo />
              </div>
            
        </div>

      </Layout>
    );
  }
}


export default (IndexPage)



