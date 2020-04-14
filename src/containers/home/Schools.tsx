import * as React from 'react';
import { Heading, Flex, Box, Link, Text } from '@primer/components';
import BlogContributorsWrapper from './contributors/style';
import { DirectusSchool } from '../../../generated/types';
import School from './contributors/School';

type SchoolsProps = {
    schools: DirectusSchool[];
};

const Schools: React.FunctionComponent<SchoolsProps> = (
    props: SchoolsProps
) => {
    function renderSchools() {
        return props.schools.map((school: DirectusSchool) => (
            <Flex flex="1 1 20%" justifyContent="center">
                <School
                    name={school?.name!}
                    state={school?.state!}

                />
            </Flex>
        ));
    }

    return (
        <>
            <Box id="schools" />
            <BlogContributorsWrapper>
                <Heading textAlign="center" mb={10}>
                    Contributing Medical Schools
        </Heading>


                <Flex justifyContent="space-between" flexWrap="wrap">
                    {renderSchools()}
                </Flex>
            </BlogContributorsWrapper>

        </>

    );
};

export default Schools;
