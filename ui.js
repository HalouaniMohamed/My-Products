function productBox({ id, name, price, qt, url }) {
  return `
    <div class="products">
        <img alt="img" id="ProductImg" src="${url}">
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        <a href="#" onClick="handleEditButton(${id})" ><img alt="edit" id="edit"  src=" http://lnnk.in/aBfb"></a>
        <a href="#" onClick="handleDeleteButton(${id})" ><img alt="delete" id="delete"  src=" http://lnnk.in/gXcb"></a
        <br>
        <p>${name}</p>
        <p>${price}dt (${qt})</p>
     </div>
    `;
}

function displayProducts() {
  ref.on("value", gotData, errorData);
}

function errorData(error) {
  console.log(error.message, error.code);
}
function gotData(data) {
  if (data.exists()) {
    data = data.val();
    let keys = Object.keys(data);
    let productsElement = document.querySelector(".left");
    productsElement.innerHTML = `<div class="download">
    <button onclick="handleDownloadButton()">
        Download Products
      </button>
  </div>`;

    for (let i = 0; i < keys.length; i++) {
      productsElement.innerHTML += productBox(data[keys[i]]);
    }
    globalThis.lastID = data[keys[keys.length - 1]].id + 1;
  } else {
    globalThis.lastID = 0;
    let productsElement = document.querySelector(".left");
    productsElement.innerHTML = "";
  }
}

function getFormData() {
  let formData = {
    name: document.querySelector("#name").value,
    price: parseInt(document.querySelector("#price").value),
    qt: parseInt(document.querySelector("#qt").value),
    url: document.querySelector("#url").value,
  };

  return formData;
}

// add product to firebase
function addProduct({ name, price, qt, url }) {
  let newProduct = {
    id: lastID,
    name: name,
    price: price,
    qt: qt,
    url: url,
  };
  ref.push(newProduct);
}

// create button
function handleCreateButton() {
  addProduct(getFormData());
  handleResetButton();
  displayProducts();
}

// reset button
function handleResetButton() {
  let nigga = document.querySelectorAll("input");
  nigga.forEach((zeb) => (zeb.value = ""));
}

// edit button
function handleEditButton(id) {
  ref.on("value", (snapshot) => {
    snapshot = snapshot.val();
    let keys = Object.keys(snapshot);
    for (let i = 0; i < keys.length; i++) {
      if (snapshot[keys[i]].id == id) {
        k = keys[i];
        globalThis.idd = k;
        break;
      }
    }
    document.querySelector("#name").value = snapshot[k].name;
    document.querySelector("#price").value = snapshot[k].price;
    document.querySelector("#qt").value = snapshot[k].qt;
    document.querySelector("#url").value = snapshot[k].url;
  });
}

//save button
function handleSaveButton(k) {
  database.ref("Products/" + k).update({
    // id: lastID,
    name: document.querySelector("#name").value,
    price: parseInt(document.querySelector("#price").value),
    qt: parseInt(document.querySelector("#qt").value),
    url: document.querySelector("#url").value,
  });
  displayProducts();
  handleResetButton();
}

//delete button
function handleDeleteButton(id) {
  let conf = confirm("fk u kid", "confirm");
  if (conf) {
    ref.once(
      "value",
      (snapshot) => {
        displayProducts();
        if (snapshot.exists()) {
          snapshot = snapshot.val();
          let keys = Object.keys(snapshot);
          for (let i = 0; i < keys.length; i++) {
            if (snapshot[keys[i]].id == id) {
              globalThis.f = keys[i];
            }
          }
          ref.child(f).remove();
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }
  displayProducts();
}

function handleDownloadButton() {
  products=[];
  ref.on("value", (snapshot) => {
    snapshot = snapshot.val();
    let keys = Object.keys(snapshot);
    for (let i = 0; i < keys.length; i++) {
      let tempProduct = {
        
        name: snapshot[keys[i]].name,
        price: snapshot[keys[i]].price,
        qt: snapshot[keys[i]].qt,
        url: snapshot[keys[i]].url,
      };
      
      products.push(tempProduct);
    }
  });
  download("products.json", JSON.stringify(products));
}

function download(jsonPath, text) {
  let element = document.createElement("a");
  element.style.display = "none";
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", jsonPath);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


function handleUploadButton(){
  
  let fileToRead = document.querySelector('#inputFile').files[0];
  let fileRead = new FileReader();
  fileRead.onload = function(e) {
    
    let content = e.target.result;
    let parsedContent = JSON.parse(content);
    let conf = confirm("fk u kid","confirm");
    if (conf){
      for ( let i =0 ; i < parsedContent.length ; i++){
        addProduct(parsedContent[i]);
        
      }
    }
    

  }
  fileRead.readAsText(fileToRead);
  } 

