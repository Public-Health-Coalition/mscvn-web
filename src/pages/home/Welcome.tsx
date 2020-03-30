import * as React from 'react';
import { Heading, Flex, Text, Box, Grid } from '@primer/components';
import BlogWelcomeWrapper from './welcome/style';
import socialDistancingSvg from '../../images/social_distancing.svg';

type WelcomeProps = {};

const Welcome: React.FunctionComponent<WelcomeProps> = () => {
  return (
    <>
      <Box id="welcome" />
      <BlogWelcomeWrapper>
        <Heading textAlign="center" mb={60}>
          Welcome to the Medical Student COVID-19 Volunteer Network (MSCVN)
        </Heading>
        <Flex justifyContent="center">
          <Grid>
            <Text fontSize={5} mb={60}>
              <Box
                style={{
                  float: 'left'
                }}
                minWidth={400}
                maxWidth="30vw"
                pb={40}
                pr={60}
              >
                <img src={socialDistancingSvg} width="100%" />
              </Box>
              This is a time of crisis for our world. As it stands, there have
              been over 690,000 cases of COVID-19, and that number is rising
              daily. At a time when healthcare workers and volunteers around the
              globe are risking their health and well-being for the safety of
              the community, we must help. That’s why we've started the Medical
              Student COVID-19 Volunteer Network, a united alliance for medical
              students nationwide to play a role in fighting COVID-19.
              <Box mb={40} />
              Our team will maintain an interactive digital map of the United
              States showing all COVID-19-related service opportunities
              organized by medical schools (especially ones that can be done
              safely at home). Our goal is to set an example for the nation as
              medical students, help displaced students serve from home,
              alleviate the existing burden on the healthcare system, combine
              resources, support medical workers, and promote the exchange of
              ideas.
              <Box mb={40} />
              Let’s present a united front as future healthcare professionals
              and support the amazing work already being done to stem the tide
              of COVID-19. Let’s show the world that we’re ready to step up and
              serve.
            </Text>
          </Grid>
        </Flex>
      </BlogWelcomeWrapper>
    </>
  );
};

export default Welcome;
