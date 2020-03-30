import * as React from 'react';
import { Heading, Flex, Box, Grid } from '@primer/components';
import BlogContributorsWrapper from './contributors/style';
import Contributor from './contributors/Contributor';
import { DirectusContributor } from '../../../generated/types';

type ContributorsProps = {
  contributors: DirectusContributor[];
};

const Contributors: React.FunctionComponent<ContributorsProps> = (
  props: ContributorsProps
) => {
  function renderContributors() {
    return props.contributors.map((contributor: DirectusContributor) => (
      <Flex flex="1 1 20%">
        <Contributor
          bio={contributor?.bio!}
          homepage={contributor?.homepage!}
          name={contributor?.name!}
          photo={contributor?.photo!}
          title={contributor?.title!}
        />
      </Flex>
    ));
  }

  return (
    <>
      <Box id="contributors" />
      <BlogContributorsWrapper>
        <Heading textAlign="center" mb={10}>
          Contributors
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {renderContributors()}
        </Flex>
      </BlogContributorsWrapper>
    </>
  );
};

export default Contributors;
