import './usaMap.css';
import React, { FC, useState } from 'react';
import ReactUsaMap, { Customize, StatesCustomize } from 'react-usa-map';
import { Dialog, Box, Text } from '@primer/components';
import {
  useSchools,
  SchoolsData,
  Maybe,
  SchoolsActivitiesInfo
} from '../../generated/apollo';

export interface UsaMapProps {}

const UsaMap: FC<UsaMapProps> = (_props: UsaMapProps) => {
  const schoolsData = useSchools().data;
  const [schoolsByState, setSchoolsByState] = useState<
    Maybe<SchoolsData>[] | null
  >(null);

  function handleClick(e: any) {
    if (!schoolsData) return null;
    const schools =
      schoolsData.school?.data?.filter(
        (school: Maybe<SchoolsData>) => school?.state === e.target.dataset.name
      ) || [];
    setSchoolsByState(schools);
  }

  function getCustomize(): StatesCustomize {
    if (!schoolsData) return {};
    return (schoolsData?.school?.data || []).reduce(
      (customize: StatesCustomize, school: Maybe<SchoolsData>) => {
        customize[school?.state || ''] = {
          fill: 'red'
        } as Customize;
        return customize;
      },
      {}
    );
  }

  return (
    <>
      <ReactUsaMap customize={getCustomize()} onClick={handleClick} />
      <Dialog
        title="Title"
        isOpen={!!schoolsByState}
        onDismiss={() => setSchoolsByState(null)}
      >
        <Box p={3}>
          <Text fontFamily="sans-serif">
            {schoolsByState
              ?.map(
                (school: Maybe<SchoolsData>) => `
name: ${school?.name}
state: ${school?.state}
activities: ${JSON.stringify(
                  school?.activities_info
                    ?.map(
                      (activity_info: Maybe<SchoolsActivitiesInfo>) =>
                        `${activity_info?.activity?.name}: ${activity_info?.details}`
                    )
                    .join(' ')
                )}`
              )
              .join('\n\n') || ''}
          </Text>
        </Box>
      </Dialog>
    </>
  );
};

UsaMap.defaultProps = {};

export default UsaMap;
