import firebase from 'firebase/app'
import 'firebase/database'; // If using Firebase database
import { firebaseConfig } from "../config";

class Firebase {

    connect() {

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        return this;
    }

    getReference(database) {

        return firebase.database().ref(database);
    }

    fetch(database) {

        return new Promise((resolve, reject) => {
            this.connect().getReference(database).on("value", snapshot => {

                if (snapshot.val() === null) {
                    reject({
                        error: true,
                        message: "No data was found, check firebase reference or collection name"
                    });
                }

                resolve(snapshot.val());
            });
        });
    }
}

export default Firebase;