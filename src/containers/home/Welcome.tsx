import * as React from 'react';
import styled from 'styled-components';
import { Heading, Flex, Text, Box } from '@primer/components';
import BlogWelcomeWrapper from './welcome/style';
import socialDistancingSvg from '../../images/social_distancing.svg';
import { FaYoutube } from 'react-icons/fa';
export const ImageWrapper = styled.div`
  float: left;
  max-width: 30vw;
  min-width: 400px;
  padding-bottom: 40px;
  padding-right: 60px;
  @media only screen and (max-width: 500px) {
    min-width: 300px;
  }
`;

export interface WelcomeProps { }

const Welcome: React.FunctionComponent<WelcomeProps> = () => {
  return (
    <>
      <Box id="welcome" />
      <BlogWelcomeWrapper>
        <Heading textAlign="center" mb={60}>
          The MSCAN Video Project
        </Heading>
        <Flex justifyContent="center">
          <Text fontSize={5} mb={60} textAlign="center">


            <Box mb={40} />
            MSCAN medical students have designed a YouTube channel to provide accurate information and answer common questions related to COVID-19.
            <Box mb={40} />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6uuepZNkwc4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Box mb={40} />

            <Text fontSize={8}>
              Subscribe to the channel
              </Text>
            <Box mb={40} />
            <Text fontSize={10}>

              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCZcBF-uqP37PKMNN42BrA6A"
              >
                <FaYoutube />
              </a>
            </Text>
          </Text>
        </Flex>
      </BlogWelcomeWrapper>
    </>
  );
};

export default Welcome;
