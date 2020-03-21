declare module 'react-usa-map' {
  import { Component } from 'react';

  export interface ClickHandlerEvent {}

  export type ClickHandler = (e: ClickHandlerEvent) => any;

  export interface Customize {
    fill?: string;
    clickHandler?: ClickHandler;
  }

  export interface StatesCustomize {
    [key: string]: Customize;
  }

  export interface ReactUsaMapProps {
    onClick: ClickHandler;
    customize: StatesCustomize;
  }

  class ReactUsaMap extends Component<ReactUsaMapPropsProps> {}

  export = ReactUsaMap;
}
