import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { UserForm } from '../../misc/UserForm/UserForm';

export const SignInOrUpContainer: FC = () => {
	const { type } = useParams<{type: string}>();

	return (
		<>
			{type === 'signup' && <UserForm type='up' />}
			{type === 'signin' && <UserForm type='in' />}
		</>
	);
};
