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
          Our Team
        </Heading>
        <Flex justifyContent="center">
          <Link
            href="https://siliconhills.dev"
            target="_blank"
            style={{
              textDecoration: 'none'
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
          <p>
            Aaron Gilani, Abhinaya Ganesh, Abigail Brenner, Abigail Godec, Adaah Sayyed, Adam Munday, Adam Munday, Adedeji Adeniyi, Adiba Matin, Adrienne Pyle, Ailynna Chen, Alex Clos, Alex Reibstein, Alex Woodbridge, Alexandra Myers, Alfonso Gomez, Alieu Kanu, Allison Martin, Allyson Pietrok, Alyse Mary Elaine Ragauskas, Alyssa Chen, Alyssa Kessel, Amy Blair, Andrew Chapman, Andy Mai, Angelina Omodt-Lopez, Anna Graeff, Annie Moylan, Annie Yang, Anushka Sindkar, Aparna Ajjarapu, Archana Babu, Arielle Schecter, Arjun Bakshi, Arvind Haran, Ashley Brent, Ashley Cohen, Ashley Ooms, Ashlie Bloom, Baillie Bronner, Brad Flemming, Brandon Barrett, Breanna Tracey, Brendan Daly, Brett Lewis, Brian Elmore, Brittany Cooke, Bruin Pollard, Bryce Ringwald, Calvin Schaffer, Cara Dooley, Cassandra McDiarmid, Catie Havemann, Chaim Miller, Christina Dorismond, Christina Huang, Christopher Chermside-Scabbo, Christopher Wachuku, Claire Ferguson, Clare Batty, Clare Idehen, Cosette Kathawa, Courtney Smith, Cyrus Ghaznavi, David Ashley, David Elson, Dr. Amy Levi, Dr. Carol Terregino, Dr. Cindy Christian, Dr. Daniel Mehan, Dr. David Asprey, Dr. Elizabeth C. Lawrence, Dr. Erik Constance, Dr. Felisha C. Rohan-Minjares, Dr. Gabe Sudario, Dr. Janice Cato Varlack, Dr. Jon Morris, Dr. Jonathan Espenschied, Dr. Justina Hyfantis, Dr. Lawrence Burgess, Dr. Lee Wei Wei, Dr. Leila Harrison, Dr. Martha McGrew, Dr. Mary Couig, Dr. Sandy Sanguino, Dr. Sonia Laumbach, Dr. Wolfgang Gilliar, Elaf Alsalamy, Ellie Volpicelli, Eloho Akpovi, Emily Crawford, Emily Lopez Santa, Emily Northey, Emily Root, Emily Trudeau, Emma Dunne, Eric Chow, Eric Daubach, Eric Nelson, Erin Adams, Estefanía Montañez, Frances Gill, Francesca Yi, Gabe Garena, Gabriel Noble Cruz, Gabriela Cintron, Gabriella Miller, George Ye, Grace Lee, Grace Pratt, Grace Wholley, Halea Messe, Haley Esztovitz, Hannah Daneshvar, Hannah Meyer, Hannah Rees, Hannah Tandon, Hermon Abera, Ikeanyi Chinonyelum, Jack Doenges, Jake Fox, Jericho Hallare, Jess D'Annibale, Jessica Kelly, Jessie Bangs, Jonah Moss, Jordan Haarsma, Jordan Lemme, Katie McClung, Kavita Jain, Keely Reidelberger, Kevin Singh, Kime McClintock, Kime McClintock, Kylie Miller, Laura Billstein, Lauran Evans, Lauren Burgoon, Lauren Gard, Lawren Wooten, Lawren Wooten, Leah Colucci, Lexy Kindt, Libby Wetterer, Libby Wetterer, Lillian Boettcher, Lindsay Edwards, Lucia Garcia, Luke Wachsmuth, Lyba Zia, Maddie Ford, Maddie Lorentzen, Maggie Gonzalez, Maggie Urschler, Mahtab Danai, Maria Khan, Mariana Olivencia, Martha Duah, Matt Diorio, Matthew Christensen, Matthew Hey, Matthew Lovell, Matthew Tan, Matty Chavez, Maureen Ikpeama, Megan Chiu, Meghan Lane, Michael Broderick, Michael Martins, Michael Supanich , Mitchell Le, Moena Nishikawa, Moena Nishikawa, Morgan Kennedy, Mychael Delgardo, Nashali Ferrara, Natasha Mehta, Nathan Zaroban, Naz Sarpoulaki, Nicolas Rubel, Nicole Sheikholeslami, Nidhi Goel, Nidhi Sheth, Nikki Shah, Nivedha Sukumar, Noelle Lemons, Parisun Shoga, Peter Alsharif, Peter Lorenz, Pooja Patel, Priyanka Dharampuriya, Purven Parikh, Rachel Anderson, Rachel Chudoba, Rachel Davis, Rachel Rose, Rachel To, Rajat Mohanka, Rebekah Roll, RemyGrace Sass, Renee Cooper, Rose Paneno, Ryan Atkins, Ryan Jespersen, Samantha Evans, Samantha O’Connor, Samantha White, Sanjay Chandrasekhar, Sara Lederman, Sara Majewski, Scott Fabricant, Scott Gaignard, Sean Grieg, Sean Hormozian, Sean Teebagy, Sean Thompson, SG Keller, Shaina Hasan, Simone Seward, Sneha Swaminathan, Sophia Rotman, Sruthi Shankar, Steeve Pierre-Louis, Stephanie Gutierrez, Sunny Massa, Susan Brands, Susan Caulfield, T. Alinea Esensoy, Tara Pilato, Tary Finefield, Taylor Kratochvil, Tazim Merchant, Teju Peesay, Thao Le, Tiffany Carpenetti, TingAnn Hsiao, Tori Shepard, Troy Amen, Tyler Zeoli, Vartan Pahalyants, Victor Anderson, Victoria Mackriss, Vijay Putatunda, Vinita Akula, Wesley Ng, Wesley Ng, Yazmín Irazoqui-Ruiz, Zachary West, Zahra Abbas, Zoe Ljubic
          </p>
        </Flex>
      </BlogContributorsWrapper>
    </>
  );
};

export default Contributors;
