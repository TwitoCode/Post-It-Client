import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import { HomeContainer } from './components/pages/HomeContainer';
import { Posts } from './components/pages/Posts/Posts';
import { SignInOrUpContainer } from './components/pages/SignInOrUpContainer/SignInOrUpContainer';
import { Apollo } from './components/contexts/Apollo';
import { CreatePost } from './components/pages/CreatePost/CreatePost';
import { PostsProvider } from './components/contexts/PostsContext';

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
						</Switch>
					</PostsProvider>
				</Apollo>
			</AuthProvider>
		</Router>
	);
};
