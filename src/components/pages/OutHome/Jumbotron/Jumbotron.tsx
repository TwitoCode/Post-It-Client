import React, { FC } from 'react';
import './Jumbotron.scss';

export const Jumbotron: FC = () => {
	return (
		<div className='jumbotron'>
			<div className='details'>
				<h1 className='header'>Post-It</h1>
				<h3 className='header-body'>The site to see what people are up too</h3>
				<div className='buttons'>
					<button>Sign Up</button>
				</div>
			</div>
		</div>
	);
};
