import React, { FC } from 'react';
import { Flex, Box } from '@primer/components';
import Layout from '../components/layout';
import PublicDisclaimerMdx from './publicDisclaimer.mdx';
import SEO from '../components/seo';

export interface PublicDisclaimerProps {}

const PublicDisclaimer: FC<PublicDisclaimerProps> = (
  _props: PublicDisclaimerProps
) => {
  return (
    <Layout>
      <SEO title="PublicDisclaimer" description="privacy policy" />
      <Flex alignItems="center" flexDirection="column">
        <Box padding={10} maxWidth={1200}>
          <PublicDisclaimerMdx />
        </Box>
      </Flex>
    </Layout>
  );
};

export default PublicDisclaimer;
