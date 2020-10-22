import React, { ReactElement } from 'react';
import './Post.scss';

interface Props {
	name: string;
	desc: string;
	username: string;
}

export const Post = (props: Props): ReactElement => {
	return (
		<div className='post-card'>
			<div className='user-details'>
				<h1 className='name'>{props.username}</h1>
			</div>
			<div className='post-details'>
				<div>
					<h1 className='name'>{props.name}</h1>
				</div>

				<div>
					<h1 className='desc'>{props.desc}</h1>
				</div>
			</div>
		</div>
	);
};
