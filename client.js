function displayClientProducts(){
    let clientProductsElement = document.querySelector(".container");
    clientProductsElement.innerHTM="";
    for(let i=0 ; i<products.length ; i++){
        clientProductsElement.innerHTML += clientProductBox(products[i])
    }
    
}
function clientProductsBox({name,price,qt,url}){
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

displayClientProducts();