import React, { Component, FC } from 'react';
/* import gql from 'graphql-tag'; */
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
/* import schema from './schema'; */
/* import resolvers, { data } from './resolvers'; */
import { ApolloProvider } from 'react-apollo-hooks';

/* const typeDefs = gql(schema); */

const config = {
  token: '',
  host: 'data.publichealthcoalition.org'
};

const client = new ApolloClient({
  /* resolvers, */
  /* typeDefs, */
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: `https://${config.host}/_/gql?access_token=${config.token}`
      /* credentials: 'same-origin' */
    })
  ]),
  cache: new InMemoryCache()
});
/* client.writeData({ data }); */

export interface UnknownProps {
  [key: string]: any;
}

export default function withApollo<Props = any>(
  App: FC<Props> | typeof Component
): FC<Props> | typeof Component {
  return (props: any) => (
    <ApolloProvider client={client}>
      <App {...props} />
    </ApolloProvider>
  );
}
