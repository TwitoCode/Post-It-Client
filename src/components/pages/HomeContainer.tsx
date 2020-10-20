import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../fire';
import { InHome } from './InHome/InHome';
import { OutHome } from './OutHome/OutHome';

export const HomeContainer: FC = () => {
	const [user] = useAuthState(auth);

	return (
		<>
			{user && <InHome />}
			{!user && <OutHome />}
		</>
	);
};
