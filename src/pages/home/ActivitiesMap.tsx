import React, { FC, useState } from 'react';
import { Flex } from '@primer/components';
import UsaMap from '../../components/UsaMap';
import { BannerWrapper, BannerInner } from './activitiesMap/style';
import { DirectusSchool } from '../../../generated/types';
import StateModal from './StateModal';

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
      if (!school.state) return states;
      const stateData: StateData = {
        schools: [...(states[school.state] || { schools: [] }).schools, school]
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

  return (
    <BannerWrapper>
      <BannerInner></BannerInner>
      <Flex justifyContent="center">
        <UsaMap states={states} onClick={handleClick} />
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
