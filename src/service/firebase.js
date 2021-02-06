import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws",
    authDomain: "pocemon-game.firebaseapp.com",
    databaseURL: "https://pocemon-game-default-rtdb.firebaseio.com",
    projectId: "pocemon-game",
    storageBucket: "pocemon-game.appspot.com",
    messagingSenderId: "627601982488",
    appId: "1:627601982488:web:403b35dd3df4ab96002f6d"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const fire = firebase;
  export const database = fire.database();

  export default database
  
  