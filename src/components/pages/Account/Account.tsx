import React, { FC, useContext } from 'react';
import { auth } from '../../../fire';
import { Post as IPost } from '../../../global';
import { PostsContext } from '../../contexts/PostsContext';
import { Navbar } from '../../misc/Navbar/Navbar';
import { Post } from '../../misc/Post/Post';
import './Account.scss';

export const Account: FC = () => {
	const { postsByUser } = useContext(PostsContext);

	return (
		<>
			<Navbar />
			<div>
				<div className='container'>
					<div className='grid'>
						<div className='account-user-details'>
							<h1 className='account-username'>{auth.currentUser?.displayName}</h1>
						</div>
						<div className='empty'></div>
						<div className='account-user-posts'>
							<h1 className='posts-header'>Posts</h1>
							{postsByUser?.data?.posts.map((post: IPost, i) => {
								const { name, username, desc } = post;
								return <Post name={name} username={username} desc={desc} key={i} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
