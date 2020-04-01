import React, { FC, useState } from 'react';
/* import SelectUsStates from 'react-select-us-states'; */
import { /* Box, */ Flex, Grid, Heading } from '@primer/components';
import StateModal from './StateModal';
import UsaMap from '../../components/UsaMap';
import { BannerWrapper } from './activitiesMap/style';
import { DirectusSchool } from '../../../generated/types';

export interface ActivityMapProps {
  schools: DirectusSchool[];
}

export interface StateData {
  schools: DirectusSchool[];
}

export interface StatesData {
  [key: string]: StateData;
}

const ActivityMap: FC<ActivityMapProps> = (props: ActivityMapProps) => {
  const [schoolsByState, setSchoolsByState] = useState<DirectusSchool[] | null>(
    null
  );
  const [state, setState] = useState<string | null>(null);

  const states: StatesData = props.schools.reduce(
    (states: StatesData, school: DirectusSchool) => {
      if (!school.state || !school.activities_info?.length) return states;
      const stateData: StateData = {
        schools: [...(states[school.state] || { schools: [] }).schools, school],
      };
      states[school.state] = stateData;
      return states;
    },
    {}
  );

  function handleClick(stateData?: StateData, e?: any) {
    if (!stateData) return null;
    setSchoolsByState(stateData.schools);
    setState(e.target.dataset.name || null);
  }

  /* function handleSelectUsStatesChange(stateName: string) {
   *   if (!stateName.length || !states[stateName]) return null;
   *   setSchoolsByState(states[stateName].schools);
   *   setState(stateName);
   * } */

  return (
    <BannerWrapper>
      <Flex justifyContent="center">
        <Grid>
          <Heading fontSize={8} textAlign="center" mb={2} p={2}>
            Medical Student COVID-19 Volunteer Network (MSCVN)
          </Heading>
          <Heading fontSize={6} textAlign="center" p={2}>
            Choose Your State
          </Heading>
          <UsaMap states={states} onClick={handleClick} />
          {/* <Flex justifyContent="center">
              <Box maxWidth={160} pt={5}>
              <SelectUsStates onChange={handleSelectUsStatesChange} />
              </Box>
              </Flex> */}
        </Grid>
      </Flex>
      <StateModal
        isOpen={!!schoolsByState?.length && !!state}
        onDismiss={() => setSchoolsByState(null)}
        schoolsByState={schoolsByState || []}
        state={state || ''}
      />
    </BannerWrapper>
  );
};

export default ActivityMap;
