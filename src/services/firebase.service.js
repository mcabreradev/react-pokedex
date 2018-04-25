import * as firebase from "firebase";

class FirebaseService {

  /**
   * 
   */
  connect() {
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

    return this;
  }

  /**
   * 
   * @param {*} database 
   */
  getReference(database) {

    return firebase.database().ref(database);
  }

  /**
   * 
   * @param {*} database 
   */
  getAll(database) {

    return new Promise((resolve, reject) => {
      this.connect()
        .getReference(database)
        .on("value", snapshot => {
          
          if (snapshot.val() === null) {
            reject({error: true, message: "No data was found, check firebase reference or collection name"});
          }

          resolve(snapshot.val());
        });
    });
  }
}

export default FirebaseService;
