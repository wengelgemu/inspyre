import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBpGnJo0J4zNqn__wb94_uiZctLhAp0CC8',
  authDomain: 'in-spyre.firebaseapp.com',
  databaseURL: 'https://in-spyre.firebaseio.com',
  projectId: 'in-spyre',
  storageBucket: 'in-spyre.appspot.com',
  messagingSenderId: '931526394617'
};

export const app = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore(app);
export default firebase;