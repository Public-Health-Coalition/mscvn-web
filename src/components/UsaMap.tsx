import './usaMap/style.css';
import ColorHash from 'color-hash';
import React, { FC, useEffect, useState, useLayoutEffect } from 'react';
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
  const [height, setHeight] = useState<number | null>(getHeight());
  const [width, setWidth] = useState<number | null>(getWidth);

  function handleClick(e: any) {
    props.onClick!(props.states![e.target.dataset.name], e);
  }

  function getCustomize() {
    return Object.entries(props.states || {}).reduce(
      (customize: StatesCustomize, [stateName, stateData]: [string, any]) => {
        customize[stateName] = {
          fill: colorHash.hex(JSON.stringify(stateData)),
        };
        return customize;
      },
      {}
    );
  }

  useLayoutEffect(() => {
    setWidth(getWidth());
    setHeight(getHeight);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
      setHeight(getHeight);
    }
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', handleResize);
    return () => {
      if (typeof window === 'undefined') return;
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);

  function getWidth(): number {
    if (typeof window === 'undefined') return 0;
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return Math.min(width, 1500);
  }

  function getHeight(): number {
    if (typeof window === 'undefined') return 0;
    const width = getWidth();
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return height < width ? width * 0.4 : width * 0.5;
  }

  return (
    <>
      <ReactUsaMap
        customize={getCustomize()}
        height={height}
        onClick={handleClick}
        width={width}
      />
    </>
  );
};

UsaMap.defaultProps = {
  onClick: () => {},
  states: {},
};

export default UsaMap;
