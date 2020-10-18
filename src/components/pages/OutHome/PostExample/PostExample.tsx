import React, { FC } from 'react';
import { PostCardExample } from '../PostCardExample/PostCardExample';
import './PostExample.scss';

export const PostExample: FC = () => {
	return (
		<div className='post-example'>
			<h1 className="header">Post Example</h1>
			<PostCardExample
				name='Look what I Found'
				desc='While i was adventuring inside this cave, I saw this very strange spider that looked almost like a snake'
				userName='Twito'
			/>
		</div>
	);
};
