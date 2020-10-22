export interface Post {
	name: string;
	username: string;
	desc: string;
}

export interface Posts {
	posts: Array<Post>;
}

export type User = firebase.User | null;
