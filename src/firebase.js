import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA6HR6IKnMcQ8c-EpyU0gEmv1eSzaXU4sI",
    authDomain: "crud-ego.firebaseapp.com",
    databaseURL: "https://crud-ego.firebaseio.com",
    projectId: "crud-ego",
    storageBucket: "crud-ego.appspot.com",
    messagingSenderId: "346418500958",
    appId: "1:346418500958:web:0a0030d2c4187577b42bcf"
  };

  // var firebaseConfig = {
  //   apiKey: "AIzaSyCR-2_ns3VVa62HqDwWeV2qO7hm-B7vbHU",
  //   authDomain: "ego-second-crud.firebaseapp.com",
  //   databaseURL: "https://ego-second-crud.firebaseio.com",
  //   projectId: "ego-second-crud",
  //   storageBucket: "ego-second-crud.appspot.com",
  //   messagingSenderId: "548950553474",
  //   appId: "1:548950553474:web:b4ef55062bf171d388159b"
  // };

  // Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();