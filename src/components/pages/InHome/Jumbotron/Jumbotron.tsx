import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.scss';

export const Jumbotron: FC = () => {
	return (
		<div className='jumbotron'>
			<div className='details'>
				<h1 className='header'>Welcome Back!</h1>
				<h3 className='header-body'>
					Go to the posts section to see what people are up to
				</h3>
				<div className='buttons'>
					<Link to='/posts'>
						<button>All Posts</button>
					</Link>
					<Link to='/posts/create'>
						<button>Create a Post</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
