import React from 'react';
import PropTypes from 'prop-types';

import '../assets/scss/style.scss';
import Layout from '../components/layout';
import { UserProvider } from '../lib/user';

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.elementType,
};

export default App;
