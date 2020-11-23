let listOfProducts = [];

function addNewProduct() {
      let getProductName = document.getElementById("nameNewProduct");
      if (listOfProducts.indexOf(getProductName.value) != -1) {
            alert("Tên sản phẩm đã có trong cơ sở dữ liệu, xin mời kiểm tra lại");
            getProductName.value = "";
      } else if (getProductName.value.trim().length !== 0) {
            listOfProducts.unshift(getProductName.value.trim());
            displayListOfProducts();
            getProductName.value = "";
      } else {
            getProductName.value = "";
            
      }
}

function editNameProduct(productIndex) {
      let getButton = document.getElementById(`btnEditProductName_${productIndex}`);
      let getNameProducts = document.getElementById(`productName_${productIndex}`);
      if (getButton.innerHTML === "Edit") {
            getButton.innerHTML = "Save";
            getNameProducts.innerHTML = `<input type="text" name="editProductName" id="editProductName">`
            document.getElementById("editProductName").value = listOfProducts[productIndex];
      } else {
            getButton.innerHTML = "Edit";
            listOfProducts[productIndex] = document.getElementById("editProductName").value;
            getNameProducts.innerHTML = listOfProducts[productIndex];
      }
}

function deleteProduct(productIndex) {
      listOfProducts.splice(productIndex,1);
      displayListOfProducts();
}

function displayListOfProducts() {
      let displayProducts = document.getElementById("displayProducts");
      displayProducts.innerHTML = "";
      for (let i = 0; i < listOfProducts.length; i++) {
            displayProducts.innerHTML += `
            <tr><td id="productName_${i}" class="productName">${listOfProducts[i]}</td>
            <td class="btnEdit"><button id="btnEditProductName_${i}" onclick="editNameProduct(${i})">Edit</button></td>
            <td class="btnDelete" ><button id="btnDeleteProduct_${i}" onclick="deleteProduct(${i})">Delete</button></td></tr>`;
      }
      if (listOfProducts.length === 1) {
            document.getElementById("numberOfProducts").innerHTML = `${listOfProducts.length} product`;
      } else if (listOfProducts.length > 1) {
            document.getElementById("numberOfProducts").innerHTML = `${listOfProducts.length} product`;
      } else {
            document.getElementById("numberOfProducts").innerHTML = "";
      }
      
}
