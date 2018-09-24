export const techs = [
    "react",
    "redux",
    "firebase",
    "bulma",
    "flowtype"
];

export const firebaseConfig = {
    apiKey: "AIzaSyDgqeNkCUodXHzrAl1BNQH7urZUNlKtpp8",
    authDomain: "pokedex-ea634.firebaseapp.com",
    databaseURL: "https://pokedex-ea634.firebaseio.com",
    projectId: "pokedex-ea634",
    storageBucket: "",
    messagingSenderId: "713621560394"
};

export const getListFromArrKey = (arr, key) => {
    return arr.map(item => item[key]) // set all keys
      .reduce((a, b) => Array.isArray(b) ? a.concat(b) : [], []) // flat all keys
      .filter((key, pos, arr) => arr.indexOf(key) === pos) // remove duplicates
      .sort((last, next) => last > next ? 1 : -1); // alphabetical order
  };