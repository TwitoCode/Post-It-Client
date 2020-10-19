import React, { FormEvent, ReactElement, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './UserForm.scss';

interface Props {
	type: string;
}

export const UserForm = (props: Props): ReactElement => {
	const { signUp } = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error, message } = await signUp(email, password);

		if (error) {
			console.log(error);
			setError(error);
		} else if (message) {
			console.log(message);
			window.location.href = '/';
		}
	};

	return (
		<>
			{props.type === 'up' && (
				<form onSubmit={submit}>
					<h1>Sign Up</h1>
					<div className='input-group'>
						<label>Email</label>
						<input type='email' onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className='input-group'>
						<label>Password</label>
						<input type='password' onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div className='input-group'>
						<label>Username</label>
						<input onChange={(e) => setUsername(e.target.value)} />
					</div>
					<button type='submit' className='submit-button'>Submit</button>
					<h1 className='error'>{error}</h1>
				</form>
			)}
			{props.type === 'in' && (
				<div>
					<h1>Sign In</h1>
					<div className='email'></div>
				</div>
			)}
			{/* {(props.type !== 'out' || "in") && <h1>Type not valid</h1>} */}
		</>
	);
};
