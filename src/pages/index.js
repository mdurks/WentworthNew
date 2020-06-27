import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout.js';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

export default () => {
  const ImageBackground = styled(BackgroundImage)`
    background-size: cover;
    background-position: center center;
    height: 500px;
  `;

  const { image, myimage, perthThree } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "perth-one.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1400, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      myimage: file(relativePath: { eq: "perth-two.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1400, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      perthThree: file(relativePath: { eq: "perth-three.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1400, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Layout>
        <ImageBackground Tag="section" fluid={image.sharp.fluid}>
          <h1>Welcome to the homepage of this test site</h1>
        </ImageBackground>
        <ImageBackground Tag="section" fluid={myimage.sharp.fluid}>
          <h1>Welcome to the homepage of this test site</h1>
        </ImageBackground>
        <Image fluid={perthThree.sharp.fluid} />
        <br />
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          aut. Quidem debitis aspernatur quam, commodi labore reiciendis minima
          facilis aut libero sequi minus, sapiente dicta, incidunt non quos
          obcaecati ea.
        </p>
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
};
