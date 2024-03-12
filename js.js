function showAllCustomer() {
    // alert("day la function hien thi ds")

    $.ajax({
    //     goi API backend
        type: "GET",
        url: "http://localhost:8080/api/customers",
        // xu ly khi goi thanh cong
        // du lieu tra ve khi goi thanh cong
        // xu ly thay doi ma html
        success: function (data){
            console.log(data)
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content+=`    <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].address}</td>
        <td>gender</td>
        <td>age</td>
    </tr>`
            }
            document.getElementById("list").innerHTML = content;
        }
    })
}

showAllCustomer();

function createNewCustomer(){
    // chan su kien mac dinh
    event.preventDefault();
    // lay du lieu
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    // chuyen thanh object
    let newCustomer = {
        "name": name,
        "age": age,
        "gender": gender,
        "address": address
    }
    $.ajax({
        headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/customers",
        data: JSON.stringify(newCustomer),
        success: showAllCustomer
    })
}
