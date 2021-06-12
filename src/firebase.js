import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAsfyjqB9m05Eud-0yLCO3ZsxguAc8NFvc',
    authDomain: 'chat-application-1edd3.firebaseapp.com',
    projectId: 'chat-application-1edd3',
    storageBucket: 'chat-application-1edd3.appspot.com',
    messagingSenderId: '231105136555',
    appId: '1:231105136555:web:02e604ac9b52dd827634ee',
  })
  .auth()
