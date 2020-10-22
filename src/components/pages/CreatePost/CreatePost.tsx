import React, { FC, FormEvent, useContext, useState } from 'react';
import { PostsContext } from '../../contexts/PostsContext';
import { Navbar } from '../../misc/Navbar/Navbar';
import './CreatePost.scss';

export const CreatePost: FC = () => {
	const { setPostDetails } = useContext(PostsContext);
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPostDetails({ name, desc });
	};

	return (
		<>
			<Navbar />
			<form onSubmit={submit} className='create-post-form'>
				<h1 className='header'>Create Post</h1>
				<div className='container'>
					<div className='input-group'>
						<label>Name</label>
						<input
							type='text'
							className='input-field'
							placeholder='Example: My Summer Vacation to Florida'
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</div>
					<div className='input-group' style={{ marginTop: '2rem' }}>
						<label>Desc</label>
						<textarea
							name='textarea'
							rows={15}
							onChange={(e) => setDesc(e.target.value)}
							value={desc}></textarea>
					</div>
        </div>
        <button className="create-button">Create Post</button>
			</form>
		</>
	);
};
