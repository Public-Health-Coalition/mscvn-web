import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FeaturePost from '../../../components/FeaturePost/featurePost';
import { BannerWrapper, BannerInner, FeaturePosts, Title } from './style';

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
        filter: { frontmatter: { tags: { eq: "featured" } } }
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 90, maxHeight: 90, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const Posts = Data.allMarkdownRemark.edges;

  return (
    <BannerWrapper>
      <BannerInner>
        <FeaturePosts>
          <Title>Featured Posts</Title>
          {Posts.map(({ node }: any) => {
            const title = node.frontmatter.title || node.fields.slug;
            //Random Placeholder Color
            const placeholderColors = [
              '#55efc4',
              '#81ecec',
              '#74b9ff',
              '#a29bfe',
              '#ffeaa7',
              '#fab1a0',
              '#e17055',
              '#0984e3',
              '#badc58',
              '#c7ecee'
            ];
            const setColor =
              placeholderColors[
                Math.floor(Math.random() * placeholderColors.length)
              ];

            return (
              <FeaturePost
                key={node.fields.slug}
                title={title}
                image={
                  node.frontmatter.cover == null
                    ? null
                    : node.frontmatter.cover.childImageSharp.fluid
                }
                url={node.fields.slug}
                tags={node.frontmatter.tags}
                placeholderBG={setColor}
              />
            );
          })}
        </FeaturePosts>
      </BannerInner>
    </BannerWrapper>
  );
};

export default Banner;
