import './usaMap/style.css';
import ColorHash from 'color-hash';
import React, { FC } from 'react';
import ReactUsaMap, { StatesCustomize } from 'react-usa-map';

const colorHash = new ColorHash();

export interface StatesData {
  [key: string]: any;
}

export interface UsaMapProps {
  onClick?: (state: any, e: any) => any;
  states?: StatesData;
}

const UsaMap: FC<UsaMapProps> = (props: UsaMapProps) => {
  function handleClick(e: any) {
    props.onClick!(props.states![e.target.dataset.name], e);
  }

  function getCustomize() {
    return Object.entries(props.states || {}).reduce(
      (customize: StatesCustomize, [stateName, stateData]: [string, any]) => {
        customize[stateName] = {
          fill: colorHash.hex(JSON.stringify(stateData))
        };
        return customize;
      },
      {}
    );
  }

  return (
    <>
      <ReactUsaMap
        width={
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        }
        customize={getCustomize()}
        onClick={handleClick}
      />
    </>
  );
};

UsaMap.defaultProps = {
  onClick: () => {},
  states: {}
};

export default UsaMap;
