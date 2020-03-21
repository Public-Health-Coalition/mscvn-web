import React, { FC } from 'react';
import UsaMap from './home/UsaMap';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => (
  <>
    <UsaMap />
  </>
);

Home.defaultProps = {};

export default Home;
