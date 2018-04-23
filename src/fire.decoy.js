import firebase from "firebase";
let database;

export const init = () => {
  let config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXX"
  };
  firebase.initializeApp(config);
  database = firebase.database();
};
