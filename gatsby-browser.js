/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
// import withRoot from './withRoot';


// import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
// import getPageContext from './src/getPageContext';

import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const jss = create(jssPreset());
const generateClassName = createGenerateClassName();

// const WithRoot = withRoot(props => props.children);

export const wrapRootElement = ({ element }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    
    <ApolloProvider client={client}> <CssBaseline ></CssBaseline> {element}
    
    </ApolloProvider>
  </JssProvider>
);


