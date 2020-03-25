import React, { FC } from 'react';
import { Flash, Heading, Grid, Flex } from '@primer/components';
import Contributor from './contributors/Contributor';
import {
  ContributorsData,
  useContributors,
  Maybe,
} from '../../generated/apollo';

export interface ContributorsProps {}

const Contributors: FC<ContributorsProps> = (_props: ContributorsProps) => {
  const contributorsData = useContributors().data;

  function renderContributors() {
    if (!contributorsData?.contributor?.data?.length) {
      return (
        <Flash m={0} pl={3} pr={3} scheme="red">
          Loading contributors . . .
        </Flash>
      );
    }
    return (
      contributorsData?.contributor?.data || []
    ).map((contributor: Maybe<ContributorsData>) => (
      <Contributor
        bio={contributor?.bio!}
        homepage={contributor?.homepage!}
        name={contributor?.name!}
        photo={contributor?.photo!}
        title={contributor?.title!}
      />
    ));
  }

  return (
    <Flex justifyContent="center">
      <Grid>
        <Heading fontSize={5} mt={4} mb={6} textAlign="center">
          Contributors
        </Heading>

        <Flex justifyContent="center" flexWrap="wrap" mb={8}>
          <Grid maxWidth={400}>{renderContributors()}</Grid>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Contributors;
