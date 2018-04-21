import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDgqeNkCUodXHzrAl1BNQH7urZUNlKtpp8",
    authDomain: "pokedex-ea634.firebaseapp.com",
    databaseURL: "https://pokedex-ea634.firebaseio.com",
    projectId: "pokedex-ea634",
    storageBucket: "",
    messagingSenderId: "713621560394"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;