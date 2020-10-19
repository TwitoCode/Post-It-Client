import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { UserForm } from '../../misc/UserForm/UserForm';
import './SignInOrUpContainer.scss';

export const SignInOrUpContainer: FC = () => {
	const { type } = useParams<{ type: string }>();

	return (
		<div className='bg'>
			<div className='form-container'>
				<div className='grid-container'>
					<div className='grid'>
						<div className='child'>
							{type === 'signup' && <UserForm type='up' />}
							{type === 'signin' && <UserForm type='in' />}
						</div>

						<div className='img'></div>
					</div>
				</div>
			</div>
		</div>
	);
};
