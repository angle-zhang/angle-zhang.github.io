
import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
const renderImage = (file) => {
  console.log(file, "file");
  const {node} = file;
  const {childImageSharp} = node;
  return  <Image fluid={childImageSharp.fluid} />;
}

const ImageTwo = function (props) {
  const {file} = props;
  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={ ({ images }) => ( renderImage(images.edges.find(image => image.node.relativePath === file))) }
  />
}

export default ImageTwo;