import React, { createContext, FC } from 'react';
import { auth } from '../../fire';

interface AuthContextData {
	signIn: (email: string, password: string) => Promise<string>;
	signUp: (email: string, password: string) => Promise<string>;
	signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC = ({ children }) => {
	const signIn = async (email: string, password: string): Promise<string> => {
		try {
			const cred = await auth.signInWithEmailAndPassword(email, password);
			return `Signed in Successfully | User: ${cred.user?.email}`;
		} catch (error) {
			console.log(error.message);
			return error.message;
		}
	};

	const signUp = async (email: string, password: string): Promise<string> => {
		try {
			const cred = await auth.createUserWithEmailAndPassword(email, password);
			return `Signed Up Successfully | User: ${cred.user?.email}`;
		} catch (error) {
			console.log(error.message);
			return error.message;
		}
	};

	const signOut = () => auth.signOut();

	return (
		<AuthContext.Provider value={{ signIn, signOut, signUp }}>
			{children}
		</AuthContext.Provider>
	);
};
