import React, { FC } from 'react';
import { Flex, Heading, Grid } from '@primer/components';
import UsaMap from './home/UsaMap';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => (
  <Flex justifyContent="center">
    <Grid>
      <Heading fontSize={6} mb={4} textAlign="center">
        Public Health Coalition
      </Heading>
      <UsaMap />
    </Grid>
  </Flex>
);

Home.defaultProps = {};

export default Home;
