import React, { FC } from 'react';
import { Flex, Heading, Grid } from '@primer/components';
import UsaMap from './home/UsaMap';
import Contributors from './home/Contributors';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => (
  <Flex justifyContent="center">
    <Grid>
      <Heading fontSize={6} mt={6} mb={8} textAlign="center">
        Public Health Coalition
      </Heading>
      <UsaMap />
      <Contributors />
    </Grid>
  </Flex>
);

Home.defaultProps = {};

export default Home;
