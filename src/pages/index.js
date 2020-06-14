import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout.js';
import Helmet from 'react-helmet';

export default () => (
  <>
    <Helmet>
      <title>Homepage</title>
    </Helmet>
    <Layout>
      <h1>Welcome to the homepage of this test site</h1>
    </Layout>
  </>
);
