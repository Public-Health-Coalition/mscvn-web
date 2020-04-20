import * as React from 'react';
import { Heading, Flex, Box, Link, Text } from '@primer/components';
import BlogContributorsWrapper from './contributors/style';
import { DirectusPartner } from '../../../generated/types';
import Partner from './contributors/Partner';

type PartnersProps = {
    Partners: DirectusPartner[];
};

const Partners: React.FunctionComponent<PartnersProps> = (
    props: PartnersProps
) => {
    function renderPartners() {
        return props.Partners.map((partner: DirectusPartner) => (
            <Flex flex="1 1 20%" justifyContent="center">
                <Partner
                    name={partner?.name!}


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
