import React, { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../global';
import { PostsContext } from '../../contexts/PostsContext';
import { Navbar } from '../../misc/Navbar/Navbar';
import { Post as PostComp } from '../../misc/Post/Post';
import './Posts.scss';

export const Posts: FC = () => {
	const { posts, refetchTime } = useContext(PostsContext);

	useEffect(() => {
		posts.refetch();
	}, []);

	return (
		<>
			<Navbar />
			<div className='posts'>
				<div className='container'>
					<h1 className='header'>All Posts</h1>
					<h1 className='refetch-time'>Refetching Posts in {refetchTime}s</h1>
					<div className='create-post'>
						<Link to='/posts/create'>
							<button className='create-post-link'>Create a Post</button>
						</Link>
					</div>

					{posts?.error?.message}
					{posts?.loading && <h1>Loading Posts...</h1>}
					{posts?.data?.posts?.map((post: Post, i) => {
						return (
							<PostComp
								username={post.username}
								name={post.name}
								desc={post.desc}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
