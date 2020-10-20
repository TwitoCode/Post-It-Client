import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../fire';
import { AuthContext } from '../../contexts/AuthContext';

export const Navbar: FC = () => {
	const [user] = useAuthState(auth);
	const { signOut } = useContext(AuthContext);

	return (
		<div className='bar'>
			<div className='container'>
				<div className='flex'>
					<div className='flex nav-brand'>
						<h1 className='heading'>Post-It</h1>
					</div>
					<div className='flex nav-links'>
						<Link to='/' className='link'>
							Home
						</Link>
						<Link to='/posts' className='link'>
							Posts
						</Link>
						<Link to='/account' className='link'>
							Account
						</Link>
					</div>
					<div className='empty'>
						{!user && (
							<>
								<Link to='/account/signup'>
									<button className='sign-up'>Sign Up</button>
								</Link>
								<Link to='/account/signin' className='sign-in'>
									Or Sign In
								</Link>
							</>
						)}
						{user && (
							<>
								<h1 className='username'>Signed in as {user.displayName}</h1>
								<button className='sign-out' onClick={() => signOut()}>
									Sign Out
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
