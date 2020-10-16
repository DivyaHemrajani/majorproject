var firebase=require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyB8Gv81wOOU1XapNnHdi9K_ZOeGg87iCqw",
    authDomain: "majorproject-65e2a.firebaseapp.com",
    databaseURL: "https://majorproject-65e2a.firebaseio.com",
    projectId: "majorproject-65e2a",
    storageBucket: "majorproject-65e2a.appspot.com",
    messagingSenderId: "317701074245",
    appId: "1:317701074245:web:3aec79b12c5ffc9ae0a22c",
    measurementId: "G-RKJ4X3DCB4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db=firebase.database();
  module.exports=db;