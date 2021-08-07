

displayProducts();

document.querySelector(".form").addEventListener("submit",(e) => {
    e.preventDefault();
    handleCreateButton();
});
document.querySelector("#saveButton").addEventListener("click",(e) => {
    e.preventDefault();
    handleSaveButton(idd);
});

document.querySelector('#inputFile').addEventListener("change", (e)=>{
    handleUploadButton();
}
    
);

