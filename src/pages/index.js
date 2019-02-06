import React, { Component } from "react";
// import { Link } from "gatsby";

import Layout from "../components/layouts/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
// import { AST_ClassExpression } from "terser";
import { withStyles } from '@material-ui/core/styles';
import Logo from "../components/logo";



const styles = {
  pageContainer: {
    display: "grid",
    gridColumnGap: 50,
    gridRowGap: 50,
    gridTemplateColumns: '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% ',
    gridTemplateRows: '80px 60px 100px 60px 100px 100px 100px 100px 100px 100px 100px',
    gridGap: 16,
    alignItems: 'center',
    backgroundColor: '#FFFAF1',
    height: "100vh",
    width: "100%"
    // margin: '9.7%, 9.7%, 0, 9.7%',
  },
  title: {
    gridRowStart: 1,
    gridColumnStart: 2,
    gridRowEnd: 2,
    gridColumnEnd: 5,

    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',

    // backgroundColor: "grey",

    fontSize: 49,

    margin: 0,
    padding: 0,

  },
  subTitle: {
    gridRowStart: 2,
    gridColumnStart: 2,
    gridRowEnd: 3,
    gridColumnEnd: 5,
    height: '50%',
    textAlign: 'center',
    fontSize: 42,
  },
  subTitleAbout: {
    gridRowStart: 3,
    gridColumnStart: 2,
    gridRowEnd: 4,
    gridColumnEnd: 5,

    textAlign: 'center',
    fontSize: 25,
  },
  subTitleSkills: {
    gridRowStart: 4,
    gridColumnStart: 2,
    gridRowEnd: 5,
    gridColumnEnd: 5,

    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    gridArea: "4 / 7 / 8 / 9",
  },
  person: {
    //  minHeight: '50px',
    //  minWidth: '50px',
     width: '351.5px',
      height: '130.2px',
      background: '#fffaf1',
      border: '1px solid #95989a',

    "&#1": {
      gridArea: "2 / 4 / 3 / 5",
    }
  }
}


class IndexPage extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    
    return (
      <Layout>
        <SEO title="Home" keywords={[`fulliron`, `webdesign`, `ukraine`, `kiev`,]} />
     
        <div className={classes.pageContainer}>
            
            <div className={classes.image}>
              <Logo />
            </div>
            
              <h1 className={classes.title}> Full Iron</h1>
              <h2 className={classes.subTitle}>design</h2>
              <h3 className={classes.subTitleAbout}>web. dev. studio</h3>
              <h4 className={classes.subTitleSkills}>React - Node - Graphql - Headless CMS - Identity - UX UI</h4>

              <div className="person" id="1"></div>
              <div className="person" id="2"></div>

              {/* <Link to="/page-2/">Go to page 2</Link> */}
            
        </div>

      </Layout>
    );
  }
}


export default withStyles(styles)(IndexPage)


