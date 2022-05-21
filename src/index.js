import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAw1gqT3vBrBYbWIJuCBhsIFpQw0u_pkxs",
    authDomain: "firetodoss.firebaseapp.com",
    projectId: "firetodoss",
    storageBucket: "firetodoss.appspot.com",
    messagingSenderId: "280107591892",
    appId: "1:280107591892:web:45a0bc64bd4c62d1b97341",
    measurementId: "G-R84DF7NE4N"
  };

initializeApp(firebaseConfig);
const database = getFirestoreDatabase();
