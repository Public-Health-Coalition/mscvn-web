import React, { FC, useState } from 'react';
import { Flex, Heading, Text } from '@primer/components';
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

  function handleSelectUsStatesChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const stateName = e.target.value;
    if (!stateName.length || !states[stateName]) return null;
    setSchoolsByState(states[stateName].schools);
    setState(stateName);
  }

  function renderStateDropdownItems() {
    return Object.keys(states).map((state: string) => <option>{state}</option>);
  }

  function renderStateDropdown() {
    return (
      <select
        style={{ width: '120px', fontSize: '18px', textAlign: 'center' }}
        onChange={handleSelectUsStatesChange}
      >
        <option>--</option>
        {renderStateDropdownItems()}
      </select>
    );
  }

  return (
    <BannerWrapper>
      <Flex justifyContent="center" flexDirection="column">
        <Heading fontSize={8} textAlign="center" mb={2} p={2}>
          Medical Student COVID-19 Action Network (MSCAN)
        </Heading>
        <Heading fontSize={6} textAlign="center" p={1}>
          Choose Your State
        </Heading>
        <Text fontSize={1} textAlign="center" pb={6}>
          additional US territories can be found the dropdown
        </Text>
        <Flex justifyContent="center">{renderStateDropdown()}</Flex>
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
