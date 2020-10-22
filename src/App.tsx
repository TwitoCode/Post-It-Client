import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Apollo } from './components/contexts/Apollo';
import { AuthProvider } from './components/contexts/AuthContext';
import { PostsProvider } from './components/contexts/PostsContext';
import { Account } from './components/pages/Account/Account';
import { CreatePost } from './components/pages/CreatePost/CreatePost';
import { HomeContainer } from './components/pages/HomeContainer';
import { Posts } from './components/pages/Posts/Posts';
import { SignInOrUpContainer } from './components/pages/SignInOrUpContainer/SignInOrUpContainer';

export const App: FC = () => {
	return (
		<Router>
			<AuthProvider>
				<Apollo>
					<PostsProvider>
						<Switch>
							<Route exact path='/' component={HomeContainer} />
							<Route exact path='/posts' component={Posts} />
							<Route exact path='/account/:type' component={SignInOrUpContainer} />
							<Route exact path='/posts/create' component={CreatePost} />
							<Route exact path='/account' component={Account} />
						</Switch>
					</PostsProvider>
				</Apollo>
			</AuthProvider>
		</Router>
	);
};
