import { QueryResult, useMutation, useQuery } from '@apollo/client';
import React, {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../fire';
import { Posts, User } from '../../global';
import { CREATE_POST, POSTS, POST_BY_USER } from '../misc/queries';

interface PostsContextInterface {
	postDetails: PostDetails;
	setPostDetails: Dispatch<SetStateAction<PostDetails>>;

	postsByUser: QueryResult<Posts, Record<string, any>>;
	posts: QueryResult<Posts, Record<string, any>>;
	createPostFunc: () => void;
	refetchTime: number;
}

interface PostDetails {
	name: string | undefined | null;
	desc: string | undefined | null;
}

export const PostsContext = createContext({} as PostsContextInterface);

export const PostsProvider: FC = ({ children }) => {
	const [user, setUser] = useState<User>(auth.currentUser);
	const [postDetails, setPostDetails] = useState<PostDetails>({
		name: undefined,
		desc: undefined,
	});
	const [refetchTime, setRefetchTime] = useState(120);

	const posts = useQuery<Posts>(POSTS);

	const postsByUser = useQuery<Posts>(POST_BY_USER, {
		variables: { username: user?.displayName },
	});

	const input = {
		username: auth?.currentUser?.displayName && auth.currentUser.displayName,
		userID: auth?.currentUser?.uid && auth.currentUser.uid,
		name: postDetails.name,
		desc: postDetails.desc,
	};

	const [createPost] = useMutation(CREATE_POST, { variables: { ...input } });

	useEffect(() => {
		auth.onAuthStateChanged((user) => setUser(user));
	}, []);

	useEffect(() => {
		createPost();

		const interval = setInterval(() => {
			posts.refetch();
			setRefetchTime(120);
		}, 120000);

		const refetchInterval = setInterval(() => setRefetchTime((state) => state - 1), 1000);

		return () => {
			clearInterval(interval);
			clearInterval(refetchInterval);
		};
	}, [postDetails]);

	const createPostFunc = () => {
		createPost().then((data) => {
			console.log(data);
			posts.refetch();
		});
	};

	return (
		<PostsContext.Provider
			value={{
				postDetails,
				setPostDetails,
				postsByUser,
				posts,
				createPostFunc,
				refetchTime,
			}}>
			{children}
		</PostsContext.Provider>
	);
};
