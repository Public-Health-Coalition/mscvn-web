import './usaMap.css';
import ColorHash from 'color-hash';
import React, { FC, useState } from 'react';
import ReactUsaMap, { Customize, StatesCustomize } from 'react-usa-map';
import { Flex, Grid, Flash } from '@primer/components';
import StateModal from './StateModel';
import { useSchools, SchoolsData, Maybe } from '../../generated/apollo';

const colorHash = new ColorHash();

export interface UsaMapProps {}

const UsaMap: FC<UsaMapProps> = (_props: UsaMapProps) => {
  const schoolsData = useSchools().data;
  const [schoolsByState, setSchoolsByState] = useState<
    Maybe<SchoolsData>[] | null
  >(null);
  const [state, setState] = useState('');

  function handleClick(e: any) {
    if (!schoolsData) return null;
    const schools =
      schoolsData.school?.data?.filter(
        (school: Maybe<SchoolsData>) => school?.state === e.target.dataset.name
      ) || null;
    setSchoolsByState(schools);
    setState(e.target.dataset.name);
  }

  function getCustomize(): StatesCustomize {
    if (!schoolsData) return {};
    return (schoolsData?.school?.data || []).reduce(
      (customize: StatesCustomize, school: Maybe<SchoolsData>) => {
        customize[school?.state || ''] = {
          fill: colorHash.hex(JSON.stringify(school))
        } as Customize;
        return customize;
      },
      {}
    );
  }

  return (
    <>
      <Flex justifyContent="center">
        <Grid width={150}>
          <Flash
            m={0}
            scheme={schoolsData?.school?.data?.length ? 'green' : 'red'}
          >
            {schoolsData?.school?.data?.length
              ? 'Choose your state'
              : 'Loading data . . .'}
          </Flash>
        </Grid>
      </Flex>
      <ReactUsaMap customize={getCustomize()} onClick={handleClick} />
      <StateModal
        isOpen={!!schoolsByState?.length}
        onDismiss={() => setSchoolsByState(null)}
        schoolsByState={schoolsByState || []}
        state={state || ''}
      />
    </>
  );
};

UsaMap.defaultProps = {};

export default UsaMap;
