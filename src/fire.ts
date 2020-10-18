import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyDTKWDzpuZs0WU7a8waZ_dhkUfa7D4ceak',
	authDomain: 'twitocode-projects.firebaseapp.com',
	databaseURL: 'https://twitocode-projects.firebaseio.com',
	projectId: 'twitocode-projects',
	storageBucket: 'twitocode-projects.appspot.com',
	messagingSenderId: '93850862272',
	appId: '1:93850862272:web:4d22022292e7477b026325',
	measurementId: 'G-DRW6HNEZTN',
});

export const auth = app.auth();
export default app;
