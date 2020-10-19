import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './SignUpToday.scss';

export const SignUpToday: FC = () => {
	return (
		<div className='sign-up-today'>
			<h1>Sign Up Today!</h1>
			<Link to='/account/signup'>
				<button>Sign Up</button>
			</Link>
		</div>
	);
};
