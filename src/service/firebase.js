import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws",
  authDomain: "pocemon-game.firebaseapp.com",
  databaseURL: "https://pocemon-game-default-rtdb.firebaseio.com",
  projectId: "pocemon-game",
  storageBucket: "pocemon-game.appspot.com",
  messagingSenderId: "627601982488",
  appId: "1:627601982488:web:403b35dd3df4ab96002f6d",
};
firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off()
  }

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child("pokemons").push().key;

    this.database
      .ref("pokemons/" + newKey)
      .set(data).then(() => cb && cb());
  };
  
}

const FirebaseClass = new Firebase()

export default FirebaseClass;
