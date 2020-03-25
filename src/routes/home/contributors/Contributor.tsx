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
      <Flex justifyContent="center" mb={20}>
        <img
          src={props.photo}
          style={{ borderRadius: '100%', maxWidth: 140 }}
        />
      </Flex>
    );
  }

  return (
    <Box mb={60} ml={3} mr={3}>
      {renderPhoto()}
      <Heading textAlign="center" fontSize={3} mb={2}>
        {props.name}
      </Heading>
      <Heading textAlign="center" fontSize={2} mb={2}>
        {props.title}
      </Heading>
      <Text textAlign="center">
        <Text>{props.bio}</Text>
        <Box mb={2} />
        <Link href={props.homepage} target="_blank" mb={2}>
          <Heading fontSize={1} textAlign="center">
            {props.homepage}
          </Heading>
        </Link>
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
