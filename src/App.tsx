import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import { HomeContainer } from './components/pages/HomeContainer';
import { Posts } from './components/pages/Posts/Posts';
import { SignInOrUpContainer } from './components/pages/SignInOrUpContainer/SignInOrUpContainer';

export const App: FC = () => {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route exact path='/' component={HomeContainer} />
					<Route path='/posts' component={Posts} />
					<Route path='/account/:type' component={SignInOrUpContainer} />
				</Switch>
			</AuthProvider>
		</Router>
	);
};
