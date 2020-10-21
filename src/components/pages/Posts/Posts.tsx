import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../interfaces';
import { Navbar } from '../../misc/Navbar/Navbar';
import { Post as PostComp } from '../../misc/Post/Post';
import { POSTS } from '../../misc/queries';
import './Posts.scss';

export const Posts: FC = () => {
	const { data, loading, error } = useQuery(POSTS);
	// const { data } = useQuery(POST_BY_USER, { variables: { username: 'twito' } });

	return (
		<>
			<Navbar />
			<div className='posts'>
				<div className='container'>
					<h1 className="header">All Posts</h1>
					<Link to='/posts/create'><button className='create-post-link'>Create a Post</button></Link>
					{error && error.message}
					{loading && <h1>Loading Posts...</h1>}
					{data?.posts?.map((post: Post) => {
						return (
							<PostComp username={post.username} name={post.name} desc={post.desc} />
						);
					})}
				</div>
			</div>
		</>
	);
};
