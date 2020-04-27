import * as React from 'react';
import { Heading, Flex, Box } from '@primer/components';
import BlogContributorsWrapper from './contributors/style';
import { DirectusPartner } from '../../../generated/types';
import Partner from './contributors/Partner';

type PartnersProps = {
  partners: DirectusPartner[];
};

const Partners: React.FunctionComponent<PartnersProps> = (
  props: PartnersProps
) => {
  function renderPartners() {
    return props.partners.map((partner: DirectusPartner) => (
      <Flex flex="1 1 20%" justifyContent="center">
        <Partner
          description={partner?.description!}
          homepage={partner?.homepage!}
          name={partner?.name!}
          photo={partner?.photo!}
        />
      </Flex>
    ));
  }

  return (
    <>
      <Box id="Partners" />
      <BlogContributorsWrapper>
        <Heading textAlign="center" mb={10}>
          Our Partners
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {renderPartners()}
        </Flex>
      </BlogContributorsWrapper>
    </>
  );
};

export default Partners;
