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