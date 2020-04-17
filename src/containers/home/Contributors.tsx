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
        <Heading textAlign="center" mb={10}>
          Additional Contributors
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <p>Aaron Gilani, Abhinaya Ganesh, Abigail Brenner, Abigail Godec, Adaah Sayyed, Adam Munday, Adedeji Adeniyi, Adiba Matin,
            Alex Clos, Alex Woodbridge, Alfonso Gomez, Alieu Kanu, Allison Martin, Alyse Mary Elaine Ragauskas, Alyssa Chen, Alyssa Kessel,
            Andrew Chapman, Angelina Omodt-Lopez, Annie Yang, Anushka Sindkar, Archana Babu, Arielle Schecter, Arvind Haran,
            Ashley Brent, Ashley Cohen, Ashley Ooms, Baillie Bronner, Brandon Barrett, Breanna Tracey, Brett Lewis, Brian Elmore,
            Brittany Cooke, Bruin Pollard, Bryce Ringwald, Calvin Schaffer, Cara Dooley, Catie Havemann, Christina Dorismond,
            Christina Huang, Christopher Chermside-Scabbo, Christopher Wachuku, Clare Batty, Clare Idehen, Cosette Kathawa,
            Courtney Smith, Cyrus Ghaznavi, David Elson, Director of Center for Civic Engagement, Dr. Amy Levi, Dr. Carol Terregino,
            Dr. Cindy Christian, Dr. Daniel Mehan, Dr. David Asprey, Dr. Elizabeth C. Lawrence, Dr. Erik Constance,
            Dr. Felisha C. Rohan-Minjares, Dr. Janice Cato Varlack, Dr. Jon Morris, Dr. Jonathan Espenschied, Dr. Lawrence Burgess,
            Dr. Lee Wei Wei, Dr. Leila Harrison, Dr. Martha McGrew, Dr. Mary Couig, Dr. Nathalie Feldman, Dr. Sandy Sanguino,
            Dr. Sonia Laumbach, Elaf Alsalamy, Eloho Akpovi, Emily Crawford, Emily Lopez Santa, Emily Northey, Emily Root, Eric Chow,
            Erin Adams, Estefanía Montañez, Frances Gill, Francesca Yi, Gabe Garena, Gabriel Noble Cruz, Gabriella Miller, Grace Wholley,
            Halea Messe, Hannah Daneshvar, Hannah Meyer, Hannah Tandon, Ikeanyi Chinonyelum, Jack Doenges, Jake Fox, Jericho Hallare,
            Jessica Kelly, Jessie Bangs, Jonah Moss, Katie McClung, Kavita Jain, Keely Reidelberger, Kime McClintock, Kylie Miller,
            Laura Billstein, Lauran Evans, Lauren Burgoon, Lauren Gard, Lawren Wooten, Leah Colucci, Lexy Kindt, Libby Wetterer,
            Lillian Boettcher, Lindsay Edwards, Lud Eyasu, Luke Wachsmuth, Lyba Zia, Maddie Ford, Madeline Fritz, Maggie Gonzalez,
            Maggie Urschler, Mahtab Danai, Maria Khan, Mariana Olivencia, Martha Duah, Matthew Christensen, Matthew Hey, Matthew Lovell,
            Matthew Tan, Matty Chavez, Maureen Ikpeama, Megan Chiu, Meghan Lane, Micaila Baroffio, Michael Broderick, Michael Lawler,
            Michael Martins, Mitchell Le, Moena Nishikawa, Mychael Delgardo, Nashali Ferrara, Natasha Mehta, Nicolas Rubel,
            Nicole Sheikholeslami, Niv Badrinarayanan, Nivedha Sukumar, Noelle Lemons, Peter Alsharif, Peter Lorenz, Purven Parikh,
            Rachel Anderson, Rachel Chudoba, Rachel Davis, Rachel Rose, Rachel To, Rebekah Roll, RemyGrace Sass, Rose Paneno, Ryan Atkins,
            Samantha Evans, Samantha White, Sanjay Chandrasekhar, Sara Lederman, Sara Majewski, Scott Fabricant, Scott Gaignard, Sean Grieg,
            Sean Hormozian, Sean Teebagy, Sean Thompson, SG Keller, Shaina Hasan, Simone Seward, Sneha Swaminathan, Sruthi Shankar,
            Steeve Pierre-Louis, Stephanie Gutierrez, Susan Brands, Susan Caulfield, T. Alinea Esensoy, Tara Pilato, Tary Finefield,
            Taylor Kratochvil, Tazim Merchant, Teju Peesay, Thao Le, Troy Amen, Tyler Zeoli, Vartan Pahalyants, Victor Anderson,
            Victoria Mackriss, Vijay Putatunda, Wesley Ng, Yazmín Irazoqui-Ruiz, Zachary West, Zahra Abbas</p>

        </Flex>
      </BlogContributorsWrapper>

    </>

  );
};

export default Contributors;
