import React, { FC, useEffect, useState } from 'react';
import { auth } from '../../fire';
import { InHome } from './InHome/InHome';
import { OutHome } from './OutHome/OutHome';

type User = firebase.User;

export const HomeContainer: FC = () => {
	const [, setUser] = useState<User | null>(null);
	const [screenToShow, setScreenToShow] = useState(<></>);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
			if (user) {
				setScreenToShow(<InHome />);
			} else {
				setScreenToShow(<OutHome />);
			}
		});
	}, []);
	
	return <>{screenToShow}</>;
};
