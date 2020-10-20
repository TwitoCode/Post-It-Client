import React, { FC } from 'react';
import { Navbar } from '../../misc/Navbar/Navbar';
import { Jumbotron } from './Jumbotron/Jumbotron';

export const InHome: FC = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
		</>
	);
};
