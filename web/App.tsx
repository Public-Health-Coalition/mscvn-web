import React from 'react';
import ReactGA from 'react-ga';
import { Reactant } from '@reactant/web';

ReactGA.initialize('UA-161712632-1');
ReactGA.pageview(`${window.location.pathname}${window.location.search}`);

export interface AppProps {}

const App: React.FC<AppProps> = (props) => <Reactant {...props} />;

export default App;
