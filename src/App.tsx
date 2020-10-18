import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeContainer } from './components/pages/HomeContainer';
import { Posts } from './components/pages/Posts/Posts';

export const App: FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomeContainer} />
				<Route path='/:userID/posts' component={Posts} />
			</Switch>
		</Router>
	);
};
