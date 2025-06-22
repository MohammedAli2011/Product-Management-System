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
// 
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
    pro.push(products);
    localStorage.setItem("pro", JSON.stringify(pro));
    clear();
    read();
};
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
                <td class="fw-bold fs-5"><button class="p-2 rounded bg-primary mt-3">Update</button></td>
                <td class="fw-bold fs-5"><button onclick="remove()" class="p-2 rounded bg-danger mt-3">Delete</button></td>
            </tr>
        `;
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
    localStorage.removeItem("pro");
    read();
};
// delete all button
function deleteAll(i) {
    pro.splice(i);
    localStorage.clear();
    read();
};
console.log(pro);