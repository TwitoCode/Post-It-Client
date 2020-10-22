import { gql } from '@apollo/client';

export const POSTS = gql`
	query {
		posts {
			name
			desc
			username
		}
	}
`;

export const POST_BY_USER = gql`
	query Posts($username: String) {
		posts(username: $username) {
			name
			desc
			username
		}
	}
`;

export const CREATE_POST = gql`
	mutation CreatePost($username: String, $userID: ID, $name: String, $desc: String) {
		createPost(username: $username, userID: $userID, name: $name, desc: $desc) {
			username
			desc
			name
      _id
		}
	}
`;
// export const CREATE_POST = gql`
// 	mutation CreatePost($username: String, $userID: ID, $name: String, $desc: String) {
// 		createPost(username: $username, userID: $userID, name: $name, desc: $desc) {
// 			username
// 			desc
// 			name
// 		}
// 	}
// `;
