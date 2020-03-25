import './usaMap.css';
import React, { FC } from 'react';
import { Grid, Flex, Heading, Dialog, Box, Text } from '@primer/components';
import {
  SchoolsData,
  Maybe,
  SchoolsActivitiesInfo,
} from '../../generated/apollo';

export interface StateModalProps {
  isOpen?: boolean;
  onDismiss?: () => any;
  schoolsByState?: Maybe<SchoolsData>[];
  state?: string;
}

const StateModal: FC<StateModalProps> = (props: StateModalProps) => {
  function renderActivities(
    activitiesInfo: Maybe<Maybe<SchoolsActivitiesInfo>[]>
  ) {
    return activitiesInfo?.map((activityInfo: Maybe<SchoolsActivitiesInfo>) => (
      <Text mb={4}>
        <Text fontStyle="italic">{activityInfo?.activity?.name}: </Text>
        {activityInfo?.details}
      </Text>
    ));
  }

  function renderSchools() {
    return props.schoolsByState?.map((school: Maybe<SchoolsData>) => (
      <Flex>
        <Grid>
          <Heading fontSize={2} mb={4} textAlign="center">
            {school?.name}
          </Heading>
          {renderActivities(school?.activities_info || [])}
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
  state: '',
};

export default StateModal;
