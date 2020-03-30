import React, { FC } from 'react';
import { Box, Flex, Heading, Text, Link } from '@primer/components';

export interface ContributorProps {
  bio?: string;
  homepage?: string;
  name: string;
  photo?: string;
  title?: string;
}

const Contributor: FC<ContributorProps> = (props: ContributorProps) => {
  function renderPhoto() {
    if (!props.photo) return null;
    return (
      <Link href={props.homepage} target="_blank" mb={2}>
        <Flex justifyContent="center" mb={20}>
          <img
            src={props.photo}
            style={{ borderRadius: '100%', maxWidth: 140, maxHeight: 140 }}
          />
        </Flex>
      </Link>
    );
  }

  return (
    <Box mb={60} ml={3} mr={3}>
      {renderPhoto()}
      <Heading textAlign="center" fontSize={5} mb={2}>
        {props.name}
      </Heading>
      <Heading textAlign="center" fontSize={2} mb={2}>
        {props.title}
      </Heading>
      <Text textAlign="center">
        <Link href={props.homepage} target="_blank" mb={2}>
          <Heading fontSize={1} textAlign="center">
            {props.homepage}
          </Heading>
        </Link>
        <Box mb={2} />
        <Text>{props.bio}</Text>
      </Text>
    </Box>
  );
};

Contributor.defaultProps = {
  bio: '',
  homepage: '',
  photo: '',
  title: '',
};

export default Contributor;
