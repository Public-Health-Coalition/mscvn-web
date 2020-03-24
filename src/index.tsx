import React, { FC } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Routes from './routes';
import theme from './theme';
import withApollo from './withApollo';

export interface AppProps {}

const App: FC<AppProps> = (_props: AppProps) => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

App.defaultProps = {};

export default withApollo(App);
