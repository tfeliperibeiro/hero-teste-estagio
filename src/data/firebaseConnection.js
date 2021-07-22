import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDog0Hc9HDn2l_M4Y5rdh3CyyZz8jmgDYk',
  authDomain: 'teste-estagio-f1c4c.firebaseapp.com',
  projectId: 'teste-estagio-f1c4c',
  storageBucket: 'teste-estagio-f1c4c.appspot.com',
  messagingSenderId: '1066328205599',
  appId: '1:1066328205599:web:82ee0abef6cb617dade82a',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
