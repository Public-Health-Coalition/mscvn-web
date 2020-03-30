import React, { FC } from 'react';
import { Flex, Box } from '@primer/components';
import Layout from '../components/layout';
import PrivacyPolicyMdx from './privacyPolicy.mdx';
import SEO from '../components/seo';

export interface PrivacyPolicyProps {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = (_props: PrivacyPolicyProps) => {
  return (
    <Layout>
      <SEO title="PrivacyPolicy" description="privacy policy" />
      <Flex alignItems="center" flexDirection="column">
        <Box padding={10} maxWidth={1200}>
          <PrivacyPolicyMdx />
        </Box>
      </Flex>
    </Layout>
  );
};

export default PrivacyPolicy;
