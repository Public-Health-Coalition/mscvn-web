import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ActivitiesMap from './home/ActivitiesMap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeQuery } from '../../generated/types';

type SchoolEdge = HomeQuery['allDirectusSchool']['edges'][0];

export interface HomeProps {
  data: HomeQuery;
}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const { data } = props;
  const schools = data.allDirectusSchool.edges.map(
    (schoolEdge: SchoolEdge) => schoolEdge.node
  );
  return (
    <Layout>
      <SEO
        title="Personal Blog"
        description={data.site?.siteMetadata?.description || ''}
      />
      <ActivitiesMap schools={schools} />
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
            details
            status
            id
            created_on
          }
          status
          id
          created_on
        }
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
