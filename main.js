// access on elements
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let totalC = document.getElementById("totalC");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let btn = document.getElementById("btn");
let deleteAllBtn = document.getElementById("btn-4")
let tBody = document.getElementById("tBody");
let temp;
let mode = "create";

// control

function save() {
    localStorage.setItem("pro", JSON.stringify(pro));
};

// getTotal

function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        totalC.classList.remove("bg-danger");
        totalC.classList.add("bg-success");
        total.innerHTML = result;
    } else {
        totalC.style.background = "#dc3545";
        total.innerHTML = "";
    };
};

// create products

let pro;

if (localStorage.pro != null) {
    pro = JSON.parse(localStorage.pro);
} else {
    pro = [];
};

btn.onclick = function () {
    let products = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    };

    if (mode === "create") {
        pro.push(products);
        save();

        if (title.value === "" || price.value === "" || count.value === "") {
            pro.splice(temp, 1);
            save();
            alert("You Should Write In Title & Price & Count");
        };

        clear();
        taxes.value = 0;
        ads.value = 0;
        discount.value = 0;
        read();
    } else {
        pro[temp] = products;
        mode = "create";
        clear();
        taxes.value = 0;
        ads.value = 0;
        discount.value = 0;
        read();
        btn.innerHTML = "Create";
        totalC.classList.remove("bg-success");
        totalC.classList.add("bg-danger");
        save();
    };
};

taxes.value = 0;
ads.value = 0;
discount.value = 0;

// clear inputs

function clear() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
};

// read

function read() {
    let table = "";

    for (let i = 0; i < pro.length; i++) {
        table += `
        <tr class="w-100">
        <td class="fw-bold fs-5">${i + 1}</td>
        <td class="fw-bold fs-5">${pro[i].title}</td>
        <td class="fw-bold fs-5">${pro[i].price}</td>
        <td class="fw-bold fs-5">${pro[i].taxes}</td>
        <td class="fw-bold fs-5">${pro[i].ads}</td>
        <td class="fw-bold fs-5">${pro[i].discount}</td>
        <td class="fw-bold fs-5">${pro[i].total}</td>
        <td class="fw-bold fs-5">${pro[i].count}</td>
        <td class="fw-bold fs-5">${pro[i].category}</td>
        <td class="fw-bold fs-5"><button onclick ="update(${i})" class="fs-5 p-2 btn btn-primary mt-3 btn-p">Update</button></td>
        <td class="fw-bold fs-5"><div class="btn-group">
            <button onclick ="remove(${i})" type="button" class="btn btn-danger p-2 mt-3 fs-5">Delete Product</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split p-2 mt-3" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu p-0 bg-secondary rounded-0">
            <li><input id="deleteCount" placeholder="Delete Count" class="w-100 p-2 border border-0 border-bottom border-black" type="number"></li>
                <li><button onclick="dRemove(${i})" class="btn btn-black p-2 w-100 rounded-0 fs-5 border-top border-black">Delete</button></li>
                </ul>
            </div>
            </td>
            </tr>
        `;

        document.getElementById("num").innerHTML = i + 1;

    };

    tBody.innerHTML = table;

    if (pro.length === 0) {
        deleteAllBtn.classList.add("d-none");
    } else {
        deleteAllBtn.classList.remove("d-none");
    };

};

read();

// delete

function remove(i) {
    pro.splice(i, 1);
    read();
    save();
};

function dRemove(i) {
    pro[i].count -= document.getElementById("deleteCount").value;
    
    /*     
    if (pro[i].count === 0) {
        pro.splice(i, 1);
    }; 
    */

    save();
    read();
};

// delete all button

function deleteAll(i) {
    pro.splice(i);
    localStorage.clear();
    read();
};

// update

function update(i) {
    title.value = pro[i].title
    price.value = pro[i].price;
    taxes.value = pro[i].taxes;
    ads.value = pro[i].ads;
    discount.value = pro[i].discount;
    total.innerHTML = pro[i].total
    count.value = pro[i].count;
    category.value = pro[i].category;
    btn.innerHTML = "Update";
    totalC.classList.remove("bg-danger");
    totalC.classList.add("bg-success");
    mode = "update"
    temp = i
};