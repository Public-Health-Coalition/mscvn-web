import * as React from 'react';
import { graphql } from 'gatsby';
import PostCardModern from '../components/PostCardModern/postCardModern';
import Pagination from '../components/Pagination/pagination';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BlogPostsWrapper, PostRow, PostGrid } from './templates.style';

const BlogList = (props: any) => {
  const { data } = props;
  const Posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/page/1' : `/page/${(currentPage - 1).toString()}`;
  const nextPage = `/page/${(currentPage + 1).toString()}`;
  const PrevLink = !isFirst && prevPage;
  const NextLink = !isLast && nextPage;

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />

      <BlogPostsWrapper>
        <PostRow>
          {Posts.map(({ node }: any) => {
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
              '#c7ecee',
            ];
            const setColor =
              placeholderColors[
                Math.floor(Math.random() * placeholderColors.length)
              ];
            return (
              <PostGrid>
                <PostCardModern
                  key={node.fields.slug}
                  title={node.frontmatter.title || node.fields.slug}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  url={node.fields.slug}
                  description={node.frontmatter.description || node.excerpt}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                  placeholderBG={setColor}
                />
              </PostGrid>
            );
          })}
        </PostRow>
        <Pagination
          prevLink={PrevLink}
          nextLink={NextLink}
          currentPage={`${currentPage}`}
          totalPage={`${numPages}`}
        />
      </BlogPostsWrapper>
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            description
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1170, quality: 90) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
