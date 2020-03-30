import React, { FC } from 'react';
import styled from 'styled-components';
import { Grid, Flex, Heading, Dialog, Box, Text } from '@primer/components';
import {
  DirectusSchool,
  Maybe,
  DirectusActivityInfo,
} from '../../../generated/types';

export interface StateModalProps {
  isOpen?: boolean;
  onDismiss?: () => any;
  schoolsByState?: DirectusSchool[];
  state?: string;
}

const ModalWrapper = styled.div`
  @media only screen and (max-width: 750px) {
    max-height: calc(100vh - 37px);
    overflow-y: auto;
  }
`;

const StateModal: FC<StateModalProps> = (props: StateModalProps) => {
  function renderActivities(
    activitiesInfo: Maybe<Array<Maybe<DirectusActivityInfo>>>
  ) {
    return activitiesInfo?.map((activityInfo: Maybe<DirectusActivityInfo>) => (
      <Text mb={4} textAlign="left">
        <Text fontStyle="italic" fontWeight="bold" fontSize={4}>
          {activityInfo?.activity?.name}:{' '}
        </Text>
        <div
          dangerouslySetInnerHTML={{ __html: activityInfo?.details || '' }}
        />
      </Text>
    ));
  }

  function renderSchools() {
    let first = true;
    return props.schoolsByState?.map((school: DirectusSchool) => {
      if (!school.activities_info?.length) return null;
      const result = (
        <Flex>
          <Grid>
            {first ? null : <Box mb={10} />}
            <Heading fontSize={6} mb={4} textAlign="center">
              {school?.name}
            </Heading>
            {renderActivities(school.activities_info || [])}
          </Grid>
        </Flex>
      );
      first = false;
      return result;
    });
  }

  return (
    <Dialog
      title={props.state!}
      isOpen={!!props.schoolsByState?.length}
      onDismiss={props.onDismiss!}
    >
      <ModalWrapper>
        <Box p={3}>
          <Text fontFamily="sans-serif">{renderSchools()}</Text>
        </Box>
      </ModalWrapper>
    </Dialog>
  );
};

StateModal.defaultProps = {
  isOpen: false,
  onDismiss: () => {},
  schoolsByState: [],
  state: '',
};

export default StateModal;
