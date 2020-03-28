import React, { FC } from 'react';
import { Grid, Flex, Heading, Dialog, Box, Text } from '@primer/components';
import {
  DirectusSchool,
  Maybe,
  DirectusActivityInfo
} from '../../../generated/types';

export interface StateModalProps {
  isOpen?: boolean;
  onDismiss?: () => any;
  schoolsByState?: DirectusSchool[];
  state?: string;
}

const StateModal: FC<StateModalProps> = (props: StateModalProps) => {
  function renderActivities(
    activitiesInfo: Maybe<Array<Maybe<DirectusActivityInfo>>>
  ) {
    return activitiesInfo?.map((activityInfo: Maybe<DirectusActivityInfo>) => (
      <Text mb={4}>
        <Text fontStyle="italic">{activityInfo?.activity?.name}: </Text>
        {activityInfo?.details}
      </Text>
    ));
  }

  function renderSchools() {
    return props.schoolsByState?.map((school: DirectusSchool) => (
      <Flex>
        <Grid>
          <Heading fontSize={2} mb={4} textAlign="center">
            {school?.name}
          </Heading>
          {renderActivities(school.activities_info || [])}
          <Box mb={5} />
        </Grid>
      </Flex>
    ));
  }

  return (
    <Dialog
      title={props.state!}
      isOpen={!!props.schoolsByState?.length}
      onDismiss={props.onDismiss!}
    >
      <Box p={3}>
        <Text fontFamily="sans-serif">{renderSchools()}</Text>
      </Box>
    </Dialog>
  );
};

StateModal.defaultProps = {
  isOpen: false,
  onDismiss: () => {},
  schoolsByState: [],
  state: ''
};

export default StateModal;
