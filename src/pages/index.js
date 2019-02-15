import React,  { useState } from 'react';
import { Link } from "gatsby";

import Layout from "../components/layouts/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
// import { AST_ClassExpression } from "terser";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";
import Logo from "../components/logo";
import styles from "./styles/index.module.css";
import classNames from "classnames";

import About from "../images/About.svg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import MyCard from "../components/Card/MyCard.js"

console.log("styles :", { styles });

function IndexPage() {
  // state = {
  //   aboutText:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad fugit deleniti saepe!",
  //   transformAbout: ""
  // };

    const [aboutText, setAboutText]= useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad fugit deleniti saepe!");
  const [transformAbout, setTransformAbout] = useState("");

//  function handleTransformAbout(){
//     setTransformAbout("scale(2 1.5)");
//   };

  
    
    console.log("index.js props", styles);

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`fulliron`, `webdesign`, `ukraine`, `kiev`]}
        />

        <div className={styles.pageContainer}>
          <div className={styles.title}> Full Iron</div>
          <div className={styles.subTitle}>design</div>
          <div className={styles.subTitleAbout}>web. dev. studio</div>
          <div className={styles.subTitleSkills}>
            React - Node - Graphql - Headless CMS - Identity - UX UI
          </div>

          <div className={styles.persons}>
            <div className={classNames([styles.person, styles.person1])}>
              Illya Fefelov
            </div>
            <div className={classNames([styles.person, styles.person2])}>
              more info
            </div>

          </div>

          {/* <About
            transform={transformAbout}
            className={classNames([styles.about, styles.aboutSVG])}
          /> */}
          {/* <div className={classNames([styles.aboutText, styles.about])}> */}
          <div className={`${styles.aboutText} ${styles.about}`}>
            some text
            <Fab
              size="medium"
              color="secondary"
              aria-label="Add"
              className={styles.aboutButtonMore}
            >
              <AddIcon />
            </Fab>
            <div className={styles.aboutBottomContainer}>
              <div className={styles.aboutBottom}>dff</div>
            </div>
            
          </div>

          <div
            href="#"
            className={classNames([styles.LinkCard, styles.stacked])}
          >
            <div className={styles.content}>
              <code className={styles.linkText}>Link Animated</code>
            </div>
          </div>

          <div className={styles.image}>
            <Link className={styles.imageLink} to="/page-2/">
              Go to page 2
            </Link>
            <Logo />
          </div>
          <div className={classNames([styles.subTitle, styles.postsTitle])}>
            Posts.
          </div>
        
          <div className={styles.cardSection}>
            
            <MyCard />
            <MyCard />
            <MyCard >tateat </MyCard>
          </div>

        </div>
      </Layout>
    );
  
}

export default IndexPage;
