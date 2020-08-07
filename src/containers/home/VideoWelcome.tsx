import * as React from 'react';
import { Heading, Flex, Text, Box } from '@primer/components';
import BlogPostsWrapper from './welcome/style';
import { FaYoutube } from 'react-icons/fa';

const { useEffect, useState } = React;
export interface WelcomeProps {}

const VideoWelcome: React.FunctionComponent<WelcomeProps> = () => {
  const scale = 0.5;
  const minWidth = 800;
  const [width, setWidth] = useState(
    calculateWidth(typeof window === 'undefined' ? 0 : window.innerWidth)
  );
  const height = (9 / 16) * width;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function calculateWidth(width: number): number {
    if (width < minWidth) return width;
    return width * scale;
  }

  function handleResize(e: any) {
    const height = e.target.innerHeight;
    const width = e.target.innerWidth;
    setWidth(calculateWidth(width));
    console.log(height, width);
  }

  return (
    <>
      <Box id="welcome" />
      <BlogPostsWrapper>
        <Heading textAlign="center" mb={60}>
          The MSCAN Video Project
        </Heading>
        <Flex justifyContent="center">
          <Text fontSize={5} mb={60} textAlign="center">
            <Box mb={40} />
            MSCAN medical students have designed a YouTube channel to provide
            accurate information and answer common questions related to
            COVID-19.
            <Box mb={40} />
            <iframe
              width={width}
              height={height}
              src="https://www.youtube.com/embed/6uuepZNkwc4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Box mb={40} />
            <Text fontSize={8}>Subscribe to the channel</Text>
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
      </BlogPostsWrapper>
    </>
  );
};

export default VideoWelcome;
