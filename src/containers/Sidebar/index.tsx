import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import FeaturePost from '../../components/FeaturePost/featurePost';
import PromotionImage from '../../images/ad.png';
import {
  SidebarWrapper,
  SidebarWidger,
  WidgetTitle,
  TagItem,
  InstagramWrapper,
  InstagramPhoto
} from './style';

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
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
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
      allInstaNode(limit: 4) {
        edges {
          node {
            id
            likes
            comments
            localFile {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const Tags = Data.allMarkdownRemark.group;
  const InstagramPhotos = Data.allInstaNode.edges;

  return (
    <SidebarWrapper>
      <SidebarWidger>
        <WidgetTitle>Promotion</WidgetTitle>
        <a
          href="https://1.envato.market/r1jdv"
          aria-label="Get StoryHub"
          target="_blank"
        >
          <img src={PromotionImage} alt="Get StoryHub" />
        </a>
      </SidebarWidger>

      <SidebarWidger>
        <WidgetTitle>Latest Post</WidgetTitle>
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
      </SidebarWidger>

      <SidebarWidger>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidger>

      <SidebarWidger>
        <WidgetTitle>Instagram</WidgetTitle>
        {InstagramPhotos ? (
          <InstagramWrapper>
            {InstagramPhotos.map(({ node }: any) => {
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
                <InstagramPhoto key={node.id}>
                  <a
                    href={`https://www.instagram.com/p/${node.id}`}
                    target="_blank"
                  >
                    <Img
                      fluid={node.localFile.childImageSharp.fluid}
                      alt="Instagram Photo"
                      backgroundColor={setColor}
                    />
                  </a>
                </InstagramPhoto>
              );
            })}
          </InstagramWrapper>
        ) : (
          ''
        )}
      </SidebarWidger>
    </SidebarWrapper>
  );
};

export default Sidebar;
