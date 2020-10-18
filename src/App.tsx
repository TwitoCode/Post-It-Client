import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import { Navbar } from './components/misc/Navbar/Navbar';
import { HomeContainer } from './components/pages/HomeContainer';
import { Posts } from './components/pages/Posts/Posts';

export const App: FC = () => {
	return (
		<Router>
			<AuthProvider>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomeContainer} />
					<Route path='/posts' component={Posts} />
				</Switch>
			</AuthProvider>
		</Router>
	);
};
