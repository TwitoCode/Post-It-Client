import React, { FC } from 'react';
import { Navbar } from '../../misc/Navbar/Navbar';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { PostExample } from './PostExample/PostExample';
import { SignUpToday } from './SignUpToday/SignUpToday';

export const OutHome: FC = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<PostExample />
			<SignUpToday />
		</>
	);
};
