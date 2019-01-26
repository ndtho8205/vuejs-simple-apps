import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBlqLZiBnHD0bWxv32ZPY0WcUUX4XUWavw',
  authDomain: 'turnout-v1.firebaseapp.com',
  databaseURL: 'https://turnout-v1.firebaseio.com',
  projectId: 'turnout-v1',
  storageBucket: '',
  messagingSenderId: '773876433181',
};

const firebaseApp = firebase.initializeApp(config);
const eventsRef = firebaseApp
  .database()
  .ref()
  .child('events');

export default firebaseApp;
export { eventsRef };
