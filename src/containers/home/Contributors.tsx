import * as React from 'react';
import { Heading, Flex, Box, Link, Text } from '@primer/components';
import BlogContributorsWrapper from './contributors/style';
import Contributor from './contributors/Contributor';
import siliconHillsJpg from '../../images/siliconhills.jpg';
import { DirectusContributor } from '../../../generated/types';


type ContributorsProps = {
  contributors: DirectusContributor[];
};




const Contributors: React.FunctionComponent<ContributorsProps> = (
  props: ContributorsProps
) => {
  function renderContributors() {
    return props.contributors.map((contributor: DirectusContributor) => (
      <Flex flex="1 1 20%" justifyContent="center">
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
        <Flex justifyContent="center">
          <Link
            href="https://siliconhills.dev"
            target="_blank"
            style={{
              textDecoration: 'none',
            }}
          >
            <Flex
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              maxWidth={800}
              mb={10}
            >
              <Box margin={5}>
                <img alt="Silicon Hills" src={siliconHillsJpg} />
              </Box>
              <Box margin={5} maxWidth={400}>
                <Heading
                  textAlign="center"
                  fontSize="22px"
                  color="black"
                  mb={2}
                >
                  Empowering Your Business Through Custom Digital Solutions
                </Heading>
                <Text textAlign="center">
                  <Box mb={2}>
                    <Link href="https://siliconhills.dev" target="_blank">
                      <Heading fontSize={4} textAlign="center">
                        https://siliconhills.dev
                      </Heading>
                    </Link>
                  </Box>
                  <Text color="black">
                    Silicon Hills is an Austin based technology company that
                    empowers businesses all over the United States through the
                    development of custom digital products.
                  </Text>
                  <Box mb={2} />
                </Text>

              </Box>
            </Flex>
          </Link>
        </Flex>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {renderContributors()}
        </Flex>
      </BlogContributorsWrapper>

    </>

  );
};

export default Contributors;
