import React, { createContext, FC } from 'react';
import { auth } from '../../fire';

interface AuthContextData {
	signIn: (email: string, password: string) => Promise<SignOutput>;
	signUp: (email: string, password: string) => Promise<SignOutput>;
	signOut: () => void;
}

interface SignOutput {
	error: string | null;
	message: string | null;
}
export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC = ({ children }) => {
	const signIn = async (email: string, password: string): Promise<SignOutput> => {
		try {
			const cred = await auth.signInWithEmailAndPassword(email, password);
			return await {
				message: `Signed in Successfully | User: ${cred.user?.email}`,
				error: null,
			};
		} catch (error) {
			return await {
				message: null,
				error: error.message,
			};
		}
	};

	const signUp = async (email: string, password: string): Promise<SignOutput> => {
		try {
			const cred = await auth.createUserWithEmailAndPassword(email, password);
			return await {
				message: `Signed Up Successfully | User: ${cred.user?.email}`,
				error: null,
			};
		} catch (error) {
			console.log(error.message);
			return await { message: null, error: error.message };
		}
	};

	const signOut = () => auth.signOut();

	return (
		<AuthContext.Provider value={{ signIn, signOut, signUp }}>
			{children}
		</AuthContext.Provider>
	);
};
