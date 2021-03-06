import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ActivitiesMap from '../containers/home/ActivitiesMap';
import Contributors from '../containers/home/Contributors';
import GetInvolved from '../containers/home/GetInvolved';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Welcome from '../containers/home/VideoWelcome';
import thumbnail from '../../content/assets/thumbnail.jpg';
import {
  HomeQuery,
  DirectusSchool,
  DirectusContributor,
  DirectusPartner
} from '../../generated/types';
import Partners from '../containers/home/Partners';
import VideoWelcome from '../containers/home/VideoWelcome';

type SchoolEdge = HomeQuery['allDirectusSchool']['edges'][0];

export interface HomeProps {
  data: HomeQuery;
}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const { data } = props;

  const schools = data.allDirectusSchool.edges.map(
    (schoolEdge: SchoolEdge) => schoolEdge.node
  ) as DirectusSchool[];

  const partners = data.allDirectusPartner.nodes as DirectusPartner[];

  const contributors = data.allDirectusContributor
    .nodes as DirectusContributor[];
  return (
    <Layout>
      <SEO
        title="MSCAN"
        description={data.site?.siteMetadata?.description || ''}
        facebookThumbnail={thumbnail}
        twitterThumbnail={thumbnail}
      />
      <ActivitiesMap schools={schools} />
      <VideoWelcome />
      <GetInvolved />
      <Partners partners={partners} />
      <Contributors contributors={contributors} />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query Home {
    allDirectusSchool {
      edges {
        node {
          name
          state
          activities_info {
            contact
            created_on
            details
            id
            status
            activity {
              name
              id
              created_on
            }
          }
          status
          id
          created_on
        }
      }
    }
    allDirectusContributor {
      nodes {
        bio
        created_on
        id
        homepage
        name
        photo
        title
        status
      }
    }
    allDirectusPartner {
      nodes {
        description
        homepage
        name
        photo
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
