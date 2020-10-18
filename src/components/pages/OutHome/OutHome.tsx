import React, { FC } from 'react';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { PostExample } from './PostExample/PostExample';

export const OutHome: FC = () => {
	return (
		<>
			<Jumbotron />
			<PostExample />
		</>
	);
};
