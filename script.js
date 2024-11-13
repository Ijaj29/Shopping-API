fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json(); // converted to object in json format
}).then((objectData) =>{
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((value) => {
        tableData += `<tr>
        <td>${value.title}</td>
        <td>${value.category}</td>
        <td>${value.description}</td>
        <td>${value.price}</td>
        <td><img src="${value.image}" /></td>
        <td><button type="button" onclick="onDelete(this)" class="btn btn-primary">Delete</button></td>
      </tr>`;

    });
    document.getElementById("table_body").innerHTML = tableData;
})

function onDelete(th) {
    if (confirm('Are you sure to delete this record?')) {
        row = th.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}

$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });


  function onFormSubmit() {

        var formData = readFormData();
            insertNewRecord(formData);
        resetForm();
    }


function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    
    formData["category"] = document.getElementById("category").value;
    formData["description"] = document.getElementById("description").value;
    formData["price"] = document.getElementById("price").value;
    formData["image"] = document.getElementById("image").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    console.log('data',table);
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
   // var img = <img src = "${data.image}" />
    cell4.innerHTML =  data.image;
    cell4 = newRow.insertCell(5);
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    selectedRow = null;
}

var arrow = () => {
    console.log("Hello");
}