import * as React from 'react';
import styled from 'styled-components';
import { Heading, Flex, Text, Box } from '@primer/components';
import BlogWelcomeWrapper from './welcome/style';
import socialDistancingSvg from '../../images/social_distancing.svg';

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
          Welcome to the Medical Student COVID-19 Action Network (MSCAN)
        </Heading>
        <Flex justifyContent="center">
          <Text fontSize={5} mb={60}>
            <ImageWrapper>
              <img src={socialDistancingSvg} width="100%" />
            </ImageWrapper>
            This is a time of crisis for our world. As it stands, there have
            been over 1,000,000 cases of COVID-19, and that number is rising
            daily. At a time when healthcare workers and volunteers around the
            globe are risking their health and well-being for the safety of the
            community, we must help. That’s why we've started the Medical
            Student COVID-19 Action Network, a united alliance for medical
            students nationwide to play a role in fighting COVID-19.
            <Box mb={40} />
            Our team will maintain an interactive digital map of the United
            States showing all COVID-19-related service opportunities organized
            by medical schools (especially ones that can be done safely at
            home). Our goal is to set an example for the nation as medical
            students, help displaced students serve from home, alleviate the
            existing burden on the healthcare system, combine resources, support
            medical workers, and promote the exchange of ideas.
            <Box mb={40} />
            We encourage you to engage with the opportunities on this map. Please note
            that activities without contact information may be internal or no longer
            seeking volunteers. Additionally, please exercise caution and view our <a href="https://publichealthcoalition.org/public-disclaimer/" target="_blank">statement on activity safety</a>.
            <Box mb={40} />
            Let’s present a united front as future healthcare professionals and
            support the amazing work already being done to stem the tide of
            COVID-19. Let’s show the world that we’re ready to step up and
            serve.
          </Text>
        </Flex>
      </BlogWelcomeWrapper>
    </>
  );
};

export default Welcome;
