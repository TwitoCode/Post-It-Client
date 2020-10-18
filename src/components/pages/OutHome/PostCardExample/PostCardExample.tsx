import React, { ReactElement } from 'react';
import './PostCardExample.scss';

interface Props {
	name: string;
	desc: string;
	userName: string;
}

export const PostCardExample = (props: Props): ReactElement => {
	return (
		<div className='post-card'>
			<div className='user-details'>
				<h1 className='name'>{props.userName}</h1>
			</div>
			<div className='post-details'>
				<h1 className='name'>{props.name}</h1>
				<h1 className='desc'>{props.desc}</h1>
			</div>
		</div>
	);
};
