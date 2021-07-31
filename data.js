var firebaseConfig = {
  apiKey: "AIzaSyCQYWUthI8LVhJCQZJVTSLxf_4lknV5AIw",
  authDomain: "products-38161.firebaseapp.com",
  databaseURL: "https://products-38161-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "products-38161",
  storageBucket: "products-38161.appspot.com",
  messagingSenderId: "592713496994",
  appId: "1:592713496994:web:b366d3424084348a581afb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





let database= firebase.database();

let ref = database.ref("Products");
 

