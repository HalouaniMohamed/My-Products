// var firebaseConfig = {
//     apiKey: "AIzaSyCQYWUthI8LVhJCQZJVTSLxf_4lknV5AIw",
//     authDomain: "products-38161.firebaseapp.com",
//     databaseURL: "https://products-38161-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "products-38161",
//     storageBucket: "products-38161.appspot.com",
//     messagingSenderId: "592713496994",
//     appId: "1:592713496994:web:b366d3424084348a581afb"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// let database = firebase.database();

// let ref = database.ref("Products");






function clientProductsBox({id,name,price,qt,url}){
    return `
    <div class="product">
          <img alt="product" src="${url}" />

          <div class="product-info">
            <p>${name}</p>
            <p>${price} (${qt} piece(s))</p>
        </div>
    </div>
    `
}

function displayClientProducts(){
    let clientProductElement = document.querySelector(".container");
    
    firebase.database().ref("Products").on("value",(snapshot) =>{
        snapshot = snapshot.val();
        let keys = Object.keys(snapshot);
        clientProductElement.innerHTML=``;
        for (let i = 0 ; i < keys.length ; i++){
            clientProductElement.innerHTML += clientProductsBox(snapshot[keys[i]]);
        }
    })
    
};



displayClientProducts();