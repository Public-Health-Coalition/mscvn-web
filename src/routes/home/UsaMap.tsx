import './usaMap.scss';
import React, { FC } from 'react';
import ReactUsaMap, { Customize, StatesCustomize } from 'react-usa-map';
import withStyled from '../../withStyled';
import {
  useSchools,
  SchoolsData,
  Maybe,
  SchoolsActivitiesInfo
} from '../../generated/apollo';

export interface UsaMapProps {}

const UsaMap: FC<UsaMapProps> = (_props: UsaMapProps) => {
  const schoolsData = useSchools().data;

  console.log('schoolsData', schoolsData);

  function handleClick(e: any) {
    if (!schoolsData) return null;
    const schools = schoolsData.school?.data?.filter(
      (school: Maybe<SchoolsData>) => school?.state === e.target.dataset.name
    );
    alert(
      schools
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
        .join('\n\n')
    );
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
    </>
  );
};

UsaMap.defaultProps = {};

export default withStyled(UsaMap)``;
