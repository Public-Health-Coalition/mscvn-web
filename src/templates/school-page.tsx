import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import urljoin from 'url-join';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostDetails from '../components/PostDetails/postDetails';
import Sidebar from '../containers/Sidebar';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton
} from 'react-share';
import { IoLogoFacebook, IoLogoTwitter, IoLogoReddit } from 'react-icons/io';
import {
  BlogPostDetailsWrapper,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment,
  BlogDetailsContent
} from './templates.style';
import { SchoolBySlugQuery } from '../../generated/types';

export interface BlogPostTemplateProps {
  data: SchoolBySlugQuery;
}

const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  const school = props.data.directusSchool;
  const title = school?.name || '';
  const slug = school?.id || '';
  const siteUrl = props.data.site?.siteMetadata?.siteUrl;
  const shareUrl = urljoin(siteUrl, slug);

  const disqusConfig = {
    shortname: process.env.DISQUS_NAME,
    config: { identifier: slug, title }
  };
  const description = `${school?.name}'s COVID-19 volunteer activities`;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <BlogPostDetailsWrapper>
        <BlogDetailsContent>
          <PostDetails
            title={title}
            date={school!.created_on}
            preview={null}
            description={description}
          />
          <BlogPostFooter>
            {true ? null : (
              <PostTags className="post_tags">
                {[].map((tag: string, index: number) => (
                  <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                    {`#${tag}`}
                  </Link>
                ))}
              </PostTags>
            )}
            <PostShare>
              <span>Share This:</span>
              <FacebookShareButton url={shareUrl} quote={description}>
                <IoLogoFacebook />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <IoLogoTwitter />
              </TwitterShareButton>
              {/* <PinterestShareButton
                  url={shareUrl}
                  media={urljoin(siteUrl, post.frontmatter.cover.publicURL)}
                  >
                  <IoLogoPinterest />
                  </PinterestShareButton> */}
              <RedditShareButton url={shareUrl} title={title}>
                <IoLogoReddit />
              </RedditShareButton>
            </PostShare>
          </BlogPostFooter>

          <BlogPostComment>
            <DiscussionEmbed {...disqusConfig} />
          </BlogPostComment>
        </BlogDetailsContent>
        <Sidebar />
      </BlogPostDetailsWrapper>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query SchoolBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    directusSchool(id: { eq: $slug }) {
      activities_info {
        activity {
          status
          name
          directusId
          created_on
          id
        }
        contact
        details
        directusId
        status
        created_on
        id
      }
      directusId
      name
      state
      status
      created_on
      id
    }
  }
`;
