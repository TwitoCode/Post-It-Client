import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';

const devURI = 'http://localhost:5000';
// const prodURI = 'https://twito-post-it-server.herokuapp.com/';

const client = new ApolloClient({
	link: new HttpLink({ uri: devURI }),
	cache: new InMemoryCache(),
});

export const Apollo: FC = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
