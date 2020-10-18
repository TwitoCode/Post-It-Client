import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import { HomeContainer } from './components/pages/HomeContainer';
import { Posts } from './components/pages/Posts/Posts';

export const App: FC = () => {
	return (
		<Router>
			<Switch>
				<AuthProvider>
					<Route exact path='/' component={HomeContainer} />
					<Route path='/posts' component={Posts} />
				</AuthProvider>
			</Switch>
		</Router>
	);
};
